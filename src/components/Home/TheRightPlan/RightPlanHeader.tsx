import Image from "next/image";
import styled from "styled-components";

const RightPlanHeader = () => {
  return (
    <PlanHeaderWrapper>
      <PricingPlans>Pricing Plans</PricingPlans>
      <TheRight>
        The right plan
        <br /> for your business
      </TheRight>
      <PlanChoose>
        Choose the perfect plan for your needs. Always flexible to grow
      </PlanChoose>
    </PlanHeaderWrapper>
  );
};
export default RightPlanHeader;

const PlanHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
  padding-top: 80px;
`;

const PricingPlans = styled.div`
  font-family: Public Sans;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: rgba(145, 158, 171, 1);
`;

const TheRight = styled.div`
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
  @media (max-width: 600px) {
    font-family: Public Sans;
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
  }
`;

const PlanChoose = styled.div`
  display: flex;
  white-space: nowrap;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  justify-content: center;
  color: rgba(99, 115, 129, 1);
  @media (max-width: 600px) {
    white-space: normal;
    width: fit-content;
    align-items: center;
  }
`;
