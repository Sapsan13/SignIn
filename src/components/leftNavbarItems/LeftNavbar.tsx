import styled from "styled-components";
import Image from "next/image";
import UserCard from "../../components/leftNavbarItems/UserCard";
import NavbarStackItem from "./NavbarStackItem";

const SkeletonLeftNavbarWrapper = styled.div`
  width: 280px;
  height: 100%;
  padding: 0px 16px 40px 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
`;

const SkeletonNavbarTopblockWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkeletonNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 491px;
`;

const SkeletonLogoWrapper = styled.div`
  width: 248px;
  height: 72px;
  padding: 24px 16px 8px 16px;
`;

const SkeletonMainContent = styled.div`
  width: 1, 080px;
  height: 468px;
  padding: 16px 0px 16px 0px;
  gap: 24px;
  opacity: 0px;
`;

const Logo = () => {
  return (
    <Image
      src="/illustrations/Logo.png"
      width={40}
      height={40}
      alt="Picture of the author"
    />
  );
};
const LeftNavbar = () => {
  return (
    <>
      <SkeletonNavbarTopblockWrapper>
        <SkeletonLeftNavbarWrapper>
          <SkeletonLogoWrapper>
            <Logo />
          </SkeletonLogoWrapper>
          <SkeletonNavbar>
            <NavbarStackItem />
          </SkeletonNavbar>
          <UserCard />
        </SkeletonLeftNavbarWrapper>
      </SkeletonNavbarTopblockWrapper>
    </>
  );
};

export default LeftNavbar;
