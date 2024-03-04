"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import RootLayout from "./layout";
import SignIn from "./loginPage";
import CreateAccount from "./signUp";
import { getCsrfToken } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const Login = ({ csrfToken }) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // You'll update this function later...

  return (
    <RootLayout>
      <SignIn {...csrfToken} />
    </RootLayout>
  );
};
export default Login;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken: csrfToken || null },
  };
}
