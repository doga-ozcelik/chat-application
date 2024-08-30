import { useState } from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";
import MessageInput from "./components/MessageInput";
import { Message } from "./types";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="App">
      <div className="Container">
        <ChatBox messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
