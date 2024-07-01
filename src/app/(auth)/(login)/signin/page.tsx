"use client";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../../../components/button";
import PasswordInput from "@/components/passwordInput";
import Inputfield from "@/components/inputField";
import { useFormik } from "formik";
import { schema } from "./signupYup";

export default function CreateAccount() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <RightSidebar>
      <RightBlock>
        <TopGap>
          <Header>Get started absolutely free</Header>
          <Row>
            <HaveAnAccount>Already have an account?</HaveAnAccount>
            <Link href={"/login"}>
              <Login>Login</Login>
            </Link>
          </Row>
        </TopGap>
        <DivForm>
          <DivCol>
            <Form method="post" onSubmit={formik.handleSubmit}>
              <DivRow>
                <DivColForm>
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
                </DivColForm>
                <DivColForm>
                  <Inputfield
                    required
                    placeholder="Last name"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.errors.firstName ? (
                    <span>{formik.errors.lastName}</span>
                  ) : null}
                </DivColForm>
              </DivRow>
              <DivColForm>
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
              </DivColForm>
              <PasswordInput
                placeholder="Enter your password here"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
              <Button type="submit">Create Account</Button>
            </Form>
          </DivCol>
          <BottomText>
            By signing up, I agree to <a href="termsOfUse">Terms of Use </a> and{" "}
            <a href="privacyPolicy">Privacy Policy</a>.
          </BottomText>
        </DivForm>
      </RightBlock>
    </RightSidebar>
  );
}

const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  width: 100%;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 352px;
  box-sizing: border-box;
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

const Login = styled.button`
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

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
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

const Row = styled.div`
  display: flex;
`;

const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  gap: 16px;
`;
