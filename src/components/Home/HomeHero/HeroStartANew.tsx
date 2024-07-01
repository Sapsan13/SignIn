import {
  Starz,
  AvailableIcons,
  Lightning,
  SquareOut,
} from "@/components/Images";
import styled from "styled-components";
import { GoldStar } from "@/../../public/illustrations/Customer/GoldStar";

const StartANewProjectLeft = () => {
  return (
    <BlockWrapper>
      <StartAMinimal>
        <StartA>
          Start a <br />
          New Project with
        </StartA>
        <MinimalWord>Minimal</MinimalWord>
        <StartMUI>
          The starting point for your next project is based on MUI.
          <br /> Easy customization Helps you build apps faster and better.
        </StartMUI>
        <StarsRting>
          <Stars>
            <GoldStar />
            {/* <Starz /> */}
            <Starz />
            <Starz />
            <Starz />
            <Starz />
          </Stars>
          <Rting>
            <Rate>4.95/5</Rate>
            <Reiews>(99+ reviews)</Reiews>
          </Rting>
        </StarsRting>
      </StartAMinimal>
      <ButtonsWrapper>
        <Light>
          <Lightning />
          Live Preview
        </Light>
        <SquareOu>
          <SquareOut />
          Design Preview
        </SquareOu>
      </ButtonsWrapper>
      <AvailableIconsWrapper>
        <AvailableFor>Available For</AvailableFor>
        <Ava>
          <AvailableIcons />
        </Ava>
      </AvailableIconsWrapper>
    </BlockWrapper>
  );
};
export default StartANewProjectLeft;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 480px; */
  width: 100%;
  /* height: 580px; */
  right: 1px;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const StartA = styled.div`
  display: flex;
  width: 100%;
  height: 128px;
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  color: #1e2d38;
  @media (max-width: 600px) {
    font-family: Public Sans;
    font-size: 48px;
    font-weight: 800;
    line-height: 64px;
    text-align: center;
  }
`;

const MinimalWord = styled.div`
  display: flex;
  font-family: Barlow;
  font-size: 96px;
  font-weight: 900;
  line-height: 96px;
  letter-spacing: 8px;
  padding: 8px 0 24px 0;
  justify-content: center;
  background: linear-gradient(129.92deg, #ffab00 0.21%, #00ab55 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    display: flex;
    font-family: Barlow;
    font-size: 64px;
    font-weight: 900;
    line-height: 64px;
    letter-spacing: 8px;
    text-align: center;
  }
`;
const StartAMinimal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  @media (max-width: 600px) {
    font-family: Public Sans;
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
  }
`;

const StartMUI = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;

const StarsRting = styled.div`
  display: flex;
  max-width: fit-content;
  align-items: center;
  width: 100%;
  height: 84px;
  padding: 24px 0px 40px 0px;
  gap: 4px;
`;

const Stars = styled.div`
  display: flex;
`;
const Rting = styled.div`
  display: flex;
  flex-direction: row;
`;
const Rate = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;
const Reiews = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 342px;
  width: 100%;
  padding: 0px 0px 40px 0px;
  gap: 16px;
  opacity: 0px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
`;
const Light = styled.button`
  display: flex;
  border: none;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 47%;
  min-height: 48px;
  padding: 11px 16px 11px 16px;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: rgba(33, 43, 54, 1);
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
`;

const SquareOu = styled.button`
  display: flex;
  border: 1px, solid, black;
  overflow: hidden;
  width: 53%;
  min-height: 48px;
  padding: 11px 16px 11px 16px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  color: rgba(33, 43, 54, 1);
  background-color: #fff;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
`;

const AvailableFor = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  justify-content: center;
  width: 100%;
  height: 66px;
  gap: 24px;
  color: rgba(99, 115, 129, 1);
  text-transform: uppercase;
`;

const AvailableIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66px;
  gap: 24px;
  opacity: 0.4px;
`;
const Ava = styled.div`
  display: flex;
`;
