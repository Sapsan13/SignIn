"use client";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../../../components/button";
// import Inputfield from "../../../components/inputField";
import PasswordInput from "@/components/passwordInput";
import { useState } from "react";
import Inputfield from "@/components/inputField";
import { getCsrfToken } from "next-auth/react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import RootLayout from "../layout";

const SkeletonRightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
`;

const SkeletonRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 352px;
  box-sizing: border-box;
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

const SkeletonLogin = styled.button`
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
  gap: 16px;
`;

export default function CreateAccount({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [login, setLogin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // You'll update this function later...
  console.log(login);
  return (
    <RootLayout>
      <SkeletonRightSidebar>
        <SkeletonRightBlock>
          <SkeletonTopGap>
            <SkeletonHeader>Get started absolutely free</SkeletonHeader>
            <SkeletonRow>
              <SkeletonHaveAnAccount>
                Already have an account?
              </SkeletonHaveAnAccount>
              <Link href={"/auth/login/loginPage"}>
                <SkeletonLogin>Login</SkeletonLogin>
              </Link>
            </SkeletonRow>
          </SkeletonTopGap>
          <SkeletonDivForm>
            <SkeletonDivCol>
              <SkeletonForm method="post">
                <SkeletonDivRow>
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />
                  <Inputfield
                    required
                    placeholder="First name"
                    value={login.firstName}
                    onChange={(e) =>
                      setLogin((state) => ({
                        ...state,
                        firstName: e.target.value,
                      }))
                    }
                  />
                  <Inputfield
                    placeholder="Last name"
                    value={login.lastName}
                    onChange={(e) =>
                      setLogin((state) => ({
                        ...state,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </SkeletonDivRow>
                <Inputfield
                  type="email"
                  required
                  placeholder="Email adress"
                  value={login.email}
                  onChange={(e) =>
                    setLogin((state) => ({ ...state, email: e.target.value }))
                  }
                />
                <PasswordInput
                  value={login.password}
                  placeholder="Enter your password here"
                  onChange={(e) =>
                    setLogin((state) => ({
                      ...state,
                      password: e.target.value,
                    }))
                  }
                />
              </SkeletonForm>
              <Button type="submit">Create Account</Button>
            </SkeletonDivCol>
            <SkeletonBottomText>
              By signing up, I agree to <a>Terms of Use </a> and{" "}
              <a>Privacy Policy</a>.
            </SkeletonBottomText>
          </SkeletonDivForm>
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
