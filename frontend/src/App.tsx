import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";
import { UserInputForm } from "./components/UserInputForm/UserInputForm";
import { useWebsocket } from "./hooks";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    const containerNode = containerRef.current;
    if (containerNode) containerNode.scrollTop = containerNode.scrollHeight;
  }, [messages.length]);

  const handleMessageSend = (messageText: string) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(messageText);
      setMessages((prev) => [...prev, messageText]);
    }
  };

  return (
    <main className=" min-h-screen bg-slate-700 flex items-center justify-center">
      <section className="w-[450px] h-[700px] max-w-screen max-h-screen p-8 bg-white rounded-md flex flex-col items-center gap-8">
        <div
          ref={containerRef}
          className="h-full w-full flex flex-col flex-nowrap border-2 border-gray-400 p-2 overflow-y-scroll"
        >
          {messages.map((message, index) => (
            <h1
              key={index}
              className={cn(
                index % 2 !== 0 && "ml-auto",
                index === 0 && "mt-auto"
              )}
            >
              {message}
            </h1>
          ))}
        </div>
        <UserInputForm handleMessageSend={handleMessageSend} />
      </section>
    </main>
  );
}
