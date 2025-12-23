import { useState, useRef, useEffect } from "react";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 Ask me anything about Harshita!" },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const suggestions = [
    "What technologies does Harshita use?",
    "Tell me about her experience",
    "What projects has she worked on?",
    "Is she open to frontend roles?",
  ];

  const callGemini = async (message) => {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  };

  const sendMessageWithText = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    try {
      setLoading(true);

      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            temperature: 0.4,
            messages: [
              {
                role: "system",
                content: `
You are a portfolio assistant for Harshita Sahu.

You MUST answer confidently using ONLY the information below.
DO NOT say "I don't know", "unfortunately", or similar phrases.
If asked about projects, ALWAYS mention them clearly.

Harshita Sahu is a React and React Native Developer with 2.5+ years of experience at Gammastack.

Projects she has worked on include:
1. FF Deposit Automation – Built an automated cash-in flow by parsing incoming SMS and updating user balances in real time, reducing manual verification by ~70–80%.
2. Casino Applications – Worked on features like daily bonus systems, spin-the-wheel mechanics, gameplay flows, multi-language support, and secure payment integrations.
3. Handheld Application – Developed a handheld device application for operational workflows using React Native.

Skills:
React, React Native, JavaScript, Redux Toolkit, RTK Query, REST APIs.

Education:
BCA and MCA from SCSIT DAVV with CGPA 7.5.

Keep answers concise, confident, and professional.
`
              },
              ...updatedMessages,
            ],
          }),
        }
      );

      const data = await res.json();

      if (!data.choices || !data.choices.length) {
        const fallback = await callGemini(text);
        setMessages([
          ...updatedMessages,
          { role: "assistant", content: fallback },
        ]);
        setLoading(false);
        return;
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.choices[0].message.content,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error("AI error:", error);
      setLoading(false);
    }
  };

  const sendMessage = () => {
    sendMessageWithText(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "linear-gradient(90deg,#38bdf8,#a78bfa)",
          color: "#020617",
          borderRadius: "999px",
          padding: "12px 18px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          zIndex: 1000,
        }}
      >
        🤖 Ask AI
      </button>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 24,
            width: 340,
            background: "linear-gradient(180deg,#020617,#020617cc)",
            border: "1px solid #1e293b",
            borderRadius: "16px",
            padding: "14px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
            zIndex: 1000,
          }}
        >
          {/* Suggestions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "10px",
            }}
          >
            {suggestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessageWithText(q)}
                style={{
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "999px",
                  border: "1px solid #1e293b",
                  background: "#020617",
                  color: "#38bdf8",
                  cursor: "pointer",
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div
            className="ai-chat-scroll"
            style={{
              height: 220,
              overflowY: "auto",
              fontSize: 14,
              marginBottom: 8,
            }}
          >

            {messages.map((m, i) => (
              <p
                key={i}
                style={{
                  marginBottom: "8px",
                  color: m.role === "assistant" ? "#e5e7eb" : "#38bdf8",
                }}
              >
                <strong>{m.role === "assistant" ? "AI" : "You"}:</strong>{" "}
                {m.content}
              </p>
            ))}

            {loading && (
              <p style={{ color: "#94a3b8", fontStyle: "italic" }}>
                AI is thinking...
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about skills, experience..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #1e293b",
              background: "#020617",
              color: "white",
              outline: "none",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              marginTop: 6,
              width: "100%",
              padding: "8px",
              background: "#38bdf8",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default AIChat;
