export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SWAG_LOGIN = "SWAG_LOGIN";
export const SWAG_LOGIN_FAIL = "SWAG_LOGIN_FAIL";
export const SWAG_LOGIN_SUCCESS = "SWAG_LOGIN_SUCCESS";
export const SWAG_REGISTER = "SWAG_REGISTER";
export const SWAG_REGISTER_FAIL = "SWAG_REGISTER_FAIL";
export const SWAG_REGISTER_SUCCESS = "SWAG_REGISTER_SUCCESS";

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

export const swagLogin = (values: any) => {
  // console.log(`values => `, values);
  return {
    type: SWAG_LOGIN,
    payload: {
      request: {
        url: "https://educator-api.onrender.com/api/auth/login",
        method: "post",
        data: values,
      },
    },
  };
};

export const swagRegister = (values: any) => {
  return {
    type: SWAG_REGISTER,
    payload: {
      request: {
        url: "https://educator-api.onrender.com/api/auth/register",
        method: "post",
        data: values,
      },
    },
  };
};
