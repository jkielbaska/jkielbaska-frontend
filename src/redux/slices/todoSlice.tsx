import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Todo } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [
    {
      id: uuidv4(),
      text: "chill",
      done: false,
    },
    {
      id: uuidv4(),
      text: "Add logic",
      done: true,
    },
    {
      id: uuidv4(),
      text: "Add design",
      done: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        {
          id: uuidv4(),
          text: action.payload,
          done: false,
        },
        ...state.todos,
      ];
    },

    markAsDone: (state, action: PayloadAction<string>) => {
      const { todos } = state;
      const { payload: id } = action;

      const todoIndex = todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        const [doneTodo] = todos.splice(todoIndex, 1);
        const updatedTodo = { ...doneTodo, done: !doneTodo.done };
        if (!updatedTodo.done) {
          state.todos = [updatedTodo, ...todos];
        } else {
          state.todos = [...todos, updatedTodo];
        }
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, markAsDone, removeTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
