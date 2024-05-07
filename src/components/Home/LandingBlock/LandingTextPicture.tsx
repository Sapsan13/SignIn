import { LandingTempalte, ErrowRight16 } from "@/components/Images";
import styled from "styled-components";

const LandingTextPicture = () => {
  return (
    <SkeletonLandingWrapper>
      <SkeletonLookingZoneWrap>
        <SkeletonLookingFor>Looking for A</SkeletonLookingFor>
        <SkeletonLandingTemplate>
          Landing Page?
          <br /> Template
        </SkeletonLandingTemplate>
        <SkeletonVisitZone>
          <div>Visit Zone Landing Page</div> <ErrowRight16 />
        </SkeletonVisitZone>
      </SkeletonLookingZoneWrap>
      <SkeletonLooking>
        <LandingTempalte />
      </SkeletonLooking>
      <SkeletonVisitZoneMinim>
        <div>Visit Zone Landing Page</div> <ErrowRight16 />
      </SkeletonVisitZoneMinim>
    </SkeletonLandingWrapper>
  );
};
export default LandingTextPicture;

const SkeletonLandingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 160px;
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
  }
`;

const SkeletonLookingFor = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  text-transform: uppercase;
  color: rgba(145, 158, 171, 1);
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const SkeletonLandingTemplate = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  text-align: left;
  padding: 24px 0 40px 0;
  color: rgba(33, 43, 54, 1);
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SkeletonVisitZone = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  position: relative;
  border-radius: 8px;
  height: 48px;
  padding: 0 16px 0 16px;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
  border: 1px solid rgba(145, 158, 171, 0.24);
  gap: 6px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SkeletonLookingZoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SkeletonLooking = styled.div`
  display: flex;
  height: auto;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px 0 16px;
  }
`;

const SkeletonVisitZoneMinim = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    width: fit-content;
    position: relative;
    border-radius: 8px;
    height: 48px;
    padding: 0 16px 0 16px;
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    text-align: left;
    color: rgba(33, 43, 54, 1);
    border: 1px solid rgba(145, 158, 171, 0.24);
    gap: 6px;
  }
`;
