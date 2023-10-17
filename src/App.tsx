import { useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectTodos, addTodo, removeToddo } from "./redux/slices/todoSlice";
import { List } from "./components/List";
import "./App.scss";

function App() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <div className="App">
      <input ref={newTodoRef} />
      <button onClick={onAddTodo}>Add</button>
      <List
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeToddo(todo.id))}>
              Remove
            </button>
          </>
        )}
      />
    </div>
  );
}

export default App;
