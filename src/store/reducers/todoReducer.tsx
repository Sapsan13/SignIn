import { AnyAction } from "redux";
import { ADD, DELETE, UPDATE } from "../actions/todoActions";

interface Filters {
  status: string;
  colors: [];
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
}

interface IInitialState {
  todos: Todo[];
  filters: Filters;
}

const initialState: IInitialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

export const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD: {
      const newTodo = action.payload.todo;

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case DELETE: {
      const id = action.payload.id;
      return { ...state, todos: state.todos.filter((todo) => todo.id === id) };
    }
    case UPDATE: {
      const updatedTodo = action.payload.todo;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
