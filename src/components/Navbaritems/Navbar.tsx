"use client";
import styled from "styled-components";
import NavbarStackItem from "./NavbarStackItem";
import UserCard, { TextLabel } from "./UserCard";
import { useState } from "react";
import { MlogoPic } from "../../../public/illustrations/Login/MlogoPic";

const Navbar = () => {
  const [textLabel, setTextLabel] = useState<TextLabel>("Free");

  const handleUserCardClick = () => {
    setTextLabel("BRO");
  };

  return (
    <NavbarTopblockWrapper>
      <NavbarWrapper>
        <div>
          <LogoWrapper>
            <MlogoPic />
          </LogoWrapper>
          <Nav>
            <NavbarStackItem />
          </Nav>
        </div>
        <UserCard
          statusCircle={true}
          textLabel={textLabel}
          handleClick={handleUserCardClick}
          firstName={"Hudson"}
          lastName={"Alvarez"}
          email={"hudson.alvarez@gmail.com"}
          upgradeLabel={"Upgrade to BRO"}
        />
      </NavbarWrapper>
    </NavbarTopblockWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  min-width: 180px;
  height: 100%;
  padding: 0px 16px 0px 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const NavbarTopblockWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;
`;

const LogoWrapper = styled.div`
  padding: 24px 16px 8px 16px;
`;
