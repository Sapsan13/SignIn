import styled from "styled-components";
import NavbarStackItem from "./NavbarStackItem";
import Image from "next/image";
import UserCard, { TextVLabel } from "./UserCard";
import { useState } from "react";

const SkeletonLeftNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  justify-content: space-between;
  padding: 0px 16px 40px 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
`;

const SkeletonNavbarTopblockWrapper = styled.div`
  display: flex;
  height: 100vh;
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
  const [textVLabel, setTextVLabel] = useState<TextVLabel>("Free");
  const onClickHandler = () => {
    // onClick={() => setCount(count + 1)
    setTextVLabel("BRO");
  };
  return (
    <>
      <SkeletonNavbarTopblockWrapper>
        <SkeletonLeftNavbarWrapper>
          <div>
            <SkeletonLogoWrapper>
              <Logo />
            </SkeletonLogoWrapper>
            <SkeletonNavbar>
              <NavbarStackItem />
            </SkeletonNavbar>
          </div>
          <div>
            <UserCard
              statusCircle={true}
              textVLabel={textVLabel}
              Click={onClickHandler}
              firstName={"Hudson"}
              lastName={"Alvarez"}
              email={"hudson.alvarez@gmail.com"}
              upgradeLabel={"Upgrade to BRO"}
            />
          </div>
        </SkeletonLeftNavbarWrapper>
      </SkeletonNavbarTopblockWrapper>
    </>
  );
};

export default LeftNavbar;
