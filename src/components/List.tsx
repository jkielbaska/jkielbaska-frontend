import { Todo } from "../types/todo";
import trashBinIcon from "../assets/icons8-trash-bin-25.png";
import { useRef } from "react";

interface ListProps<T> {
  todos: Todo[];
  onRemoveTodo: (id: T) => void;
  onMarkAsDone: (id: T) => void;
}

export const List = ({
  todos,
  onRemoveTodo,
  onMarkAsDone,
}: ListProps<string>) => {
  const handleRemoveTodo = (id: string) => {
    const button = buttonRef.current[id];
    const element = elementRef.current[id];
    if (button) {
      element?.classList.add("slideout");
      setTimeout(() => {
        onRemoveTodo(id);
      }, 500);
    }
  };

  const buttonRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const elementRef = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => (
        <div
          className="list-element"
          ref={(el) => (elementRef.current[todo.id] = el)}
          key={todo.id}
        >
          <div className="div-done-delete">
            <div
              onClick={() => onMarkAsDone(todo.id)}
              className={`mobile-hide status-dot ${
                todo.done ? "done" : "not-done"
              }`}
            />

            <p
              onClick={() => onMarkAsDone(todo.id)}
              className={`list-text ${todo.done && "done"}`}
            >
              {todo.text}
            </p>

            <div className="mobile-navigation">
              <div
                onClick={() => onMarkAsDone(todo.id)}
                className={`status-dot ${todo.done ? "done" : "not-done"}`}
              />
              <p> | </p>
              <button
                className="icon-button"
                ref={(el) => (buttonRef.current[todo.id] = el)}
                onClick={() => handleRemoveTodo(todo.id)}
              >
                <img
                  src={trashBinIcon}
                  alt="trashCan icon"
                  style={{ color: "#cebea4" }}
                />
              </button>
            </div>
          </div>
          <button
            className="mobile-hide icon-button"
            ref={(el) => (buttonRef.current[todo.id] = el)}
            onClick={() => handleRemoveTodo(todo.id)}
          >
            <img src={trashBinIcon} alt="trashCan icon" />
          </button>
        </div>
      ))}
    </div>
  );
};
