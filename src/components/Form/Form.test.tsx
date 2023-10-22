import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "./index";

describe("Form", () => {
  it("renders input and button", () => {
    render(<Form allDone={false} onAddTodo={() => {}} />);
    expect(
      screen.getByPlaceholderText("what you have to do?")
    ).toBeInTheDocument();
    expect(screen.getByAltText("plus icon")).toBeInTheDocument();
  });

  it("calls onAddTodo when form is submitted with non-empty input", () => {
    const onAddTodo = jest.fn();
    render(<Form allDone={false} onAddTodo={onAddTodo} />);
    const input = screen.getByPlaceholderText("what you have to do?");
    const button = screen.getByAltText("plus icon");
    fireEvent.change(input, { target: { value: "test todo" } });
    fireEvent.click(button);
    expect(onAddTodo).toHaveBeenCalledWith("test todo");
  });

  it("does not call onAddTodo and displays toast notification when form is submitted with empty input", async () => {
    const onAddTodo = jest.fn();
    render(<Form allDone={false} onAddTodo={onAddTodo} />);
    const input = screen.getByPlaceholderText("what you have to do?");
    const button = screen.getByAltText("plus icon");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);
    expect(onAddTodo).not.toHaveBeenCalled();
    expect(await screen.findByText("Please add content")).toBeInTheDocument();
  });
});
