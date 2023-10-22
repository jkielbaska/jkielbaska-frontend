import checkSolid from "../assets/check-solid.svg";
import { Todo } from "../types/todo";
import { Blob } from "./Blob";

interface CardProps {
  allDone: boolean;
  todosDone: number;
  todos: Todo[];
}

export const TitleCard = ({ allDone, todosDone, todos }: CardProps) => {
  return (
    <div className="title-card">
      <div>
        <p className="title">Todo</p>
        <p className="subtitle">
          {allDone
            ? "everything done!"
            : todos.length === 0
            ? "nothing to do :)"
            : "you doing great!"}
        </p>
      </div>
      <div className="done-counter">
        <Blob
          allDone={allDone}
          elements={
            allDone !== true ? (
              <p className="blob-text">{todosDone + "/" + todos.length}</p>
            ) : (
              <img className="icon" src={checkSolid} alt="checkSolid icon" />
            )
          }
        />
      </div>
    </div>
  );
};
