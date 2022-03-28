import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { TodoItem } from "./../App";

interface InitState {
  todoList: TodoItem[];
}

const initialState: InitState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    handleAddTodoState: (state, value) => {
      if (value.payload) {
        state.todoList = [
          ...state.todoList,
          { id: nanoid(), todo: value.payload, checked: false },
        ];
      }
    },
    handleSuccessTodo: (state, value) => {
      if (value?.payload) {
        state.todoList = [
          ...state.todoList.map((item) => {
            if (item.id === value.payload) {
              return {
                ...item,
                checked: true,
              };
            } else return item;
          }),
        ];
      }
    },

    handleCancelTodo: (state, value) => {
      if (value?.payload) {
        state.todoList = [
          ...state.todoList.map((item) => {
            if (item.id === value.payload) {
              return {
                ...item,
                checked: false,
              };
            } else return item;
          }),
        ];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleAddTodoState, handleSuccessTodo, handleCancelTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
