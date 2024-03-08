import styled from "styled-components";
import NavbarStackItem from "./leftNavbarItems/NavbarStackItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import EmailPlus from "./leftNavbarItems/EmailPlus";

const SkeletonNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
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
    <SkeletonNavbar>
      <Logo />
      {/* <div>{pathname}</div> */}
      {/* <Link href="/overview"></Link> */}

      <NavbarStackItem />

      {/* <Link href="/mail"></Link> */}
    </SkeletonNavbar>
  );
};

export default LeftNavbar;
