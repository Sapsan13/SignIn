import { Todo } from "../reducers/todoReducer";

export const DELETE = "DELETE";
export const ADD = "ADD";
export const UPDATE = "UPDATE";

export const addTodo = (todo: Todo) => ({
  type: ADD,
  payload: { todo },
});

export const deleteTodo = (deletationId: number) => ({
  type: DELETE,
  payload: {
    id: deletationId,
  },
});

export const updateTodo = () => ({
  type: UPDATE,
  payload: {
    todo: { id: 2, text: "123123", completed: true, color: "red" },
  },
});
