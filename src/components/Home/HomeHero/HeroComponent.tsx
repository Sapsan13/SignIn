import styled from "styled-components";
import StartANewProjectLeft from "./HeroStartANew";
import HeroStartANew from "./HeroHeader";
import StartAProjectBG from "./StartaProjectBG";

const SkeletonWrapper = styled.div`
  min-height: 100vh;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  scroll-snap-align: center;
`;
const SkeletonBGWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
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
  @media (max-width: 600px) {
    display: flex;
    padding: 0 10px 0 10px;
    left: 50%;
    transform: translate(-210px, 0);
  }
`;

const HeroComponent = () => {
  return (
    <SkeletonWrapper>
      <SkeletonBGWrapper>
        <StartAProjectBG />
        <SkeletonTopblock>
          <HeroStartANew />
        </SkeletonTopblock>
        <Skeletonleftblock>
          <StartANewProjectLeft />
        </Skeletonleftblock>
      </SkeletonBGWrapper>
    </SkeletonWrapper>
  );
};
export default HeroComponent;
