export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";

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
      url: "/auth/logout",
      method: "post",
    },
  },
});
