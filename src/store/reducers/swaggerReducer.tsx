import { AnyAction } from "redux";
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

export const swaggerReducer = (state = initialState, action: AnyAction) => {
  // The reducer normally looks at the action type field to decide what happens

  switch (action.type) {
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
