"use client";
import HeroStartANew from "@/components/Home/HomeHero/HeroHeader";
import HomeScroll from "@/components/Home/HomeScroll";
import styled from "styled-components";

const SkeletonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1, 800px;
  gap: 80px;
`;

const E_Comerse = () => {
  return <HeroStartANew />;
};
export default E_Comerse;