"use client";

import { useState } from "react";

const quickPrompts = [
  "Explain inflation more simply",
  "Give me a real-world example",
  "Quiz me on budgeting"
];

function buildDemoReply(message) {
  const text = message.toLowerCase();

  if (text.includes("inflation")) {
    return "Think of inflation as your money slowly losing buying power when general prices rise. If ₹100 bought 5 items before but now buys only 4, your purchasing power has fallen.";
  }

  if (text.includes("budget")) {
    return "A budget is a plan for where your money should go before you spend it. A simple starting framework is to separate needs, wants, and saving goals.";
  }

  if (text.includes("quiz")) {
    return "Quick quiz: If your monthly income is ₹20,000 and your expenses are ₹15,000, how much is left before any new spending?";
  }

  return "This is the frontend tutor demo. In the next project phase, this message box can send the question to your RAG backend, retrieve verified finance material, and return a grounded answer.";
}

export default function TutorDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I’m the FinLearn tutor interface. Ask me about a concept from your current lesson."
    }
  ]);
  const [input, setInput] = useState("");

  function sendMessage(text) {
    const clean = text.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "assistant", text: buildDemoReply(clean) }
    ]);
    setInput("");
  }

  return (
    <div className="tutor-shell">
      <div className="tutor-sidebar">
        <span className="eyebrow">CURRENT CONTEXT</span>
        <h3>Money Basics</h3>
        <p className="muted">Frontend demo mode</p>

        <div className="quick-prompts">
          {quickPrompts.map((prompt) => (
            <button key={prompt} onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-panel">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <span>{message.role === "assistant" ? "FinLearn" : "You"}</span>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <form
          className="chat-input-row"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(input);
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a finance question..."
          />
          <button className="button primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
