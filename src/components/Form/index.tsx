import { useCallback, useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import plusSolid from "../../assets/plus-solid.svg";

interface FormProps<T> {
  allDone: boolean;
  onAddTodo: (value: T) => void;
}

export const Form = ({ allDone, onAddTodo }: FormProps<string>) => {
  const newTodoRef = useRef<HTMLInputElement>(null);

  const notify = () =>
    toast.warn("Please add content", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newTodoRef.current && newTodoRef.current.value.trim() !== "") {
        onAddTodo(newTodoRef.current.value);
        newTodoRef.current.value = "";
      } else {
        notify();
      }
    },
    [onAddTodo]
  );

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <ToastContainer />

      <input placeholder="what you have to do?" ref={newTodoRef} />
      <button type="submit" className={`${allDone ? "done" : "not-done"} `}>
        <img className="icon" src={plusSolid} alt="plus icon" />
      </button>
    </form>
  );
};
