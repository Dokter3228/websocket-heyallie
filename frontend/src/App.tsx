import { useState } from "react";
import { UserInputForm } from "./components/UserInputForm/UserInputForm";
import { useWebsocket } from "./hooks";
import { ConnectionNotifier } from "./components/ConnectionNotifier/ConnectionNotifier";
import { MessagesViewer } from "./components/MessagesViewer/MessagesViewer";
import { ChatWrapper } from "./components/ChatWrapper/ChatWrapper";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const { webSocket } = useWebsocket({
    url: "ws://localhost:3000",
    open: () => console.log("WebSocket connection opened"),
    message: (event) => {
      const receivedMessage = event.data;
      setMessages((prev) => [...prev, receivedMessage]);
    },
    close: () => console.log("WebSocket connection closed"),
    error: () => console.log("Some error occured"),
  });

  const handleMessageSend = (messageText: string) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(messageText);
      setMessages((prev) => [...prev, messageText]);
    } else {
      setMessages((prev) => [...prev, messageText, "Mocked server response"]);
    }
  };

  // I could utilize some memoization here, but it doesn't seem necessary in this case,
  // performance benefits are very small and not worth sacrificing on readability and maintainability of the code

  return (
    <ChatWrapper>
      <ConnectionNotifier
        isConnected={webSocket?.readyState === WebSocket.OPEN}
      />
      <MessagesViewer messages={messages} />
      <UserInputForm handleMessageSend={handleMessageSend} />
    </ChatWrapper>
  );
}
