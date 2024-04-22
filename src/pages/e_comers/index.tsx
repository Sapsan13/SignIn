import { RightPlanDataArray } from "@/components/Home/TheRightPlan/RightPlanDataArray";
import RightPlanFooter from "@/components/Home/TheRightPlan/RightPlanFooter";
import RightPlanHeader from "@/components/Home/TheRightPlan/RightPlanHeader";
import RightPlanMain from "@/components/Home/TheRightPlan/RightPlanMain";
import TheRightPlan from "@/components/Home/TheRightPlan/TheRightPlan";
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
  return (
    <SkeletonItemsWrapper>
      <RightPlanHeader />
      <RightPlanMain items={RightPlanDataArray} />
      <RightPlanFooter />
    </SkeletonItemsWrapper>
  );
};
export default E_Comerse;
