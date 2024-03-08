import { ComponentProps } from "react";
import NavbarStackItem, { LeftNavbarItem } from "./NavbarStackItem";
import styled from "styled-components";
import Image from "next/image";
import EmailPlus from "./EmailPlus";

export type NavbarItem = {
  id: number;
  title: string;
  children: LeftNavbarItem[];
};

const NavIcon = ({ icon }: any) => {
  return (
    <Image src={icon} width={24} height={24} alt="Picture of the author" />
  );
};

export type NavbarArray = NavbarItem[];

const SkeletonNavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  height: 54px;
  width: 100%;
  gap: 10px;
  border-radius: 8px;
  padding-left: 8px;
  width: 100%;
  color: "#919EAB";
  border: 1px solid #919eab;
  box-sizing: border-box;
  &:hover {
    color: #212b36;
    cursor: pointer;
    text-decoration: none;
    background: #ebf8f4;
  }
`;

const SkeletonMailPlus = styled.div`
  margin-left: auto;
`;

// TEXT DECORATION NONE
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  text-decoration: none;
`;
///////////////////////////////////////////
export const items: NavbarArray = [
  {
    id: 1,
    title: "Overview",
    children: [
      {
        id: 1,
        alias: "overview",
        title: "Overview",
        icon: "/illustrations/leftBar/DashboardGrey.png",
      },
      {
        id: 2,
        alias: "analitycs",
        title: "Analitycs",
        icon: "/illustrations/leftBar/ChartGrey.png",
      },
      {
        id: 3,
        alias: "e_comers",
        title: "E-comers",
        icon: "/illustrations/leftBar/BagIconGrey.png",
      },
      {
        id: 4,
        alias: "banking",
        title: "Banking",
        icon: "/illustrations/leftBar/PillarsBankGrey.png",
      },
      {
        id: 5,
        alias: "booking",
        title: "Booking",
        icon: "/illustrations/leftBar/PlaneBookingGrey.png",
      },
    ],
  },
  {
    id: 2,
    title: "Management",
    children: [
      {
        id: 101,
        alias: "mail",
        title: "Mail",
        icon: "/illustrations/leftBar/MailIconGrey.png",
        endIcon: EmailPlus,
      },
    ],
  },
];

export const MenuItem = ({ item }: { item: LeftNavbarItem }) => {
  const Icon = item.endIcon;
  console.log("item => ", item);
  return (
    <StyledLink>
      <SkeletonNavItem>
        <NavIcon icon={item.icon} />
        {item.title}
        <SkeletonMailPlus>{item.endIcon ? <Icon /> : null}</SkeletonMailPlus>
      </SkeletonNavItem>
    </StyledLink>
  );
};

export const Category = ({ item }: any) => {
  return (
    console.log(item.child),
    (
      <div key={item.id}>
        {item.title}
        {item.children.map((children: any) => (
          <MenuItem item={children} key={children.id} />
        ))}
      </div>
    )
  );
};
