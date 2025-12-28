import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(null); // null | "recruiter_email"
  const [emailError, setEmailError] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [dotCount, setDotCount] = useState(1);

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
    "Let Harshita know you are looking for a candidate",
  ];

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendRecruiterEmail = (email) => {
    console.log('email: ', email);
    return emailjs.send(
      "service_eui32ry",
      "template_vavxbp5",
      { email },
      "V6sAcg1go3SNBbaff"
    );
  };

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

    /* ---- Recruiter Flow ---- */
    if (text === "Let Harshita know you are looking for a candidate") {
      setMessages([
        ...messages,
        {
          role: "assistant",
          content:
            "That’s great! 🎉\n\nI’ll share this message with Harshita:\n\n“Hi Harshita, I came across your portfolio and would like to connect regarding a frontend / React opportunity.”\n\nPlease share your email so she can contact you.",
        },
      ]);
      setMode("recruiter_email");
      setInput("");
      return;
    }

    if (mode === "recruiter_email") {
      if (!isValidEmail(text)) {
        setEmailError("Please enter a valid email address.");
        return;
      }

      try {
        setSendingEmail(true);
        await sendRecruiterEmail(text);
        setMessages([
          ...messages,
          {
            role: "assistant",
            content:
              "✅ Thank you! Harshita has received your message and may reach out soon.",
          },
        ]);

        setMode(null);
        setEmailError("");
        setInput("");
      } catch {
        setEmailError("Something went wrong. Please try again.");
      } finally {
        setSendingEmail(false);
      }
      return;
    }

    /* ---- Normal AI Flow ---- */
    setEmailError("");
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
DO NOT say "I don't know".

Harshita Sahu is a React and React Native Developer with 2.5+ years of experience at Gammastack.

Projects:
1. FF Deposit Automation – automated SMS-based cash-in flow.
2. Casino Applications – daily bonus, spin-the-wheel, gameplay, multi-language.
3. Handheld Application – sportsbook app for 8Dex with printable bet slips and user management.

Skills:
React, React Native, JavaScript, Redux Toolkit, RTK Query, REST APIs.

Education:
BCA and MCA (CGPA 7.5).
`,
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

  return (
    <>
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
          zIndex: 1000,
        }}
      >
        🤖 Ask AI
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 24,
            width: 340,
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: "16px",
            padding: "14px",
            zIndex: 1000,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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

          <div className="ai-chat-scroll" style={{ height: 220, overflowY: "auto", marginTop: 10 }}>
            {messages.map((m, i) => (
              <p key={i} style={{ color: m.role === "assistant" ? "#e5e7eb" : "#38bdf8" }}>
                <strong>{m.role === "assistant" ? "AI" : "You"}:</strong> {m.content}
              </p>
            ))}
            {loading && <p style={{ color: "#94a3b8" }}>AI is thinking...</p>}
            <div ref={bottomRef} />
          </div>

          {emailError && (
            <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
          )}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "recruiter_email"
                ? "Enter your email"
                : "Ask about skills, experience..."
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #1e293b",
              background: "#020617",
              color: "white",
              marginTop: 6,
            }}
          />

          <button
            onClick={() => sendMessageWithText(input)}
            disabled={sendingEmail || loading}
            style={{
              marginTop: 6,
              width: "100%",
              padding: "8px",
              background: sendingEmail ? "#94a3b8" : "#38bdf8",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              cursor: sendingEmail ? "not-allowed" : "pointer",
              opacity: sendingEmail ? 0.8 : 1,
            }}
          >
            {sendingEmail
              ? `Sending email...`
              : loading
                ? "AI is thinking..."
                : "Send"}
          </button>
        </div>
      )}
    </>
  );
};

export default AIChat;
