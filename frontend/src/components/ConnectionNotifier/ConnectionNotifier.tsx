export const ConnectionNotifier = ({ isConnected }: { isConnected: boolean }) =>
  isConnected ? (
    <div
      className="p-4 text-sm text-green-800 rounded-lg bg-green-50"
      role="alert"
    >
      <span className="font-medium">Successfully connected to websocket!</span>
    </div>
  ) : (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <span className="font-medium">Couldn't connect to websocket!</span> You
      can still get mocked responses though.
    </div>
  );
