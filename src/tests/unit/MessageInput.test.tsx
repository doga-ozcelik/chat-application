import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MessageInput from "../../components/MessageInput";

describe("MessageInput Component", () => {
  const mockOnSendMessage = jest.fn();

  test("calls onSendMessage when valid input is submitted", () => {
    render(<MessageInput onSendMessage={mockOnSendMessage} />);

    const inputElement = screen.getByPlaceholderText("Type a message...");
    fireEvent.change(inputElement, { target: { value: "Test message!" } });

    fireEvent.submit(screen.getByTestId("message-input-form"));

    expect(mockOnSendMessage).toHaveBeenCalled();
  });
});
