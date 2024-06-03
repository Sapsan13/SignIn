export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const loginAction = (data: { email: string; password: string }) => ({
  type: LOGIN,
  payload: {
    request: {
      url: "/auth/login",
      method: "post",
      data: data,
    },
  },
});

export const logoutAction = () => ({
  type: LOGOUT,
  payload: {
    request: {
      url: "/logout",
      method: "get",
    },
  },
});

export const registerAction = (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => ({
  type: REGISTER,
  payload: {
    request: {
      url: "/register",
      method: "post",
      data: data,
    },
  },
});
