import { createStore } from "redux";
import { ADD, DELETE, UPDATE } from "./actions";

export const store = createStore(rootReducer);

const CREATE_TODO = "CREATE_TODO";

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

// Use the initialState as a default value
export default function rootReducer(
  state = {
    todos: [],
  },
  action: any
) {
  // The reducer normally looks at the action type field to decide what happens
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
}
