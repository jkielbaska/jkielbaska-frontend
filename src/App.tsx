import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  selectTodos,
  removeTodo,
  markAsDone,
  addTodo,
} from "./redux/slices/todoSlice";

import { List } from "./components/List";
import { Form } from "./components/Form";
import { TitleCard } from "./components/TitleCard";

import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleMarkAsDone = (id: string) => {
    dispatch(markAsDone(id));
  };

  const handleAddTodo = (value: string) => {
    dispatch(addTodo(value));
  };

  const todosDone = todos?.filter((todo) => todo.done).length;
  const allDone = todos?.length !== 0 && todosDone === todos?.length;

  return (
    <div>
      <p className="link">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/VCUnwdboMYqr/trash-bin"
        >
          trash bin
        </a>{" "}
        icon by{" "}
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          icons8
        </a>
      </p>

      {allDone && <ConfettiExplosion force={0.7} />}
      <main className="todo-main">
        <TitleCard allDone={allDone} todosDone={todosDone} todos={todos} />

        <Form allDone={allDone} onAddTodo={handleAddTodo} />

        <List
          todos={todos}
          onRemoveTodo={handleRemoveTodo}
          onMarkAsDone={handleMarkAsDone}
        />
      </main>
    </div>
  );
}

export default App;
