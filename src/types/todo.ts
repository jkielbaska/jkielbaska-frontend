export interface Todo {
  id: number;
  done: boolean;
  text: string;
}

export type ActionType =
  | { type: "ADD"; text: string }
  | { type: "DONE"; id: number }
  | { type: "REMOVE"; id: number };
