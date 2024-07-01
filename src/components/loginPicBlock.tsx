"use client";
import styled from "styled-components";
import { Logo, Diagram } from "@/components/Images";
import { logoutAction } from "@/store/actions/authActions";
import { useDispatch } from "react-redux";

const LoginPicBlock = ({}: PicProps) => {
  const dispatch = useDispatch();
  return (
    <PicWrapper>
      <LogoPic onClick={() => dispatch(logoutAction())}>
        <Logo />
      </LogoPic>
      <FlexCol>
        <Content>
          <PicText>
            Manage the job <br /> more effectively with Minimal
          </PicText>
          <DiagramPic>
            <Diagram />
          </DiagramPic>
        </Content>
      </FlexCol>
    </PicWrapper>
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

const PicWrapper = styled.div`
  min-height: 960;
  min-width: 1024;
  background-color: #fbfcfb;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const LogoPic = styled.div`
  display: flex;
  padding: 40px;
  max-height: 120px;
  position: absolute;
  height: auto;
  cursor: pointer;
  top: 0;
  left: 0;
`;
const DiagramPic = styled.div`
  display: flex;
  justify-content: center;
  min-width: 720px;
  min-height: 540px;
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 154px;
  height: auto;
  overflow: hidden;
  left: 120px;
  gap: 80px;
`;

const PicText = styled.div`
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

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
