import styled from "styled-components";
import LandingTextPicture from "./LandingTextPicture";
import GreenRocket from "./GreenRocket";
import LandingFooter from "./LandingFooter";

const SkeletonLandingItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  scroll-snap-align: center;
  padding: 80px 16px 80px 16px;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const LandingComponent = () => {
  return (
    <SkeletonLandingItemsWrapper>
      <LandingTextPicture />
      <GreenRocket />
      <LandingFooter />
    </SkeletonLandingItemsWrapper>
  );
};
export default LandingComponent;
