"use client";
import Button from "@/components/button";
import Image from "next/image";
import { ComponentProps, ReactComponentElement } from "react";
import styled, { CSSProperties } from "styled-components";

// busyColor: CSSProperties["color"];

type UserCardProps = ComponentProps<"div"> & {
  busyLabel: boolean;
  statusCircle: boolean;
  firstName: string;
  lastName: string;
  email: string;
  icon?: React.ReactElement;
  children?: React.ReactNode;
};

const Avatar = () => {
  return (
    <Image
      src="/illustrations/userCard/Avatar.png"
      width={48}
      height={48}
      alt="Picture user avatar"
    />
  );
};

const Status = () => {
  return (
    <Image
      src="/illustrations/userCard/Status.png"
      width={11}
      height={11}
      alt="Status circle"
    />
  );
};

const BusyLabel = () => {
  return (
    <Image
      src="/illustrations/userCard/Label.png"
      width={34}
      height={20}
      alt="Busy label sign"
    />
  );
};

const SkeletonUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: none;
  width: 248px;
  height: 162px;
  border-radius: 16px;
  background-color: #fff;
`;

const SkeletonStatusCircle = styled.image`
  position: absolute;
  bottom: 1px;
  right: 1px;
`;

const SkeletonBtn = styled.button`
  background-color: #212b36;
  color: white;
  width: 124px;
  height: 36px;
  padding: 6px, 12px, 6px, 12px;
  border-radius: 8px;
  gap: 8px;
  appearance: none;
  border: none;
`;

const SkeletonAvatar = styled.image`
  border-radius: 50%;
  position: relative;
`;

const SkeletonName = styled.div`
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

const SkeletoNameMail = styled.div`
  gap: 4px;
  padding: 12px 0 16px 0;
`;

const SkeletonBusylabel = styled.image`
  width: 34px;
  height: 20px;
  border-radius: 6px, 6px, 6px, 2px;
  position: absolute;
  top: -5px;
  right: -25px;
`;

const SkeletoMail = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
`;

const UserCard = () => {
  return (
    <SkeletonUserCard>
      <SkeletonAvatar>
        <Avatar />
        <SkeletonBusylabel>
          <BusyLabel />
        </SkeletonBusylabel>
        <SkeletonStatusCircle>
          <Status />
        </SkeletonStatusCircle>
      </SkeletonAvatar>
      <SkeletoNameMail>
        <SkeletonName>HUDSON ALVAREZ</SkeletonName>
        <SkeletoMail>Mail@mail.mail</SkeletoMail>
      </SkeletoNameMail>
      <SkeletonBtn onClick={() => alert("BRO!!!")}>Upgrade to BRO</SkeletonBtn>
    </SkeletonUserCard>
  );
};

export default UserCard;
