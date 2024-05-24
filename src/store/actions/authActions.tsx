import { useSelector } from "react-redux";

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
export const SWAG_TOURS = "SWAG_TOURS";
export const SWAG_TOURS_SUCCESS = "SWAG_TOURS_SUCCESS";
export const SWAG_TOURS_FAIL = "SWAG_TOURS_FAIL";
export const SWAG_STATISTICS = "SWAG_STATISTICS";
export const SWAG_STATISTICS_SUCCESS = "SWAG_STATISTICS_SUCCESS";
export const SWAG_STATISTICS_FAIL = "SWAG_STATISTICS_FAIL";
export const SWAG_TOTALINCOME = "SWAG_TOTALINCOME";
export const SWAG_TOTALINCOME_SUCCESS = "SWAG_TOTALINCOME_SUCCESS";
export const SWAG_TOTALINCOME_FAIL = "SWAG_TOTALINCOME_FAIL";

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

export const swagTours = (token: string) => ({
  type: SWAG_TOURS,
  payload: {
    request: {
      url: "https://educator-api.onrender.com/api/chart/tours",
      method: "get",
      headers: { Authorization: token },
    },
  },
});

export const swagStatistics = (token: string) => ({
  type: SWAG_STATISTICS,
  payload: {
    request: {
      url: "https://educator-api.onrender.com/api-docs/#/default/get_api_chart_statistics",
      method: "get",
      headers: { Authorization: token },
    },
  },
});

export const swagTotalIncome = (token: string) => ({
  type: SWAG_TOTALINCOME,
  payload: {
    request: {
      url: "https://educator-api.onrender.com/api-docs/#/default/get_api_chart_totalIncome",
      headers: { Authorization: token },
      method: "get",
    },
  },
});
