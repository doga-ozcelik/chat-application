import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput: React.FC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="Input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="Input"
      />
      <button type="submit">Send</button>
    </div>
  );
};

export default MessageInput;
