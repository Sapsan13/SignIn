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
  SWAG_TOURS_SUCCESS,
  SWAG_TOURS_FAIL,
  SWAG_STATISTICS_SUCCESS,
  SWAG_STATISTICS_FAIL,
  SWAG_TOTALINCOME_SUCCESS,
  SWAG_TOTALINCOME_FAIL,
} from "../actions/authActions";

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
      alert(`Hello user ${newUser.firstname}`);
      return { ...state, user: newUser, authenticated: true };
    }
    case LOGIN_FAIL: {
      return alert("LOGIN_FAIL");
    }
    case LOGOUT: {
      return { ...state, user: null, authenticated: false };
    }
    case SWAG_REGISTER_SUCCESS: {
      alert("Successfully Registered!");
      return { ...state, isRegistered: true };
    }
    case SWAG_REGISTER_FAIL: {
      alert(action.error.response.data.error);
      return state;
    }
    case SWAG_LOGIN_SUCCESS: {
      // console.log(action.payload.data.token);
      alert("Welcome!");
      return { ...state, token: action.payload.data.token };
    }
    case SWAG_LOGIN_FAIL: {
      alert(action.error.response.data.error);
      return state;
    }
    case SWAG_TOURS_SUCCESS: {
      console.log("SWAG_TOURS_SUCCESS");
      return state;
    }
    case SWAG_TOURS_FAIL: {
      alert(action.error.response.data.error);
      return state;
    }
    case SWAG_STATISTICS_SUCCESS: {
      alert("SWAG_STATISTICS_SUCCESS!");
      return state;
    }
    case SWAG_STATISTICS_FAIL: {
      alert(action.error.response.data.error);
      return state;
    }
    case SWAG_TOTALINCOME_SUCCESS: {
      alert("SWAG_TOTALINCOME_SUCCESS!");
      return state;
    }
    case SWAG_TOTALINCOME_FAIL: {
      alert(action.error.response.data.error);
      return state;
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
