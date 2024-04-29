import styled from "styled-components";

const SkeletonPlanHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 0 80px 0;
`;

const SkeletonStillPlease = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const SkeletonStillHave = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;

const SkeletonPleaseDescribe = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const SkeletonContactUs = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 48px;
  padding: 11px 16px 11px 16px;
  border-radius: 8px;
  background: rgba(33, 43, 54, 1);
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  color: #fff;
  cursor: pointer;
`;

const RightPlanFooter = () => {
  return (
    <SkeletonPlanHeaderWrapper>
      <SkeletonStillPlease>
        <SkeletonStillHave>Still have questions?</SkeletonStillHave>
        <SkeletonPleaseDescribe>
          Please describe your case to receive the most accurate advice
        </SkeletonPleaseDescribe>
      </SkeletonStillPlease>
      <SkeletonContactUs>Contact Us</SkeletonContactUs>
    </SkeletonPlanHeaderWrapper>
  );
};
export default RightPlanFooter;
