"use client";

import { useSelector } from "react-redux";

// import { useSelector } from "react-redux";

export const SWAG_TOKEN_SET = "SWAG_TOKEN_SET";
export const SWAG_TOKEN_SUCCESS = "SWAG_TOKEN_SUCCESS";
export const SWAG_TOKEN_FAIL = "SWAG_TOKEN_FAIL";

export const swagTokenSet = (token?: string) => ({
  type: SWAG_TOKEN_SET,
  payload: {
    token,
  },
});
