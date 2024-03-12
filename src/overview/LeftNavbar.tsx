import styled from "styled-components";
import NavbarStackItem from "../components/leftNavbarItems/NavbarStackItem";
import Image from "next/image";
import UserCard from "../components/leftNavbarItems/UserCard";
import TopBar from "@/components/topBar/TopBar";

const SkeletonNavbarTopblockWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkeletonLeftNavbarWrapper = styled.div`
  width: 280px;
  height: 100%;
  padding: 0px 16px 40px 16px;
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
  padding: 24px, 16px, 8px, 16px;
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
const Overview = () => {
  return (
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
      <TopBar />
    </SkeletonNavbarTopblockWrapper>
  );
};

export default Overview;
