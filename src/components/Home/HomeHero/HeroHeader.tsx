import styled from "styled-components";
import { Logo, TripleBars } from "@/components/Images";

const HeroStartANew = () => {
  return (
    <MinimalHeaderWrapper>
      <Row>
        <Logo />
      </Row>
      <Row>
        <RowHomeDocs>
          <TextWrapper>Home</TextWrapper>
          <TextWrapper>Components</TextWrapper>
          <TextWrapper>Docs</TextWrapper>
        </RowHomeDocs>
        <Ro>
          <Login>LogIn</Login>
          <PurchaseNow> Purchase Now</PurchaseNow>
          <TripleBars />{" "}
        </Ro>
      </Row>
    </MinimalHeaderWrapper>
  );
};
export default HeroStartANew;

const MinimalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 88px;
  padding: 0px 144px 0px 144px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 16px;
  }
`;

const TextWrapper = styled.div`
  cursor: pointer;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
`;

const Login = styled.button`
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 36px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  background: none;
  border: 1px solid rgba(145, 158, 171, 0.24);
  cursor: pointer;
  border-radius: 8px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const PurchaseNow = styled.button`
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 119px;
  height: 36px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  background-color: #212b36;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  @media (max-width: 600px) {
    display: flex;
  }
`;

const Ro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 600px) {
    display: flex;
    gap: 8px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const RowHomeDocs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
