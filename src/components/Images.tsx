import Image from "next/image";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Image
      src="/illustrations/Login/Logo.png"
      width={40}
      height={40}
      alt="Logo"
    />
  );
};

export const Diagram = () => {
  return (
    <Image
      src="/illustrations/Login/Diagram.png"
      width={720}
      height={540}
      alt="Diagram"
    />
  );
};

const SkeletonDisplayNone = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;
export const TripleBars = () => {
  return (
    <SkeletonDisplayNone>
      <Image
        src="/illustrations/StartAProject/TripleBars.png"
        width={40}
        height={40}
        alt="Three horizontal bars"
      />
    </SkeletonDisplayNone>
  );
};

export const Starz = () => {
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

export const AvailableIcons = () => {
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

export const Lightning = () => {
  return (
    <Image
      src="/illustrations/StartAProject/Lightning.png"
      width={24}
      height={24}
      alt="LightningIcon"
    />
  );
};

export const SquareOut = () => {
  return (
    <Image
      src="/illustrations/StartAProject/SquareOut.svg"
      width={24}
      height={24}
      alt="SquareOutIcon"
    />
  );
};

const SkeletonDispFlex = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SkeletonDispNone = styled.div`
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
    <SkeletonDispFlex>
      <Image
        src="/illustrations/StartAProject/LayoutBG.png"
        width={1440}
        height={1024}
        alt="Background"
      />
    </SkeletonDispFlex>
  );
};

export const MobileBG = () => {
  return (
    <SkeletonDispNone>
      <Image
        src="/illustrations/StartAProject/MobileHeroBG.png"
        width={1440}
        height={1024}
        alt="Background"
      />
    </SkeletonDispNone>
  );
};

export const BrandingPencil = () => {
  return (
    <Image
      src="/illustrations/StartAProject/BrandingPencil.png"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const DevelopmentIcon = () => {
  return (
    <Image
      src="/illustrations/StartAProject/Development.png"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const Uxui = () => {
  return (
    <Image
      src="/illustrations/StartAProject/UXUI.png"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

export const Rocket = () => {
  return (
    <Image
      src="/illustrations/StartAProject/GreenRocket.png"
      width={456}
      height={456}
      alt="RocketPic"
    />
  );
};

export const WhiteSquareOut = () => {
  return (
    <Image
      src="/illustrations/StartAProject/WhiteSquareOut.png"
      width={24}
      height={24}
      alt="RocketPic"
    />
  );
};

const SkeletonLa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 48px;
`;
export const ArrowRight24 = () => {
  return (
    <SkeletonLa>
      <Image
        src={"/illustrations/StartAProject/ArrowRight.png"}
        width={24}
        height={24}
        alt="Picture of an arrow"
      />
    </SkeletonLa>
  );
};

export const LandingTempalte = () => {
  return (
    <Image
      src="/illustrations/StartAProject/LandingTemplate.png"
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
      src={"/illustrations/StartAProject/ArrowRight.png"}
      width={18}
      height={18}
      alt="Picture of an arrow"
    />
  );
};

export const Figma = () => {
  return (
    <Image
      src="/illustrations/StartAProject/FigmaIcon.png"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};
export const JS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/JSIcon.png"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};
export const TS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/TSIcon.png"
      width={24}
      height={24}
      alt="FigmaIcon"
    />
  );
};

export const NextJS = () => {
  return (
    <Image
      src="/illustrations/StartAProject/NextJSIcon.png"
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

const SkeletonArrowRight = styled.div`
  width: 24px;
  height: 16px;
  padding-right: 8px;
`;

export const ErrowRight16 = () => {
  return (
    <SkeletonArrowRight>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </SkeletonArrowRight>
  );
};

const SkeletonRotate90 = styled.div`
  display: flex;
  cursor: pointer;
  background-color: rgba(99, 115, 129, 0.01);
  height: 16px;
  width: 16px;
  transform: rotate(90deg);
`;
export const Arrow = () => {
  return (
    <SkeletonRotate90>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </SkeletonRotate90>
  );
};

export const Avatar = () => {
  return (
    <Image
      src="/illustrations/userCard/Avatar.png"
      width={48}
      height={48}
      alt="Picture user avatar"
    />
  );
};

export const Status = () => {
  return (
    <Image
      src="/illustrations/userCard/Status.png"
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

const SkeletonLandscapeImg = styled.div`
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
    <SkeletonLandscapeImg>
      <Image src={icon} width={236} height={236} alt="Picture of the author" />
    </SkeletonLandscapeImg>
  );
};

const SkeletonSevenTwo = styled.div`
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
    <SkeletonSevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/72Hot.png"
        width={50}
        height={24}
        alt="Picture 72Hot"
      />
    </SkeletonSevenTwo>
  );
};

export const SevenTwoImg = () => {
  return (
    <SkeletonSevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/72.png"
        width={36}
        height={24}
        alt="Picture 72"
      />
    </SkeletonSevenTwo>
  );
};

export const CalendarImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/Calendar.png"
      width={16}
      height={16}
      alt="Picture of a calendar"
    />
  );
};

export const PersonGuestImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/PersonGuest.png"
      width={16}
      height={16}
      alt="Picture person"
    />
  );
};

const SkeletonArrow20Right = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 50px 0px 0px 0px;
  opacity: 0.48px;
  padding-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const Arrow20 = () => {
  return (
    <SkeletonArrowRight>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={20}
        height={20}
        alt="Picture arrow right"
      />
    </SkeletonArrowRight>
  );
};

export const ArowRight = () => {
  return (
    <Image
      src={"/illustrations/leftBar/ArrowRight.png"}
      width={20}
      height={20}
      alt="Picture of the author"
    />
  );
};

export const AvatarSimon = () => {
  return (
    <Image
      src={"/illustrations/customerReviews/SimonJayvion.png"}
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
        src={"/illustrations/customerReviews/star.png"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
  );
};

export const StarGrey = () => {
  return (
    <>
      <Image
        src={"/illustrations/customerReviews/greyStar.png"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
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
