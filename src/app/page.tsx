"use client";
import styled from "styled-components";
import SwagRegister from "./swag/register/page";

export default function Home() {
  return (
    <SkeletonHome>
      <SwagRegister />
    </SkeletonHome>
  );
}

const SkeletonHome = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
