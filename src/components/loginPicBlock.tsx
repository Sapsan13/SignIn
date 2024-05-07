"use client";
import styled from "styled-components";
import { Logo, Diagram } from "@/components/Images";

const LoginPicBlock = ({}: PicProps) => {
  return (
    <SkeletonPicWrapper>
      <SkeletonLogoPic>
        <Logo />
      </SkeletonLogoPic>
      <SkeletonFlexCol>
        <SkeletonContent>
          <SkeletonPicText>
            Manage the job <br /> more effectively with Minimal
          </SkeletonPicText>
          <SkeletonDiagramPic>
            <Diagram />
          </SkeletonDiagramPic>
        </SkeletonContent>
      </SkeletonFlexCol>
    </SkeletonPicWrapper>
  );
};

export default LoginPicBlock;

interface PicProps {
  variant?: string;
  color?: string;
  size?: "s" | "m" | "l";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children?: React.ReactNode;
}

const SkeletonPicWrapper = styled.div`
  min-height: 960;
  min-width: 1024;
  background-color: #fbfcfb;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const SkeletonLogoPic = styled.div`
  display: flex;
  padding: 40px;
  max-height: 120px;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
`;
const SkeletonDiagramPic = styled.div`
  display: flex;
  justify-content: center;
  min-width: 720px;
  min-height: 540px;
  width: 100%;
  height: auto;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 154px;
  width: 100%;
  height: auto;
  left: 120px;
  gap: 80px;
`;

const SkeletonPicText = styled.div`
  //styleName: H3;
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  color: #212b36;
  letter-spacing: 0px;
  text-align: center;
  margin: 0 auto;
`;

const SkeletonFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
