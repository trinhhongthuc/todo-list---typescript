import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TodoItem } from "../App";
import { handleCancelTodo, handleSuccessTodo } from "../features/todoSlice";
const WrapperItem = styled.div`
  padding: 8px 12px;
  background: #fff;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  cursor: pointer;
  margin-bottom: 12px;

  .icon-check {
    color: rgb(36, 178, 147);
  }
`;
interface Props {
  todo: TodoItem;
}

const ItemTodo: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      {todo.checked ? (
        <s>
          <WrapperItem onClick={() => dispatch(handleCancelTodo(todo.id))}>
            {todo.todo} <CheckCircleIcon className="icon-check" />
          </WrapperItem>
        </s>
      ) : (
        <WrapperItem onClick={() => dispatch(handleSuccessTodo(todo.id))}>
          {todo.todo} <CheckCircleIcon />
        </WrapperItem>
      )}
    </>
  );
};

export default ItemTodo;
