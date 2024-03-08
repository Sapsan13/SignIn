"use client";
import { ComponentProps, ReactComponentElement } from "react";
import styled from "styled-components";

type UserCardProps = ComponentProps<"button"> & {
  variant?: string;
  color?: string;
  size?: "s" | "m" | "l";
  icon?: React.ReactElement;
  children?: React.ReactNode;
};

const SkeletonBtn = styled.button`
  border: none;
  width: 352px;
  height: 48px;
`;

const UserCard = () => {
  return <div>USERCARD</div>;
};

export default UserCard;
