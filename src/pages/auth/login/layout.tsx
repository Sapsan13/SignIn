"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginPicBlock from "@/pages/components/loginPicBlock";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const SkeletonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1024px;
  min-height: 720px;
  align-items: center;
  justify-content: center;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SkeletonFlexRow>
      <div>
        <LoginPicBlock />
      </div>
      {children}
    </SkeletonFlexRow>
  );
}
