import Branding from "@/components/Home/HomeMinimal/Branding";
import Development from "@/components/Home/HomeMinimal/Development";
import Header from "@/components/Home/HomeMinimal/Header";
import UxUi from "@/components/Home/HomeMinimal/UxUi";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const SkeletonItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const HomeComponent = () => {
  return (
    <SkeletonWrapper>
      <Header />
      <SkeletonItemsWrapper>
        <Branding />
        <UxUi />
        <Development />
      </SkeletonItemsWrapper>
    </SkeletonWrapper>
  );
};
export default HomeComponent;
