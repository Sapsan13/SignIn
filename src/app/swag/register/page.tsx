"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { usePostApiAuthRegister } from "@/QueryStore";
import { PostApiAuthRegisterBody } from "@/model";
import { swagTokenSet } from "@/store/actions/swaggerActions";
const formArr: {
  htmlFor: string;
  id: string;
  name: keyof PostApiAuthRegisterBody;
  type: string;
}[] = [
  { htmlFor: "firstName", id: "firstName", name: "firstName", type: "text" },
  { htmlFor: "lastName", id: "lastName", name: "lastName", type: "text" },
  { htmlFor: "email", id: "email", name: "email", type: "email" },
  { htmlFor: "password", id: "password", name: "password", type: "password" },
];

const SwagRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // REFACOR получать токен через функцию getter (store: any) => store.auth.token => getAuthToken
  const token = useSelector((store: any) => store.auth.token);
  // REFACTOR mutation
  const { data, error, mutate, isSuccess } = usePostApiAuthRegister({
    mutation: {
      onSuccess() {
        console.log("Successfully registered!");
        router.push("/swag/login");
      },
      onError() {
        alert(error);
      },
    },
  });

  const registered = useSelector((store: any) => store.auth.isRegistered);

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

  useEffect(() => {
    if (!registered) return;
    router.push("/swag/register");
  }, [router, registered]);

  // REFACTOR выводить форму через map

  return (
    <form onSubmit={formik.handleSubmit}>
      <SkeletonSwagWrap>
        {formArr.map((item) => (
          <div key={item.id}>
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
