import styled from "styled-components";

const RightPlanFooter = () => {
  return (
    <PlanHeaderWrapper>
      <StillPlease>
        <StillHave>Still have questions?</StillHave>
        <PleaseDescribe>
          Please describe your case to receive the most accurate advice
        </PleaseDescribe>
      </StillPlease>
      <ContactUs>Contact Us</ContactUs>
    </PlanHeaderWrapper>
  );
};
export default RightPlanFooter;

const PlanHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 0 80px 0;
`;

const StillPlease = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StillHave = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;

const PleaseDescribe = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const ContactUs = styled.button`
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
