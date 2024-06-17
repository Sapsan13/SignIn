"use client";
import { ComponentProps, ReactComponentElement } from "react";
import styled from "styled-components";

type ButtonProps = ComponentProps<"button"> & {
  variant?: string;
  color?: string;
  size?: "s" | "m" | "l";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children?: React.ReactNode;
};
//  comment
const SkeletonBtn = styled.button`
  border: none;
  width: 352px;
  height: 48px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(0 0 0 / 1);
  align-content: center;
  justify-items: center;
  color: #fff;
  font-family: Public Sans;
  background-color: #212b36;
  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
`;

const Button = ({
  variant = "Contained",
  color = "",
  size = "l",
  startIcon,
  endIcon,
  children,
  ...other
}: ButtonProps) => {
  return <SkeletonBtn {...other}>{children}</SkeletonBtn>;
};

export default Button;
