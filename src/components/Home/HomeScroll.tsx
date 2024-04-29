import styled from "styled-components";
import HeroSection from "./HomeHero/HeroSection";
import HomeMinimal from "./HomeMinimal/HomeMinimal";
import LandingComponent from "./LandingBlock/LandingComponent";
import TheRightPlan from "./TheRightPlan/TheRightPlan";
import { RightPlanDataArray } from "./TheRightPlan/RightPlanDataArray";

const SkeletonItemsWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow: hidden auto;
  @media (max-width: 600px) {
    flex-direction: column;
    scroll-snap-type: none;
  }
`;

const HomeScroll = ({ items }: RightPlanMainProps) => {
  return (
    <SkeletonItemsWrapper>
      <HeroSection />
      <HomeMinimal />
      <TheRightPlan items={RightPlanDataArray} />
      <LandingComponent />
    </SkeletonItemsWrapper>
  );
};
export default HomeScroll;
