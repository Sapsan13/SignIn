import Image from "next/image";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Image
      src="/illustrations/Login/logo.svg"
      width={40}
      height={40}
      alt="Logo"
    />
  );
};

export const Diagram = () => {
  return (
    <Image
      src="/illustrations/Login/diagram.svg"
      width={720}
      height={540}
      alt="Diagram"
    />
  );
};

const DisplayNone = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;
export const TripleBars = () => {
  return (
    <DisplayNone>
      <Image
        src="/illustrations/StartAProject/tripplebars.svg"
        width={40}
        height={40}
        alt="Three horizontal bars"
      />
    </DisplayNone>
  );
};

export const Starz = () => {
  return (
    <Image
      src="/illustrations/Customer/goldstar.svg"
      width={20}
      height={20}
      alt="Icon of a star"
    />
  );
};

const AvailableForIcons = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  gap: 16px;
  opacity: 0.4px;
  color: rgba(99, 115, 129, 1);
`;

export const AvailableIcons = () => {
  return (
    <AvailableForIcons>
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/figmagrey.svg"
        width={24}
        height={24}
        alt="FigmaIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/jsgrey.svg"
        width={24}
        height={24}
        alt="JSIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/tsgrey.svg"
        width={24}
        height={24}
        alt="TSIcon"
      />
      <Image
        style={{ opacity: 0.4 }}
        src="/illustrations/StartAProject/nextgrey.svg"
        width={24}
        height={24}
        alt="NextJSIcon"
      />
    </AvailableForIcons>
  );
};

export const Lightning = () => {
  return (
    <Image
      src="/illustrations/StartAProject/lightninggrey.svg"
      width={24}
      height={24}
      alt="LightningIcon"
    />
  );
};

export const SquareOut = () => {
  return (
    <Image
      src="/illustrations/StartAProject/squareout.svg"
      width={24}
      height={24}
      alt="SquareOutIcon"
    />
  );
};

const DispFlex = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;

const DispNone = styled.div`
  & > img {
    display: none;
    @media (max-width: 600px) {
      display: block;
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      opacity: 0.1;
    }
  }
`;

export const LayoutBG = () => {
  return (
    <DispFlex>
      <Image
        src="/illustrations/StartAProject/LayoutBG.png"
        width={1440}
        height={1024}
        alt="Background"
      />
    </DispFlex>
  );
};

export const MobileBG = () => {
  return (
    <DispNone>
      <Image
        src="/illustrations/StartAProject/mobileherobg.svg"
        width={1440}
        height={1024}
        alt="Background"
      />
    </DispNone>
  );
};

export const BrandingPencil = () => {
  return (
    <Image
      src="/illustrations/StartAProject/brandingpencil.svg"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const DevelopmentIcon = () => {
  return (
    <Image
      src="/illustrations/StartAProject/development.svg"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const Uxui = () => {
  return (
    <Image
      src="/illustrations/StartAProject/uxui.svg"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const Rocket = () => {
  return (
    <Image
      src="/illustrations/StartAProject/greenrocket.svg"
      width={456}
      height={456}
      alt="RocketPic"
    />
  );
};

export const WhiteSquareOut = () => {
  return (
    <Image
      src="/illustrations/StartAProject/squareout.svg"
      width={24}
      height={24}
      alt="RocketPic"
    />
  );
};

const La = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 48px;
`;
export const ArrowRight24 = () => {
  return (
    <La>
      <Image
        src={"/illustrations/StartAProject/arrowright.svg"}
        width={24}
        height={24}
        alt="Picture of an arrow"
      />
    </La>
  );
};

export const LandingTempalte = () => {
  return (
    <Image
      src="/illustrations/StartAProject/template.svg"
      width={660}
      height={510}
      alt="LandingComponentPic"
    />
  );
};

export const Galachka = () => {
  return (
    <Image
      src={"/illustrations/StartAProject/Vsign.png"}
      width={16}
      height={16}
      alt="Picture of an arrow"
    />
  );
};

export const XPECTUK = () => {
  return (
    <Image
      src={"/illustrations/StartAProject/Xpectuk.png"}
      width={16}
      height={16}
      alt="Picture of an arrow"
    />
  );
};

export const ArrowRight18 = () => {
  return (
    <Image
      src={"/illustrations/StartAProject/arrowright.svg"}
      width={18}
      height={18}
      alt="Picture of an arrow"
    />
  );
};

