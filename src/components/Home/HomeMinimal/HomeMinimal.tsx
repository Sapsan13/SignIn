import Branding from "@/components/Home/HomeMinimal/Branding";
import Development from "@/components/Home/HomeMinimal/Development";
import Header from "@/components/Home/HomeMinimal/Header";
import UxUi from "@/components/Home/HomeMinimal/UxUi";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1, 980px;
  width: 100%;
  max-height: 1024px;
  gap: 80px;
  padding: 120px 144px 120px 144px;
`;

const SkeletonItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1, 152px;
  width: 100%;
  height: 438px;
  gap: 80px;
`;

const HomeMinimal = () => {
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
export default HomeMinimal;
