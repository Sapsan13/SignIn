"use client";
import * as yup from "yup";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../../../components/button";
import { object, string, number, date, InferType } from "yup";
// import Inputfield from "../../../components/inputField";
import PasswordInput from "@/components/passwordInput";
import Inputfield from "@/components/inputField";
import { getCsrfToken } from "next-auth/react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import RootLayout from "../layout";
import { useFormik } from "formik";

export default function CreateAccount({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // You'll update this function later...
  // const handleFieldChange = (key: keyof ReturnType<login>) => () => {
  //   setLogin({ ...login, [key]: e.target.value });
  // };

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
              <SkeletonForm method="post" onSubmit={formik.handleSubmit}>
                <SkeletonDivRow>
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken ?? ""}
                  />
                  <SkeletonDivColForm>
                    <Inputfield
                      required
                      placeholder="First name"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? (
                      <span>{formik.errors.firstName}</span>
                    ) : null}
                  </SkeletonDivColForm>
                  <SkeletonDivColForm>
                    <Inputfield
                      placeholder="Last name"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.errors.firstName ? (
                      <span>{formik.errors.lastName}</span>
                    ) : null}
                  </SkeletonDivColForm>
                </SkeletonDivRow>
                <SkeletonDivColForm>
                  <Inputfield
                    type="email"
                    required
                    placeholder="Email adress"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.firstName ? (
                    <span>{formik.errors.password}</span>
                  ) : null}
                </SkeletonDivColForm>
                <PasswordInput
                  placeholder="Enter your password here"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <Button type="submit">Create Account</Button>
              </SkeletonForm>
            </SkeletonDivCol>
            <SkeletonBottomText>
              By signing up, I agree to <a href="termsOfUse">Terms of Use </a>{" "}
              and <a href="privacyPolicy">Privacy Policy</a>.
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

const SkeletonRightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  width: 100%;
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

const SkeletonDivColForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: red;
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
