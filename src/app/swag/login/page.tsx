"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { usePostApiAuthLogin } from "@/QueryStore";
import { swagTokenSet } from "@/store/actions/swaggerActions";

const SwaggLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { error, mutate } = usePostApiAuthLogin({
    mutation: {
      onSuccess(data) {
        if (!data) return;
        router.push("/swag/toursStatisticTotal");
        dispatch(swagTokenSet(data.token));
      },
      onError() {
        alert(error);
      },
    },
  });

  // REFACTOR резделять данные
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      mutate({
        data,
      });
    },
  });

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

export default SwaggLogin;

const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
