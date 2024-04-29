import Image from "next/image";
import styled from "styled-components";
const LayoutBG = () => {
  return (
    <Image
      src="/illustrations/StartAProject/LayoutBG.png"
      width={1440}
      height={1024}
      alt="Background"
    />
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
    </SkeletonStartProjWrapper>
  );
};
export default StartAProjectBG;
