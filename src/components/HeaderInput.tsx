import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleAddTodoState } from "../features/todoSlice";

const Heading = styled.h1`
  color: #333;
  font-weight: 500;
  background: rgb(36, 178, 147);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 12px 0;
`;

const WrapperContentHeader = styled.form`
  background: rgb(36, 178, 147);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  min-height: 15vh;
`;

const Inputs = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  background: rgb(78, 191, 166);
  width: 250px;
`;

const WrapperIcon = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  left: -20px;
`;

interface Props {
  todo: string;
  handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitFormTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const HeaderInput: React.FC<Props> = ({
  todo,
  handleChangeTodo,
  setTodo,
  handleSubmitFormTodo,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Heading>Todo List App</Heading>
      <WrapperContentHeader onSubmit={(e) => handleSubmitFormTodo(e)}>
        <Inputs
          type="text"
          placeholder="please enter text todo..."
          value={todo}
          onChange={(e) => {
            handleChangeTodo(e);
          }}
        />
        <WrapperIcon
          onClick={() => {
            dispatch(handleAddTodoState(todo));
            setTodo("");
          }}
        >
          <AddIcon />
        </WrapperIcon>
      </WrapperContentHeader>
    </>
  );
};

export default HeaderInput;
