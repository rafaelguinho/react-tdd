type TMessageListProps = {
  data: string[];
};

export default function MessageList({ data }: TMessageListProps) {
  return (
    <ul>
      {data.map((message, index) => (
        <li data-testid={`messageItem_${index}`} key={message}>{message}</li>
      ))}
    </ul>
  );
}
