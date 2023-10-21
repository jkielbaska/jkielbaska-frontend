export interface Todo {
  id: string;
  done: boolean;
  text: string;
}

export type ActionType =
  | { type: "ADD"; text: string }
  | { type: "DONE"; id: string }
  | { type: "REMOVE"; id: string };
