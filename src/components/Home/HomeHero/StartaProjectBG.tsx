import { LayoutBG, MobileBG } from "@/components/Images";
import styled from "styled-components";

const StartAProjectBG = () => {
  return (
    <StartProjWrapper>
      <LayoutBG />
      <MobileBG />
    </StartProjWrapper>
  );
};
export default StartAProjectBG;

const StartProjWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
