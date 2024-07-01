import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { store } from "./store/store";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://educator-api.onrender.com",
});

AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();

    if (auth && auth.token && config.headers) {
      config.headers.Authorization = auth.token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useCustomInstance = () => {
  return (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
      ...config,

      baseURL: process.env.REACT_APP_API_URL,
      cancelToken: source.token,
    }).then(({ data }) => {
      return data;
    });

    //eslint-disable-next-line
    // @ts-ignore
    promise.cancel = () => {
      source.cancel("Query was cancelled by React Query");
    };

    return promise;
  };
};

export default useCustomInstance;

export type ErrorType<Error> = AxiosError<Error>;
