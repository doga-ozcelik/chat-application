import React from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";

export const mockMessages = [
  {
    id: "msg-1",
    senderId: "user-1",
    senderName: "Alice Johnson",
    content:
      "Hey, how are you doing today? Hey guys, do you want to grab lunch later? Hey guys, do you want to grab lunch later? Hey guys, do you want to grab lunch later? Hey guys, do you want to grab lunch later?",
  },
  {
    id: "msg-2",
    senderId: "user-2",
    senderName: "Bob Smith",
    content: "I’m doing great, thanks! How about you?",
  },
  {
    id: "msg-3",
    senderId: "user-1",
    senderName: "Alice Johnson",
    content: "I’m good too, just working on a new project.",
  },
  {
    id: "msg-4",
    senderId: "user-3",
    senderName: "Charlie Brown",
    content: "Hey guys, do you want to grab lunch later?",
  },
  {
    id: "msg-5",
    senderId: "user-2",
    senderName: "Bob Smith",
    content: "Sounds good to me!",
  },
  {
    id: "msg-6",
    senderId: "user-1",
    senderName: "Alice Johnson",
    content: "I’m in as well. Where should we go?",
  },
];

function App() {
  return (
    <div className="App">
      <ChatBox messages={mockMessages} />
    </div>
  );
}

export default App;
