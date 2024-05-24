"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { swagRegister } from "@/store/actions/authActions";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const SwagRegister = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const router = useRouter();

  const dispatch = useDispatch();
  const registered = useSelector((store: any) => store.auth.isRegistered);
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(swagRegister(values));
    },
  });

  const [values, setValues] = useState({});

  const handleSubmit = () => {
    setValues((prevValues) => ({
      ...prevValues,
      // we use the name to tell Formik which key of `values` to update
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      password: formik.values.password,
    }));
  };

  if (registered) {
    router.push("/swag/login");
  }

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
