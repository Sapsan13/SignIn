import Image from "next/image";
import styled from "styled-components";
const SkeletonDispFlex = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;
const LayoutBG = () => {
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
const MobileBG = () => {
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
const SkeletonStartProjWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const StartAProjectBG = () => {
  return (
    <SkeletonStartProjWrapper>
      <LayoutBG />
      <MobileBG />
    </SkeletonStartProjWrapper>
  );
};
export default StartAProjectBG;
