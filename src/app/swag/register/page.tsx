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

  const registered = useSelector((store: any) => store.auth.isRegistered);
  // REFACTOR тоже самое что и на логине
  // useEffect(() => {
  //   if (!isSuccess) return;
  //   // alert("Successfully registered!");
  // }, [isSuccess]);

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
  const formArr = [
    { htmlFor: "firstName", id: "firstName", name: "firstNmame", type: "text" },
    { htmlFor: "lastName", id: "lasttName", name: "lasttNmame", type: "text" },
    { htmlFor: "email", id: "email", name: "email", type: "email" },
    { htmlFor: "password", id: "password", name: "password", type: "password" },
  ];
  return (
    // <form onSubmit={formik.handleSubmit}>
    //   return formArr.map((item) => (
    // <div key={item.name}>
    //   <p>{item.name}</p> <p>{item.value}</p>
    // </div>

    <SkeletonSwagWrap>
      {formArr.map((item) => (
        <div key={item.name}>
          <label htmlFor={item.htmlFor}>First Name</label>
          <input
            id={item.id}
            name={item.name}
            type={item.type}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
      ))}
      <button type="submit" onSubmit={handleSubmit}>
        Register
      </button>
    </SkeletonSwagWrap>
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
