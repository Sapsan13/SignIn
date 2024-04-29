import Image from "next/image";
import styled from "styled-components";

const Starz = () => {
  return (
    <Image
      src="/illustrations/customerReviews/star.png"
      width={20}
      height={20}
      alt="Icon of a star"
    />
  );
};

const SkeletonAvailableForIcons = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  gap: 16px;
  opacity: 0.4px;
  color: rgba(99, 115, 129, 1);
`;

const AvailableIcons = () => {
  return (
    <SkeletonAvailableForIcons>
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/FigmaGrey.png"
        width={24}
        height={24}
        alt="FigmaIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/JSGrey.png"
        width={24}
        height={24}
        alt="JSIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/TSGrey.png"
        width={24}
        height={24}
        alt="TSIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/NextGrey.png"
        width={24}
        height={24}
        alt="NextJSIcon"
      />
    </SkeletonAvailableForIcons>
  );
};

const Lightning = () => {
  return (
    <Image
      src="/illustrations/StartAProject/Lightning.png"
      width={24}
      height={24}
      alt="LightningIcon"
    />
  );
};

const SquareOut = () => {
  return (
    <Image
      src="/illustrations/StartAProject/SquareOut.svg"
      width={24}
      height={24}
      alt="SquareOutIcon"
    />
  );
};
const SkeletonBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 580px;
  right: 1px;
`;

const SkeletonStartA = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  height: 128px;
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  text-align: center;
  justify-content: center;
`;

const SkeletonMinimalWord = styled.div`
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
`;
const SkeletonStartAMinimal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SkeletonStartMUI = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;

const SkeletonStarzRting = styled.div`
  display: flex;
  max-width: fit-content;
  align-items: center;
  width: 100%;
  height: 84px;
  padding: 24px 0px 40px 0px;
  gap: 4px;
`;

const SkeletonStarz = styled.div`
  display: flex;
`;
const SkeletonRting = styled.div`
  display: flex;
  flex-direction: row;
`;
const SkeletonRate = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(33, 43, 54, 1);
`;
const SkeletonReiews = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const SkeletonButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 342px;
  width: 100%;
  height: 88px;
  padding: 0px 0px 40px 0px;
  gap: 16px;
  opacity: 0px;
`;
const SkeletonLightning = styled.button`
  display: flex;
  border: none;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 48px;
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

const SkeletonSquareOut = styled.button`
  display: flex;
  border: 1px, solid, black;
  overflow: hidden;
  width: 53%;
  height: 48px;
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

const SkeletonAvailableFor = styled.div`
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

const SkeletonAvailableIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66px;
  gap: 24px;
  opacity: 0.4px;
`;
const SkeletonAva = styled.div`
  display: flex;
`;

const StartANewProjectLeft = () => {
  return (
    <SkeletonBlockWrapper>
      <SkeletonStartAMinimal>
        <SkeletonStartA>
          Start a <br />
          New Project with
        </SkeletonStartA>
        <SkeletonMinimalWord>Minimal</SkeletonMinimalWord>
        <SkeletonStartMUI>
          The starting point for your next project is based on MUI.
          <br /> Easy customization Helps you build apps faster and better.
        </SkeletonStartMUI>
        <SkeletonStarzRting>
          <SkeletonStarz>
            <Starz />
            <Starz />
            <Starz />
            <Starz />
            <Starz />
          </SkeletonStarz>
          <SkeletonRting>
            <SkeletonRate>4.95/5</SkeletonRate>
            <SkeletonReiews>(99+ reviews)</SkeletonReiews>
          </SkeletonRting>
        </SkeletonStarzRting>
      </SkeletonStartAMinimal>
      <SkeletonButtonsWrapper>
        <SkeletonLightning>
          <Lightning />
          Live Preview
        </SkeletonLightning>
        <SkeletonSquareOut>
          <SquareOut />
          Design Preview
        </SkeletonSquareOut>
      </SkeletonButtonsWrapper>
      <SkeletonAvailableIconsWrapper>
        <SkeletonAvailableFor>Available For</SkeletonAvailableFor>
        <SkeletonAva>
          <AvailableIcons />
        </SkeletonAva>
      </SkeletonAvailableIconsWrapper>
    </SkeletonBlockWrapper>
  );
};
export default StartANewProjectLeft;
