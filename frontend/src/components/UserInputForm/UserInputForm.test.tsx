import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserInputForm } from "./UserInputForm";

describe("UserInputForm", () => {
  test("renders", () => {
    render(<UserInputForm handleMessageSend={() => {}} />);
    expect(screen.getByText("Send")).toBeDefined();
  });

  test("gives out the right message", () => {
    render(<UserInputForm handleMessageSend={() => {}} />);
    const button = screen.getByText("Send");
    expect(button).toBeDefined();
    const input = screen.getByTestId<HTMLInputElement>("sendInput");
    expect(input).toBeDefined();
    fireEvent.change(input, {
      target: {
        value: "test value",
      },
    });
    expect(input.value).toBe("test value");
  });
});
