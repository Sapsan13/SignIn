import Image from "next/image";
import EmailPlus from "./EmailPlus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export type NavbarItem = {
  id: number;
  title: string;
  children: LeftNavbarItem[];
};

const NavIcon = ({ icon }: any) => {
  return (
    <div>
      <Image src={icon} width={24} height={24} alt="Picture of an icon" />
    </div>
  );
};

const SkeletonArrowRight = styled.div`
  width: 24px;
  height: 16px;
  padding-right: 8px;
`;

const ErrowRight = () => {
  return (
    <SkeletonArrowRight>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </SkeletonArrowRight>
  );
};

export type NavbarArray = NavbarItem[];

const SkeletonTitle = styled.div`
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  padding-left: 8px;
  letter-spacing: 0px;
  text-align: left;
  color: #919eab;
`;

const SkeletonNavItem = styled.div<{ $item: string; $pathname: string }>`
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

const SkeletonMailPlus = styled.div`
  margin-left: auto;
`;

const SkeletonGrey = styled.div<{ $item: string; $pathname: string }>`
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

// TEXT DECORATION NONE
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #ebf8f4;
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
        icon: "/illustrations/leftBar/DashboardGreen.png",
      },
      {
        id: 2,
        alias: "e_comers",
        title: "E-comers",
        icon: "/illustrations/leftBar/BagIconGrey.png",
      },
      {
        id: 3,
        alias: "analitycs",
        title: "Analitycs",
        icon: "/illustrations/leftBar/ChartGreen.png",
      },

      {
        id: 4,
        alias: "banking",
        title: "Banking",
        icon: "/illustrations/leftBar/PillarsBankGrey.png",
        endIcon: ErrowRight,
      },
      {
        id: 5,
        alias: "booking",
        title: "Booking",
        icon: "/illustrations/leftBar/PlaneBookingGreen.png",
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
  const pathname = usePathname();

  return (
    <StyledLink href={item.alias}>
      <SkeletonNavItem $item={item.alias} $pathname={pathname}>
        <SkeletonGrey $item={item.alias} $pathname={pathname}>
          <NavIcon icon={item.icon} />
        </SkeletonGrey>
        {item.title}
        <SkeletonMailPlus>{item.endIcon ? <Icon /> : null}</SkeletonMailPlus>
      </SkeletonNavItem>
    </StyledLink>
  );
};

export const Category = ({ item }: any) => {
  return (
    <StyledCategoryName>
      <div key={item.id}>
        <SkeletonTitle>{item.title.toUpperCase()}</SkeletonTitle>
        {item.children.map((children: any) => (
          <MenuItem item={children} key={children.id} />
        ))}
      </div>
    </StyledCategoryName>
  );
};
