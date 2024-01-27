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

    ws.addEventListener("open", open);

    ws.addEventListener("message", message);

    ws.addEventListener("close", close);

    ws.addEventListener("error", error);

    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  return {
    webSocket,
  };
};
