import { AccountPic, Alert, Bell } from "@/components/Images";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const TopBar = () => {
  const pathname =
    usePathname().substring(1).charAt(0).toUpperCase() +
    usePathname().substring(1).slice(1);
  return (
    <TopBarWrapper>
      <TitleWrapper>{pathname === "Overview" ? " " : pathname}</TitleWrapper>
      <BellAccountWrap>
        <BellWrapper>
          <Bell />
        </BellWrapper>
        <AlertPosition>
          <Alert />
        </AlertPosition>
        <AccountPic />
      </BellAccountWrap>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  left: 280px;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 146px;
  height: 48px;
  top: 22px;
  left: 320px;
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

const BellAccountWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 103px;
  height: 40px;
  gap: 23px;
`;

const BellWrapper = styled.div``;

const AlertPosition = styled.div`
  position: absolute;
  right: 60px;
  top: -5px;
`;
