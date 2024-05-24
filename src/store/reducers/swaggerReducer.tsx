import { AnyAction } from "redux";
import {
  SWAG_TOURS_SUCCESS,
  SWAG_TOURS_FAIL,
  SWAG_STATISTICS_SUCCESS,
  SWAG_STATISTICS_FAIL,
  SWAG_TOTALINCOME_SUCCESS,
  SWAG_TOTALINCOME_FAIL,
} from "../actions/swaggerActions";

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
  statistics: [];
  totIncome: [];
}

export const swaggerReducer = (
  state = initialState,
  action: AnyAction,
  values: Values
) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case SWAG_TOURS_SUCCESS: {
      console.log("TOURS");
      console.log(action.payload.data);
      return { ...state, tours: action.payload.data };
    }
    case SWAG_TOURS_FAIL: {
      console.log(action.error.response.data.error);
      return state;
    }
    case SWAG_STATISTICS_SUCCESS: {
      console.log("STATISTICS");
      console.log(action.payload.data);
      console.log("SWAG_STATISTICS_SUCCESS!");
      return { ...state, statistics: action.payload.data };
    }
    case SWAG_STATISTICS_FAIL: {
      console.log(action.error.response.data.error);
      return state;
    }
    case SWAG_TOTALINCOME_SUCCESS: {
      console.log("TOTALINCOME");
      console.log(action.payload.data);
      console.log("SWAG_TOTALINCOME_SUCCESS!");
      return { ...state, totIncome: action.payload.data };
    }
    case SWAG_TOTALINCOME_FAIL: {
      console.log(action.error.response.data.error);
      return state;
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
