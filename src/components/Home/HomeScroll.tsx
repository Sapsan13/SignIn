import styled from "styled-components";
import HeroComponent from "./HomeHero/HeroComponent";
import HomeComponent from "./HomeMinimal/HomeComponent";
import LandingComponent from "./LandingBlock/LandingComponent";
import TheRightPlanComponent from "./TheRightPlan/TheRightPlanComponent";
import { RightPlanDataArray } from "./TheRightPlan/RightPlanDataArray";

const HomeScroll = () => {
  return (
    <ItemsWrapper>
      <HeroComponent />
      <HomeComponent />
      <TheRightPlanComponent items={RightPlanDataArray} />
      <LandingComponent />
    </ItemsWrapper>
  );
};
export default HomeScroll;

const ItemsWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow: hidden auto;
  @media (max-width: 600px) {
    flex-direction: column;
    scroll-snap-type: mandatory;
    gap: 20px;
  }
`;
