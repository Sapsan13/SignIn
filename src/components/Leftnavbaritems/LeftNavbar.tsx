"use client";
import { Logo } from "@/components/Images";
import styled from "styled-components";
import NavbarStackItem from "./NavbarStackItem";
import UserCard, { TextVLabel } from "./UserCard";
import { useState } from "react";

const LeftNavbar = () => {
  const [textVLabel, setTextVLabel] = useState<TextVLabel>("Free");
  const onClickHandler = () => {
    setTextVLabel("BRO");
  };
  return (
    <NavbarTopblockWrapper>
      <LeftNavbarWrapper>
        <div>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Navbar>
            <NavbarStackItem />
          </Navbar>
        </div>
        <UserCard
          statusCircle={true}
          textVLabel={textVLabel}
          handleClick={onClickHandler}
          firstName={"Hudson"}
          lastName={"Alvarez"}
          email={"hudson.alvarez@gmail.com"}
          upgradeLabel={"Upgrade to BRO"}
        />
      </LeftNavbarWrapper>
    </NavbarTopblockWrapper>
  );
};

export default LeftNavbar;

const LeftNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  min-width: 180px;
  height: 100%;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const NavbarTopblockWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 248px;
  height: 72px;
  padding: 24px 16px 8px 16px;
`;

const MainContent = styled.div`
  width: 1, 080px;
  height: 468px;
  padding: 16px 0px 16px 0px;
  gap: 24px;
  opacity: 0px;
`;
