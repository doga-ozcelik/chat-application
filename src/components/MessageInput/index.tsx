import React, { useState } from "react";
import "./MessageInput.css";
import { Message } from "../../types";

interface MessageInputProps {
  onSendMessage: (message: Message) => void;
}

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage({
        id: Math.random().toString(36).substr(2, 9),
        senderId: "user",
        senderName: "You",
        content: input,
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="Input"
      />
      <select className="Select">
        <option value="" disabled selected>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="submit" className="Button">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
