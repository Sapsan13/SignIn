import styled from "styled-components";
import StartANewProjectLeft from "./StartANewProjectLeft";
import MinimalHeader from "./MinimalHeader";
import StartAProjectBG from "./StartaProjectBG";
const SkeletonWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  /* height: 100vh;
  overflow: hidden; */
  scroll-snap-align: center;
`;
const SkeletonBGWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
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
