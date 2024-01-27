import { useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const MessagesViewer = ({ messages }: { messages: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerNode = containerRef.current;
    if (containerNode)
      containerNode.scrollTo({
        top: containerNode.scrollHeight,
        behavior: "smooth",
      });
  }, [messages.length]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex flex-col flex-nowrap border-2 border-gray-400 p-2 overflow-y-scroll"
    >
      {messages.map((message, index) => {
        // mock way to determine if the message is yours or not
        const isResponse = index % 2 !== 0;

        return (
          <span
            key={index} // index is appropriate to use here, because the order of the elements doesn't change
            className={cn(
              "break-all",
              isResponse ? "ml-auto" : "text-blue-400",
              index === 0 && "mt-auto"
            )}
          >
            <strong>{isResponse ? "Bot: " : "You: "}</strong>
            {message}
          </span>
        );
      })}
    </div>
  );
};
