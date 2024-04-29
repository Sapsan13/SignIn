import Image from "next/image";
import styled from "styled-components";

const Logo = () => {
  return (
    <Image
      src="/illustrations/Login/Logo.png"
      width={24}
      height={24}
      alt="LogoPic"
    />
  );
};

const SkeletonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding: 40px 0px 40px 0px;
  gap: 8px;
  width: 100%;
  overflow: hidden;
`;

const SkeletonCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  max-width: 160px;
  width: 100%;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

const SkeletonMinimalCC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(0, 167, 111, 1);
`;

const SkeletonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
const LandingFooter = () => {
  return (
    <SkeletonItemsWrapper>
      <Logo />
      <SkeletonCopyright>
        &copy;All rights reserved
        <br />
        <SkeletonRow>
          made by<></>
          <SkeletonMinimalCC> Minimal.cc</SkeletonMinimalCC>
        </SkeletonRow>
      </SkeletonCopyright>
    </SkeletonItemsWrapper>
  );
};
export default LandingFooter;
