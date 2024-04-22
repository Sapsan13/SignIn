import Image from "next/image";
import styled from "styled-components";
import RightPlanHeader from "./RightPlanHeader";
import RightPlanFooter from "./RightPlanFooter";
import RightPlanMain from "./RightPlanMain";

const SkeletonRightPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1, 800px;
  gap: 80px;
`;

const TheRightPlan = () => {
  return (
    <SkeletonRightPlanWrapper>
      <RightPlanHeader />
      <RightPlanMain items={RightPlanDataArray} />
      <RightPlanFooter />
    </SkeletonRightPlanWrapper>
  );
};
export default TheRightPlan;
