"use client";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
// import RootLayout from "../layout";
import Link from "next/link";
import Button from "@/components/button";
import Inputfield from "@/components/inputField";
import PasswordInput from "@/components/passwordInput";
import RootLayout from "../layout";
import { useFormik } from "formik";
import { schema } from "./loginYup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/store/actions/authActions";

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((store: any) => store.auth.authenticated);
  // console.log("AUTH", auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(loginAction(values));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SkeletonRightSidebar>
      <SkeletonRightBlock>
        <SkeletonTopGap>
          <SkeletonHeader>Welcome back!</SkeletonHeader>
          <SkeletonDivRow>
            <SkeletonHaveAnAccount>
              {"Don't have an account?"}
            </SkeletonHaveAnAccount>
            <Link href={"/auth/login/register"}>
              <SkeletonSignIn>Sign in here!</SkeletonSignIn>
            </Link>
          </SkeletonDivRow>
        </SkeletonTopGap>
        <SkeletonForm
          method="post"
          action="/api/auth/callback/credentials"
          onSubmit={formik.handleSubmit}
        >
          <SkeletonDivColForm>
            <Inputfield
              type="email"
              required
              name="email"
              placeholder="Email adress"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <span>{formik.errors.email}</span> : null}
          </SkeletonDivColForm>
          <SkeletonDivColForm>
            <PasswordInput
              name="password"
              placeholder="Enter your password here"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <span>{formik.errors.password}</span>
            ) : null}
          </SkeletonDivColForm>
          <Button type="submit">Log In</Button>

          <SkeletonBottomText>
            By signing up, I agree to <a href="termsOfUse">Terms of Use </a> and{" "}
            <a href="privacyPolicy">Privacy Policy</a>.
          </SkeletonBottomText>
        </SkeletonForm>
      </SkeletonRightBlock>
    </SkeletonRightSidebar>
  );
}

const SkeletonRightSidebar = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  min-width: 480px;
  width: 100%;
  height: 100%;
`;

const SkeletonRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 352px;
`;

const SkeletonHeader = styled.div`
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonHaveAnAccount = styled.div`
  //styleName: Desktop/Body2;
  padding: 0 2px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonSignIn = styled.button`
  //styleName: Desktop/Subtitle2;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  color: #00a76f;
`;

const SkeletonTopGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const SkeletonDivForm = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 352px;
  gap: 20px;
  align-items: center;
`;

const SkeletonBottomText = styled.div`
  //styleName: Desktop/Caption;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #637381;
  a {
    color: #212b36;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SkeletonRow = styled.div`
  display: flex;
`;

const SkeletonDivColForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: red;
`;

const SkeletonDivCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonDivRow = styled.div`
  display: flex;
`;
