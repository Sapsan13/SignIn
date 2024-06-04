"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { usePostApiAuthRegister } from "@/QueryStore";
import { PostApiAuthRegisterBody } from "@/model";
import { formArr } from "../FormArray";
import { useGetAuthToken } from "../UseAuth";

// const getAuthToken = (store) => store.auth.token;

const SwagRegister = () => {
  const router = useRouter();
  // REFACOR получать токен через функцию getter (store: any) => store.auth.token => getAuthToken
  const token = useGetAuthToken();

  const { data, error, mutate, isSuccess } = usePostApiAuthRegister({
    mutation: {
      onSuccess() {
        alert("Successfully registered!");
        router.push("/swag/login");
      },
      onError() {
        alert(error);
      },
    },
  });

  const formik = useFormik<PostApiAuthRegisterBody>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
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
        {formArr.map((item) => (
          <div key={item.name}>
            <label htmlFor={item.htmlFor}>{item.name}</label>
            <input
              id={item.id}
              name={item.name}
              type={item.type}
              onChange={formik.handleChange}
              value={formik.values[item.name]}
            />
          </div>
        ))}
        <button type="submit">Register</button>
      </SkeletonSwagWrap>
    </form>
  );
};
export default SwagRegister;

const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
