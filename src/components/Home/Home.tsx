import styled from "styled-components";
import HeroComponent from "./HomeHero/HeroComponent";
import HomeComponent from "./HomeMinimal/HomeComponent";
import LandingComponent from "./LandingBlock/LandingComponent";
import TheRightPlanComponent from "./TheRightPlan/TheRightPlanComponent";
import { RightPlanDataArray } from "./TheRightPlan/RightPlanDataArray";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <HomeComponent />
      <TheRightPlanComponent items={RightPlanDataArray} />
      <LandingComponent />
    </>
  );
};
export default Home;
