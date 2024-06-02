import { AnyAction } from "redux";
import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SWAG_LOGIN,
  SWAG_LOGIN_SUCCESS,
  SWAG_REGISTER,
  SWAG_REGISTER_SUCCESS,
  SWAG_REGISTER_FAIL,
  SWAG_LOGIN_FAIL,
} from "../actions/authActions";
import { SWAG_TOKEN_SET } from "../actions/swaggerActions";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}
interface IInitialState {
  authenticated: boolean;
  user: User | null;
  isRegistered: boolean;
}

const initialState: IInitialState = {
  authenticated: false,
  isRegistered: false,
  user: null,
};

export interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  token: string;
  tours: [];
}

export const authReducer = (
  state = initialState,
  action: AnyAction,
  values: Values
) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newUser = action.payload.data.user;
      console.log(`Hello user ${newUser.firstname}`);
      return { ...state, user: newUser, authenticated: true };
    }
    case LOGIN_FAIL: {
      console.log("LOGIN_FAIL");
      return state;
    }
    case LOGOUT: {
      return { ...state, user: null, authenticated: false };
    }
    case SWAG_REGISTER_SUCCESS: {
      console.log("Successfully Registered!");
      return { ...state, isRegistered: true };
    }
    // case SWAG_REGISTER_FAIL: {
    //   console.log(action.error.response.data.error);
    //   return state;
    // }
    case SWAG_TOKEN_SET: {
      return { ...state, token: action.payload.token };
    }
    case SWAG_LOGIN_SUCCESS: {
      console.log("LOGIN");
      console.log(action.payload.data);
      console.log("Welcome!");
      return { ...state, token: action.payload.data.token };
    }
    // case SWAG_LOGIN_FAIL: {
    //   console.log(action.error.response.data.error);
    //   return state;
    // }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

export const getAuthReducer = (store: any) => store.auth;