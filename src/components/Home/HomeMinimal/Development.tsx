import Image from "next/image";
import styled from "styled-components";

const DevelopmentIcon = () => {
  return (
    <Image
      src="/illustrations/StartAProject/Development.png"
      width={48}
      height={48}
      alt="BrandingPencil"
    />
  );
};

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 366px;
  padding: 80px 40px 80px 40px;
  border-radius: 16px;
  gap: 64px;
  @media (max-width: 600px) {
    flex-direction: column;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12),
      0px 0px 2px 0px rgba(145, 158, 171, 0.2);
  }
`;

const SkeletonDevelopment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Public Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;
const SkeletonTheKitText = styled.div`
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

const SkeletonDevelopmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Development = () => {
  return (
    <>
      <SkeletonWrapper>
        <DevelopmentIcon />
        <SkeletonDevelopmentWrapper>
          <SkeletonDevelopment>Development</SkeletonDevelopment>
          <SkeletonTheKitText>
            Easy to customize and extend,
            <br /> saving you time and money.
          </SkeletonTheKitText>
        </SkeletonDevelopmentWrapper>
      </SkeletonWrapper>
    </>
  );
};
export default Development;
