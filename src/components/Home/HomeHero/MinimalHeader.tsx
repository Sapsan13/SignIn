import Image from "next/image";
import styled from "styled-components";

const Logo = () => {
  return (
    <Image src="/illustrations/Logo.png" width={40} height={40} alt="Logo" />
  );
};

const SkeletonMinimalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 88px;
  padding: 0px 144px 0px 144px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

const SkeletonTextWrapper = styled.div`
  cursor: pointer;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
`;

const SkeletonLogin = styled.button`
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 36px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  background: none;
  border: 1px solid rgba(145, 158, 171, 0.24);
  cursor: pointer;
  border-radius: 8px;
`;

const SkeletonPurchaseNow = styled.button`
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 119px;
  height: 36px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  background-color: #212b36;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
`;

const SkeletonRo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const SkeletonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const MinimalHeader = () => {
  return (
    <SkeletonMinimalHeaderWrapper>
      <SkeletonRow>
        <Logo />
      </SkeletonRow>
      <SkeletonRow>
        <SkeletonRow>
          <SkeletonTextWrapper>Home</SkeletonTextWrapper>
          <SkeletonTextWrapper>Components</SkeletonTextWrapper>
          <SkeletonTextWrapper>Docs</SkeletonTextWrapper>
        </SkeletonRow>
        <SkeletonRo>
          <SkeletonLogin>LogIn</SkeletonLogin>
          <SkeletonPurchaseNow>Purchase Now</SkeletonPurchaseNow>
        </SkeletonRo>
      </SkeletonRow>
    </SkeletonMinimalHeaderWrapper>
  );
};
export default MinimalHeader;
