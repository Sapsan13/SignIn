import Image from "next/image";
import styled from "styled-components";

const BrandingPencil = () => {
  return (
    <Image
      src="/illustrations/StartAProject/BrandingPencil.png"
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
  height: 438px;
  padding: 80px 40px 80px 40px;
  border-radius: 16px;
  gap: 64px;
`;

const SkeletonBrandingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Public Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;
const SkeletonConsistentText = styled.div`
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

const SkeletonBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Branding = () => {
  return (
    <SkeletonWrapper>
      <BrandingPencil />
      <SkeletonBrand>
        <SkeletonBrandingText>Branding</SkeletonBrandingText>
        <SkeletonConsistentText>
          Consistent design makes it easy <br /> to brand your own.
        </SkeletonConsistentText>
      </SkeletonBrand>
    </SkeletonWrapper>
  );
};
export default Branding;
