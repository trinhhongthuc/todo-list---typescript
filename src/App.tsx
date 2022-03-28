import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HeaderInput from "./components/HeaderInput";
import ListItems from "./components/ListItems";
import { handleAddTodoState } from "./features/todoSlice";
const WrapperContent = styled.div`
  margin: 0 auto;
  background: #ccc;
  width: 100%;
`;

export interface TodoItem {
  id: string;
  todo: string;
  checked: boolean;
}

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<TodoItem[]>([]);
  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmitFormTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleAddTodoState(todo));
  };

  return (
    <WrapperContent>
      <HeaderInput
        todo={todo}
        handleChangeTodo={handleChangeTodo}
        setTodo={setTodo}
        handleSubmitFormTodo={handleSubmitFormTodo}
      />
      <ListItems todoList={todoList} />
    </WrapperContent>
  );
}

export default App;
