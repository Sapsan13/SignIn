"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { swagLogin } from "@/store/actions/authActions";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const SwagLogin = () => {
  const router = useRouter();
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(swagLogin(values));
    },
  });

  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return;

    router.push("/swag/toursStatisticTotal");
  }, [router, token]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <SkeletonSwagWrap>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Login</button>
      </SkeletonSwagWrap>
    </form>
  );
};
export default SwagLogin;

const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
