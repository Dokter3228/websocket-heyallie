import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ConnectionNotifier } from "../components/ConnectionNotifier/ConnectionNotifier";

describe("ConnectionNotifier", () => {
  test("displays the right message when connected", () => {
    render(<ConnectionNotifier isConnected />);
    const notify = screen.getByText("Successfully connected to websocket!");
    expect(notify).toBeDefined();
  });

  test("displays the right message when not connected", () => {
    render(<ConnectionNotifier isConnected={false} />);
    const notify = screen.getByText("Couldn't connect to websocket!");
    expect(notify).toBeDefined();
  });
});
