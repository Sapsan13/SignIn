import { applyMiddleware, combineReducers, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import axios from "axios";
import { todoReducer } from "./reducers/todoReducer";
import { authReducer } from "./reducers/authReducer";

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: "http://localhost:8080/api",
  responseType: "json",
});

// Use the initialState as a default value
export const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

// axiosMiddleware catches any payload with request:{} sents all by the request fields;
export const store = (createStore as any)(
  rootReducer, //custom reducers
  applyMiddleware(
    axiosMiddleware(client) //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
  )
  //EACH ENTITY NEW ACTION FILE redux-axios-middleware, (strapi CMS) TOTODODODO
);
