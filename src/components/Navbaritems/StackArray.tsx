import EmailPlus from "./EmailPlus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { BagIconGrey } from "../../../public/illustrations/Leftbar/BagIconGrey";
import { DashboerdGreen } from "../../../public/illustrations/Leftbar/DashboardGreen";
import { ChartGreen } from "../../../public/illustrations/Leftbar/ChartGreen";
import { PillarsBankGrey } from "../../../PillarsBankGrey";
import { PlaneBookingGreen } from "../../../public/illustrations/Leftbar/PlaneBookingGreen";
import { MailiconGrey } from "../../../public/illustrations/Leftbar/MailiconGrey";
import { Arrowright } from "../../../public/illustrations/Leftbar/Usercard/Arrowright";

export const MenuItem = ({ item }: { item: NavbarItem }) => {
  const pathname = usePathname();

  return (
    <StyledLink href={item.alias}>
      <NavItem $item={item.alias} $pathname={pathname}>
        <Grey $item={item.alias} $pathname={pathname}>
          {item.icon}
        </Grey>
        {item.title}
        <MailPlus>{item.endIcon ? item.endIcon : null}</MailPlus>
      </NavItem>
    </StyledLink>
  );
};

export const Category = ({ item }: any) => {
  return (
    <StyledCategoryName>
      <div key={item.id}>
        <Title>{item.title.toUpperCase()}</Title>
        {item.children.map((children: any) => (
          <MenuItem item={children} key={children.id} />
        ))}
      </div>
    </StyledCategoryName>
  );
};

export type NavbarItem = {
  id: number;
  alias: string;
  title: string;
  icon?: JSX.Element;
  children?: NavbarItem[];
  endIcon?: JSX.Element;
};

export type NavbarArray = NavbarItem[];

const Title = styled.div`
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  padding: 16px 177px 8px 12px;
  letter-spacing: 0px;
  text-align: left;
  color: #919eab;
`;

const NavItem = styled.div<{ $item: string; $pathname: string }>`
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
  color: ${(props) =>
    props.$item === props.$pathname.substring(1) ? "#00a76f" : "#919EAB"};
  background-color: ${(props) =>
    props.$item === props.$pathname.substring(1) ? "#ebf8f4" : "white"};
  box-sizing: border-box;
  &:hover {
    color: #212b36;
    cursor: pointer;
    text-decoration: none;
    background: #ebf8f4;
  }
`;

const MailPlus = styled.div`
  margin-left: auto;
`;

const Grey = styled.div<{ $item: string; $pathname: string }>`
  filter: ${(props) =>
    props.$item === props.$pathname.substring(1)
      ? "grayscale(0)"
      : "grayscale(1)"};
`;

const StyledCategoryName = styled.div`
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #ebf8f4;
`;

export const items: NavbarArray = [
  {
    id: 1,
    alias: "overview",
    title: "Overview",
    children: [
      {
        id: 1,
        alias: "overview",
        title: "Overview",
        icon: <DashboerdGreen />,
      },
      {
        id: 2,
        alias: "ecommerce",
        title: "E-commerce",
        icon: <BagIconGrey />,
      },
      {
        id: 3,
        alias: "analytics",
        title: "Analytics",
        icon: <ChartGreen />,
      },

      {
        id: 4,
        alias: "banking",
        title: "Banking",
        icon: <PillarsBankGrey />,
        endIcon: <Arrowright height={16} width={16} />,
      },
      {
        id: 5,
        alias: "booking",
        title: "Booking",
        icon: <PlaneBookingGreen />,
      },
    ],
  },
  {
    id: 2,
    title: "Management",
    alias: "management",
    children: [
      {
        id: 101,
        alias: "mail",
        title: "Mail",
        icon: <MailiconGrey />,
        endIcon: <EmailPlus />,
      },
    ],
  },
];
