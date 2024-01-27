import { useEffect, useState } from "react";

export const useWebsocket = ({
  url,
  open = () => {},
  message = () => {},
  close = () => {},
  error = () => {},
}: {
  open?: (event: WebSocketEventMap["open"]) => void;
  message?: (event: WebSocketEventMap["message"]) => void;
  close?: (event: WebSocketEventMap["close"]) => void;
  error?: (event: WebSocketEventMap["error"]) => void;
  url: string;
}) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    // Usually it could be written a bit simpler, but because of the StrictMode that remounts components and by doing so closes and opens websocket connection twice I was forced to find a workaround.

    ws.addEventListener("open", (e) => {
      open(e);
      setWebSocket(ws);
    });

    ws.addEventListener("message", message);

    ws.addEventListener("close", (e) => {
      close(e);
      setWebSocket(null);
    });

    ws.addEventListener("error", error);

    return () => {
      ws.close();
    };
  }, []);

  return {
    webSocket,
  };
};
