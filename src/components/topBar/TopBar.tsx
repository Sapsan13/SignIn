import Image from "next/image";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const TopBar = () => {
  const pathname =
    usePathname().substring(1).charAt(0).toUpperCase() +
    usePathname().substring(1).slice(1);
  const AccountPic = () => {
    return (
      <Image
        src="/illustrations/topRightIcons/AccountPic.png"
        width={40}
        height={40}
        alt="AccountPic"
      />
    );
  };
  const Alert = () => {
    return (
      <Image
        src="/illustrations/topRightIcons/Alert1.png"
        width={20}
        height={20}
        alt="Alert sign"
      />
    );
  };
  const Bell = () => {
    return (
      <Image
        src="/illustrations/topRightIcons/Bell.png"
        width={40}
        height={40}
        alt="Bell icon"
      />
    );
  };

  const SkeletonTopBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1160px;
    height: 80px;
    left: 280px;
    padding: 0px 40px 0px 40px;
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
