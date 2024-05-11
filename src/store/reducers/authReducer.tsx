import { AnyAction } from "redux";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authActions";
import { LOGOUT } from "../actions/authActions";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

interface IInitialState {
  authenticated: boolean;
  user: User | null;
}

const initialState: IInitialState = {
  authenticated: false,
  user: null,
};

export const authReducer = (state = initialState, action: AnyAction) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newUser = action.payload.data.user;
      alert(`Hello user ${newUser.firstname}`);

      return { ...state, user: newUser, authenticated: true };
    }
    case LOGIN_FAIL: {
      return alert("LOGIN_FAIL");
    }
    case LOGOUT: {
      return { ...state, user: null, authenticated: false };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
