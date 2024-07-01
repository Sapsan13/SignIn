import { Rocket, WhiteSquareOut } from "@/components/Images";
import styled from "styled-components";

const GreenRocket = () => {
  return (
    <ItemsRocketWrapper>
      <GreenBlock>
        <Rock>
          <Rocket />
        </Rock>
        <GetGap>
          <GetStarted>
            Get started with <br /> Minimal kit today
          </GetStarted>
          <PurchaseFree>
            <PurchaseNow>Purchase Now</PurchaseNow>
            <GetFree>
              Get Free Version <WhiteSquareOut />
            </GetFree>
          </PurchaseFree>
        </GetGap>
      </GreenBlock>
    </ItemsRocketWrapper>
  );
};
export default GreenRocket;

const ItemsRocketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px 0 16px;
  }
`;

const Rock = styled.div`
  display: flex;
  max-width: 456px;
  max-height: 456px;
  width: 100%;
  height: auto;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px 0 16px;
    max-width: 456px;
    max-height: 456px;
  }
`;

const GreenBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  /* position: relative; */
  max-width: 1152px;
  width: 100%;
  /* padding: 0 144px 0 144px; */
  border-radius: 24px;
  background: linear-gradient(135deg, #00a76f 0%, #007867 100%);
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GetStarted = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 402px;
  width: 100%;
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  text-align: left;
  color: #fff;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    font-family: Public Sans;
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
  }
`;

const PurchaseNow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  width: 134px;
  height: 48px;
  gap: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
`;

const GetFree = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 183px;
  height: 48px;
  padding: 11px 16px 11px 16px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.48);
  background: transparent;
  color: rgba(255, 255, 255, 1);
`;

const GetGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: left;
  justify-content: left;
`;

const PurchaseFree = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }
`;
