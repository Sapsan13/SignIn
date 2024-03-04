"use client";
import { ComponentProps } from "react";
import styled from "styled-components";

export type InputFieldProps = ComponentProps<"input"> & {
  variant?: string;
  sise?: "s" | "m" | "l";
};

const SkeletonInput = styled.input`
  height: 54px;
  border-radius: 8px;
  padding-left: 8px;
  width: 100%;
  color: "#919EAB";
  border: 1px solid #919eab;
  box-sizing: border-box;
`;

const Inputfield = ({
  variant = "Contained",
  sise = "m",
  ...other
}: InputFieldProps) => {
  return <SkeletonInput {...other} />;
};

export default Inputfield;
