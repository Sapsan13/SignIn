import { LayoutBG, MobileBG } from "@/components/Images";
import styled from "styled-components";

const StartAProjectBG = () => {
  return (
    <SkeletonStartProjWrapper>
      <LayoutBG />
      <MobileBG />
    </SkeletonStartProjWrapper>
  );
};
export default StartAProjectBG;

const SkeletonStartProjWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
