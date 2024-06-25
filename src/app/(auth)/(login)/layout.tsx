"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginPicBlock from "@/components/loginPicBlock";
import styled from "styled-components";
import LeftNavbar from "@/components/leftNavbarItems/LeftNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SkeletonFlexRow>
      <SkeletonLoginPicBlock>
        <LoginPicBlock />
      </SkeletonLoginPicBlock>
      <SkeletonCildWrapper>{children}</SkeletonCildWrapper>
    </SkeletonFlexRow>
  );
}

const SkeletonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1024px;
  min-height: 720px;
  width: 100%;

  align-items: center;
`;

const SkeletonLoginPicBlock = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
`;

const SkeletonCildWrapper = styled.div`
  display: flex;
  flex: 1;
`;
