"use client";
import styled from "styled-components";
import Image from "next/image";

interface PicProps {
  // variant?: string;
  // color?: string;
  // size?: "s" | "m" | "l";
  // startIcon?: React.ReactElement;
  // endIcon?: React.ReactElement;
  // children?: React.ReactNode;
}

const Logo = () => {
  return (
    <Image
      src="/illustrations/Logo.png"
      width={40}
      height={40}
      alt="Picture of the author"
    />
  );
};

const Diagram = () => {
  return (
    <Image
      src="/illustrations/Diagram.png"
      width={720}
      height={540}
      alt="Picture of the author"
    />
  );
};

const SkeletonPicWrapper = styled.div`
  min-height: 960;
  min-width: 1024;
  height: 100vh;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: #fbfcfb00;
`;

const SkeletonLogoPic = styled.div`
  display: flex;
  padding: 40px;
  max-height: 120px;
  position: absolute;
  top: 0;
  left: 0;
`;
const SkeletonDiagramPic = styled.div`
  min-width: 720px;
  min-height: 540px;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 154px;
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
`;

const SkeletonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginPicBlock = ({}: PicProps) => {
  return (
    <SkeletonPicWrapper>
      <SkeletonLogoPic>
        <Logo />
      </SkeletonLogoPic>
      <SkeletonFlexCol>
        <SkeletonContent>
          <SkeletonPicText>
            Manage the job <br></br> more effectively with Minimal
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
