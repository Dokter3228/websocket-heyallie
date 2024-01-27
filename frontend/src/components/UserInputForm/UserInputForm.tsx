import { useState } from "react";

export const UserInputForm = ({
  handleMessageSend,
}: {
  handleMessageSend: (messageText: string) => void;
}) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(formEvent) => {
        formEvent.preventDefault();
        handleMessageSend(message);
        setMessage("");
      }}
      className="w-full flex gap-4"
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        data-testid="sendInput"
      />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
        Send
      </button>
    </form>
  );
};
