import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodoItem } from "../App";
import { RootState } from "../store";
import ItemTodo from "./ItemTodo";

const WrapperContextList = styled.div`
  background: rgb(77, 183, 184);
  padding: 12px 0 0 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  todoList: TodoItem[];
}

const ListItems: React.FC<Props> = ({ todoList }) => {
  const todoListArray = useSelector((state: RootState) => state.todo.todoList);
  return (
    <WrapperContextList>
      {todoListArray?.length > 0
        ? todoListArray.map((item: TodoItem) => (
            <ItemTodo key={item.id} todo={item} />
          ))
        : ""}
    </WrapperContextList>
  );
};

export default ListItems;
