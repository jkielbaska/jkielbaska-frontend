import { Todo } from "../types/todo";

export const List = ({
  items,
  render,
  itemClick,
}: {
  items: Todo[];
  render: (item: Todo) => React.ReactNode;
  itemClick: (item: Todo) => void;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => itemClick(item)}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};
