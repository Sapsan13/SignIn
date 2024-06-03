import { AnyAction } from "redux";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authActions";
import { LOGOUT_SUCCESS } from "../actions/authActions";
import { LOGOUT_FAIL } from "../actions/authActions";
import { REGISTER_SUCCESS } from "../actions/authActions";
import { REGISTER_FAIL } from "../actions/authActions";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
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
    case REGISTER_SUCCESS: {
      const newUser = action.payload.data.user;
      alert(`Registered`);

      return { ...state, user: newUser };
    }
    case REGISTER_FAIL: {
      alert("REGISTER_FAIL");
    }
    case LOGIN_SUCCESS: {
      const loginUser = action.payload.data.user;
      alert(`Hello user ${loginUser}`);
      return { ...state, user: loginUser, authenticated: true };
    }
    case LOGIN_FAIL: {
      alert("LOGIN_FAIL");
      return state;
    }
    case LOGOUT_SUCCESS: {
      console.log("LOGOUT_Success");
      return { ...state, user: null, authenticated: false };
    }
    case LOGOUT_FAIL: {
      console.log("LOGOUT_FAIL");
      return state;
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
