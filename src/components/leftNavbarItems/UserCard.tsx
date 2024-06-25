"use client";
import { Avatar, Status } from "@/components/Images";
import { ComponentProps, ReactComponentElement, useState } from "react";
import styled, { CSSProperties } from "styled-components";

const UserCard = ({
  Click,
  textVLabel,
  firstName,
  lastName,
  email,
  upgradeLabel,
}: UserCardProps) => {
  return (
    <SkeletonUserCard>
      <SkeletonAvatar>
        <Avatar />
        <SkeletonCurrentVLabel title={textVLabel}>
          {textVLabel}
        </SkeletonCurrentVLabel>
        <SkeletonStatusCircle>
          <Status />
        </SkeletonStatusCircle>
      </SkeletonAvatar>
      <SkeletoNameMail>
        <SkeletonName>
          {firstName} {lastName}
        </SkeletonName>
        <SkeletoMail>{email}</SkeletoMail>
      </SkeletoNameMail>
      {textVLabel === "Free" ? (
        <SkeletonBtn onClick={Click}>{upgradeLabel}</SkeletonBtn>
      ) : null}
    </SkeletonUserCard>
  );
};

export default UserCard;

// busyColor: CSSProperties["color"];
type UserCardProps = ComponentProps<"div"> & {
  Click: () => void;
  textVLabel: TextVLabel;
  statusCircle: boolean;
  firstName: string;
  lastName: string;
  email: string;
  icon?: React.ReactElement;
  upgradeLabel: string;
};

export type TextVLabel = "Free" | "BRO" | "Enterprise";
const colorMapping: Record<TextVLabel, string> = {
  BRO: "#ff5630",
  Enterprise: "#ffab00",
  Free: "#22c55e",
};
const SkeletonCurrentVLabel = styled.div<{ title: TextVLabel }>`
  width: max-content;
  height: 20px;
  padding: 0px 4px 0px 4px;
  gap: 6px;
  border-radius: 6px 6px 6px 2px;
  opacity: 0px;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background-color: ${(props) => colorMapping[props.title]};
  position: absolute;
  top: -5px;
  right: -25px;
`;

const SkeletonUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 16px;
  padding-bottom: 60px;
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

const SkeletoMail = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
`;
