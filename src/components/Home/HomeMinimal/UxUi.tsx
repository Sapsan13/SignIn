import { Uxui } from "@/components/Images";
import styled from "styled-components";

const UxUi = () => {
  return (
    <>
      <Wrapper>
        <Uxui />
        <UxuiWrapper>
          <Ux>UX & UI Design</Ux>
          <TheKitText>
            The kit is built on the principles of <br />
            the atomic design system. It <br />
            helps you to create projects <br />
            fastest and easily customized <br /> packages for your projects.
          </TheKitText>
        </UxuiWrapper>
      </Wrapper>
    </>
  );
};
export default UxUi;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 366px;
  padding: 80px 40px 80px 40px;
  border-radius: 16px;
  gap: 64px;
  box-shadow: -40px 40px 80px 0px #919eab1f;
  @media (max-width: 600px) {
    flex-direction: column;
    box-shadow:
      0px 12px 24px -4px rgba(145, 158, 171, 0.12),
      0px 0px 2px 0px rgba(145, 158, 171, 0.2);
  }
`;

const Ux = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Public Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;
const TheKitText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const UxuiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
