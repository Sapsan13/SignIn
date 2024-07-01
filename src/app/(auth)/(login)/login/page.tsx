"use client";
import Link from "next/link";
import styled from "styled-components";
import Button from "@/components/button";
import Inputfield from "@/components/inputField";
import PasswordInput from "@/components/passwordInput";
import { useFormik } from "formik";
import { schema } from "./loginYup";
import { PostApiAuthLoginBody } from "@/model";
import { usePostApiAuthLogin } from "@/QueryStore";

export default function SignIn() {
  const { mutate } = usePostApiAuthLogin();

  const formik = useFormik<PostApiAuthLoginBody>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      mutate({
        data: values,
      });
    },
  });
  return (
    <RightSidebar>
      <RightBlock>
        <TopGap>
          <Header>Welcome back!</Header>
          <DivRow>
            <HaveAnAccount>{"Don't have an account?"}</HaveAnAccount>
            <Link href={"/signin"}>
              <SignInText>Sign in here!</SignInText>
            </Link>
          </DivRow>
        </TopGap>
        <Form
          method="post"
          action="/api/auth/callback/credentials"
          onSubmit={formik.handleSubmit}
        >
          <DivColForm>
            <Inputfield
              type="email"
              required
              name="email"
              placeholder="Email adress"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <span>{formik.errors.email}</span> : null}
          </DivColForm>
          <DivColForm>
            <PasswordInput
              name="password"
              placeholder="Enter your password here"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            {formik.errors.password ? (
              <span>{formik.errors.password}</span>
            ) : null}
          </DivColForm>
          <Button type="submit">Log In</Button>

          <BottomText>
            By signing up, I agree to <a href="termsOfUse">Terms of Use </a> and{" "}
            <a href="privacyPolicy">Privacy Policy</a>.
          </BottomText>
        </Form>
      </RightBlock>
    </RightSidebar>
  );
}

const RightSidebar = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  min-width: 480px;
  width: 100%;
  height: 100%;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 352px;
`;

const Header = styled.div`
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
`;

const HaveAnAccount = styled.div`
  padding: 0 2px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const SignInText = styled.button`
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

const TopGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const BottomText = styled.div`
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

const DivColForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DivRow = styled.div`
  display: flex;
`;
