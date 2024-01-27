import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MessagesViewer } from "../components/MessagesViewer/MessagesViewer";

window.HTMLElement.prototype.scrollTo = function () {};

describe("ConnectionNotifier", () => {
  test("renders messages", () => {
    const mockMessages = ["message1", "message2", "message3"];
    render(<MessagesViewer messages={mockMessages} />);
    const message1 = screen.getByText("message1");
    expect(message1).toBeDefined();
  });
});
