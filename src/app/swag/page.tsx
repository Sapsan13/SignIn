"use client";
import styled from "styled-components";
import Link from "next/link";

const SwagInit = () => {
  return (
    <SkeletonSwagWrap>
      <Link href={"/swag/register"}>SwagRegister</Link>
      <Link href={"/swag/login"}>SwaggLogin</Link>
    </SkeletonSwagWrap>
  );
};
export default SwagInit;

const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
