import styled from "styled-components";
import StartANewProjectLeft from "./StartANewProjectLeft";
import MinimalHeader from "./minimalHeader";
import StartAProjectBG from "./startaProjectBG";
const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  height: 100vh;
  width: 100vw;
`;
const SkeletonBGWrapper = styled.div`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SkeletonTopblock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Skeletonleftblock = styled.div`
  position: absolute;
  box-sizing: content-box;
  padding: 0 144px 0 144px;
  left: 0;
  top: 260px;
`;

const HeroSection = () => {
  return (
    <SkeletonWrapper>
      <SkeletonBGWrapper>
        <StartAProjectBG />
        <SkeletonTopblock>
          <MinimalHeader />
        </SkeletonTopblock>
        <Skeletonleftblock>
          <StartANewProjectLeft />
        </Skeletonleftblock>
      </SkeletonBGWrapper>
    </SkeletonWrapper>
  );
};
export default HeroSection;
