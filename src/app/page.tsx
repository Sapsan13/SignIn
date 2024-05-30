"use client";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <SkeletonHome>
      <div>
        <div>HOMEPAGE</div>
        <div>
          <Link href={"auth/login/loginPage"}>Auth</Link>
        </div>
        <Link href={"overview"}>Overview</Link>
        <div>
          <Link href={"swag"}>Swag</Link>
        </div>
      </div>
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
