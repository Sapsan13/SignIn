"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { usePostApiAuthRegister } from "@/QueryStore";
import { PostApiAuthRegisterBody } from "@/model";
import { swagTokenSet } from "@/store/actions/swaggerActions";

const SwagRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // REFACOR получать токен через функцию getter (store: any) => store.auth.token => getAuthToken
  const token = useSelector((store: any) => store.auth.token);

  const { data, error, mutate, isSuccess } = usePostApiAuthRegister();
  const registered = useSelector((store: any) => store.auth.isRegistered);
  // REFACTOR тоже самое что и на логине
  useEffect(() => {
    if (!isSuccess) return;
    // alert("Successfully registered!");
  }, [isSuccess]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/swag/login");
    }
  }, [router, registered, isSuccess]);

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

  const [values, setValues] = useState({});

  const handleSubmit = () => {
    dispatch(swagTokenSet(token));
    // REFACTOR убрать
    setValues((prevValues) => ({
      ...prevValues,
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      password: formik.values.password,
    }));
  };

  useEffect(() => {
    if (!registered) return;
    router.push("/swag/register");
  }, [router, registered]);

  // REFACTOR выводить форму через map
  return (
    <form onSubmit={formik.handleSubmit}>
      <SkeletonSwagWrap>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
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
        <button type="submit" onSubmit={handleSubmit}>
          Register
        </button>
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
