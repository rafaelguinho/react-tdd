import { useState } from "react";

type TNewMessageFormProps = {
  onSend: Function;
};

export default function NewMessageForm({ onSend }: TNewMessageFormProps) {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </>
  );
}
