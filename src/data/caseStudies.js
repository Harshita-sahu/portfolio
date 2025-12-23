export const caseStudies = [
  {
    id: "ff-deposit",
    title: "FF Deposit Automation",
    problem:
      "Manual deposit verification caused delays, errors, and high operational overhead.",
    solution:
      "Designed and implemented an automated cash-in system that parses incoming SMS and updates user balances in real time.",
    role: [
      "Implemented SMS parsing logic",
      "Integrated APIs using RTK Query",
      "Handled edge cases like duplicate and failed transactions",
    ],
    tech: ["React Native", "JavaScript", "Redux Toolkit", "RTK Query"],
    impact: [
      "Reduced manual verification by ~70–80%",
      "Improved transaction accuracy",
      "Faster balance updates for users",
    ],
    challenges: [
      "Handling inconsistent SMS formats",
      "Preventing duplicate balance updates",
      "Designing idempotent API calls",
    ],
  },
];
