"use client";
// import { useSelector } from "react-redux";
export const SWAG_TOURS = "SWAG_TOURS";
export const SWAG_TOURS_SUCCESS = "SWAG_TOURS_SUCCESS";
export const SWAG_TOURS_FAIL = "SWAG_TOURS_FAIL";
export const SWAG_STATISTICS = "SWAG_STATISTICS";
export const SWAG_STATISTICS_SUCCESS = "SWAG_STATISTICS_SUCCESS";
export const SWAG_STATISTICS_FAIL = "SWAG_STATISTICS_FAIL";
export const SWAG_TOTALINCOME = "SWAG_TOTALINCOME";
export const SWAG_TOTALINCOME_SUCCESS = "SWAG_TOTALINCOME_SUCCESS";
export const SWAG_TOTALINCOME_FAIL = "SWAG_TOTALINCOME_FAIL";

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
      url: "https://educator-api.onrender.com/api/chart/statistic",
      method: "get",
      headers: { Authorization: token },
    },
  },
});

export const swagTotalIncome = (token: string) => ({
  type: SWAG_TOTALINCOME,
  payload: {
    request: {
      url: "https://educator-api.onrender.com/api/chart/totalIncome",
      headers: { Authorization: token },
      method: "get",
    },
  },
});
