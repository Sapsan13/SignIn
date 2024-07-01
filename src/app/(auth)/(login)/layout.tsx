"use client";
import { Inter } from "next/font/google";
import LoginPicBlock from "@/components/loginPicBlock";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FlexRow>
      <LoginPicBlockWrapper>
        <LoginPicBlock />
      </LoginPicBlockWrapper>
      <CildWrapper>{children}</CildWrapper>
    </FlexRow>
  );
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1024px;
  min-height: 720px;
  width: 100%;

  align-items: center;
`;

const LoginPicBlockWrapper = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
`;

const CildWrapper = styled.div`
  display: flex;
  flex: 1;
`;
