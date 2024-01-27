export const UserInputForm = ({
  handleMessageSend,
}: {
  handleMessageSend: (messageText: string) => void;
}) => (
  <form
    onSubmit={(formEvent) => {
      formEvent.preventDefault();

      // not very readable way to get an input value, would use a simple state if performance wasn't the ultimate goal
      const targetInput = formEvent.currentTarget
        .elements[0] as HTMLInputElement;

      const message = targetInput.value;
      if (message === "") return;
      handleMessageSend(message);

      (formEvent.target as HTMLFormElement).reset();
    }}
    className="w-full flex gap-4"
  >
    <input
      name="messageInput"
      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      data-testid="sendInput"
    />
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
      Send
    </button>
  </form>
);
