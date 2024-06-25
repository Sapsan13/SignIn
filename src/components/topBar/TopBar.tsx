import { AccountPic, Alert, Bell } from "@/components/Images";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const TopBar = () => {
  const pathname =
    usePathname().substring(1).charAt(0).toUpperCase() +
    usePathname().substring(1).slice(1);
  return (
    <SkeletonTopBarWrapper>
      <SkeletonTitleWrapper>
        {pathname === "Overview" ? " " : pathname}
      </SkeletonTitleWrapper>
      <SkeletonBellAccountWrap>
        <SkeletonBellWrapper>
          <Bell />
        </SkeletonBellWrapper>
        <SkeletonAlertPosition>
          <Alert />
        </SkeletonAlertPosition>
        <AccountPic />
      </SkeletonBellAccountWrap>
    </SkeletonTopBarWrapper>
  );
};

export default TopBar;

const SkeletonTopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  left: 280px;
  justify-content: space-between;
  align-items: center;
`;

const SkeletonTitleWrapper = styled.div`
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

const SkeletonBellAccountWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 103px;
  height: 40px;
  gap: 23px;
`;

const SkeletonBellWrapper = styled.div``;

const SkeletonAlertPosition = styled.div`
  position: absolute;
  right: 60px;
  top: -5px;
`;

const SkeletonAccountPicWrapper = styled.div``;
