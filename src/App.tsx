import { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from './MessageList';

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }
  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