export const Figma = () => {
  return (
    <Image
      src="/illustrations/StartAProject/figmagrey.svg"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};
export const JS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/jsgrey.svg"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};
export const TS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/tsgrey.svg"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};

export const NextJS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/nextgrey.svg"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};

export const NavIcon = ({ icon }: any) => {
  return (
    <div>
      <Image src={icon} width={24} height={24} alt="Picture of an icon" />
    </div>
  );
};

const ArrowRight = styled.div`
  width: 24px;
  height: 16px;
  padding-right: 8px;
`;

export const ErrowRight16 = () => {
  return (
    <ArrowRight>
      <Image
        src={"/illustrations/Leftbar/arrowright.svg"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </ArrowRight>
  );
};

const Rotate90 = styled.div`
  display: flex;
  cursor: pointer;
  background-color: rgba(99, 115, 129, 0.01);
  height: 16px;
  width: 16px;
  transform: rotate(90deg);
`;
export const Arrow = () => {
  return (
    <Rotate90>
      <Image
        src={"/illustrations/Leftbar/arrowright.svg"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </Rotate90>
  );
};

export const Avatar = () => {
  return (
    <Image
      src="/illustrations/Leftbar/Usercard/avatar.png
      "
      width={48}
      height={48}
      alt="Picture user avatar"
    />
  );
};

export const Status = () => {
  return (
    <Image
      src="/illustrations/Leftbar/Usercard/status.png"
      width={11}
      height={11}
      alt="Status circle"
    />
  );
};

export const AvatarImg = ({ icon }: any) => {
  return (
    <Image src={icon} width={40} height={40} alt="Picture of the author" />
  );
};

const Landscape = styled.div`
  display: flex;
  width: 100%;
  max-height: 236px;
  margin: 8px;
  border-radius: 12px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const LandscapeImg = ({ icon }: any) => {
  return (
    <Landscape>
      <Image src={icon} width={236} height={236} alt="Picture of the author" />
    </Landscape>
  );
};

const SevenTwo = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 8px;
  padding: 2px 6px 2px 6px;
  gap: 6px;
  border-radius: 6px 0px 0px 0px;
`;

export const SevenTwoHotImg = () => {
  return (
    <SevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/hotseventwo.png"
        width={50}
        height={24}
        alt="Picture 72Hot"
      />
    </SevenTwo>
  );
};

export const SevenTwoImg = () => {
  return (
    <SevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/seventwo.svg"
        width={36}
        height={24}
        alt="Picture 72"
      />
    </SevenTwo>
  );
};

export const CalendarImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/calendar.svg"
      width={16}
      height={16}
      alt="Picture of a calendar"
    />
  );
};

export const PersonGuestImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/personguest.svg"
      width={16}
      height={16}
      alt="Picture person"
    />
  );
};

export const Arrow20 = () => {
  return (
    <ArrowRight>
      <Image
        src={"/illustrations/Leftbar/arrowright.svg"}
        width={20}
        height={20}
        alt="Picture arrow right"
      />
    </ArrowRight>
  );
};

export const ArowRight = () => {
  return (
    <Image
      src={"/illustrations/Leftbar/arrowright.svg"}
      width={20}
      height={20}
      alt="Picture of the author"
    />
  );
};

export const AvatarSimon = () => {
  return (
    <Image
      src={"/illustrations/Customer/simon.svg"}
      width={40}
      height={40}
      alt="Picture of the author"
    />
  );
};

export const StarGold = () => {
  return (
    <>
      <Image
        src={"/illustrations/Customer/goldstar.svg"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
  );
};

export const StarGrey = () => {
  return (
    <Image
      src={"/illustrations/Customer/greystar.svg"}
      width={20}
      height={20}
      alt="Picture of the author"
    />
  );
};

export const Ascend = () => {
  return (
    <Image
      src={"/illustrations/NewestBookingCards/AscendingGraph.png"}
      width={20}
      height={20}
      alt="Picture ascend graph"
    />
  );
};

export const AccountPic = () => {
  return (
    <Image
      src="/illustrations/topRightIcons/AccountPic.png"
      width={40}
      height={40}
      alt="AccountPic"
    />
  );
};
export const Alert = () => {
  return (
    <Image
      src="/illustrations/topRightIcons/Alert1.png"
      width={20}
      height={20}
      alt="Alert sign"
    />
  );
};
export const Bell = () => {
  return (
    <Image
      src="/illustrations/topRightIcons/Bell.png"
      width={40}
      height={40}
      alt="Bell icon"
    />
  );
};
