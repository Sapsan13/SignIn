"use client";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../../components/button";
import Inputfield from "../../../components/inputField";
import PasswordInput from "@/pages/components/passwordInput";
import { useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import RootLayout from "../layout";

const SkeletonRightSidebar = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  min-width: 480px;
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

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formSubmitHandler = () => {
    () => console.log("SUBMITTED");
  };
  // You'll update this function later...
  // console.log(login);
  return (
    <RootLayout>
      <SkeletonRightSidebar>
        <SkeletonRightBlock>
          <SkeletonTopGap>
            <SkeletonHeader>Welcome back!</SkeletonHeader>
            <SkeletonDivRow>
              <SkeletonHaveAnAccount>
                Don't have an account?
              </SkeletonHaveAnAccount>
              <Link href={"/auth/login/signUp"}>
                <SkeletonSignIn>Sign in here!</SkeletonSignIn>
              </Link>
            </SkeletonDivRow>
          </SkeletonTopGap>
          <SkeletonForm method="post" action="/api/auth/callback/credentials">
            <input
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken ?? ""}
            />
            <Inputfield
              type="email"
              required
              name="email"
              placeholder="Email adress"
              defaultValue={login.email}
              // onChange={(e) =>
              //   setLogin((state) => ({ ...state, email: e.target.value }))
              // }
            />
            <PasswordInput
              defaultValue={login.password}
              name="password"
              placeholder="Enter your password here"
              // onChange={(e) =>
              //   setLogin((state) => ({
              //     ...state,
              //     password: e.target.value,
              //   }))
              // }
            />
            <Button type="submit">Log In</Button>

            <SkeletonBottomText>
              By signing up, I agree to <a>Terms of Use </a> and{" "}
              <a>Privacy Policy</a>.
            </SkeletonBottomText>
          </SkeletonForm>
        </SkeletonRightBlock>
      </SkeletonRightSidebar>
    </RootLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);

  return {
    props: { csrfToken: csrfToken || null },
  };
}
