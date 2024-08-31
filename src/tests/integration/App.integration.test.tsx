import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./../../App";

describe("App Component Integration", () => {
  test("sends a message through MessageInput", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Type a message...");
    fireEvent.change(inputElement, {
      target: { value: "Integration Test Message" },
    });

    fireEvent.submit(screen.getByTestId("message-input-form"));

    const messageElement = screen.getByText("Integration Test Message");
    expect(messageElement).toBeInTheDocument();
  });
});
