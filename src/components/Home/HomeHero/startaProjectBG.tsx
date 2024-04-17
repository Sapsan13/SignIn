import Image from "next/image";
import styled from "styled-components";
const LayoutBG = () => {
  return (
    <Image
      src="/illustrations/StartAProject/LayoutBG.png"
      width={1920}
      height={1024}
      alt="Picture of the author"
    />
  );
};
const SkeletonStartProjWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  height: 1024px;
`;

const StartAProjectBG = () => {
  return (
    <SkeletonStartProjWrapper>
      <LayoutBG />
    </SkeletonStartProjWrapper>
  );
};
export default StartAProjectBG;
