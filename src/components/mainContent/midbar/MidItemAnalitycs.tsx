import { ComponentProps } from "react";
import styled from "styled-components";
import Image from "next/image";

const MidItemCard = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <SkeletonCardItemWrapper key={item.id}>
          <SkeletonMidNumberTitleWrapper>
            <SkeletonMidNumber>{item.number}</SkeletonMidNumber>
            <SkeletonMidTitle> {item.title}</SkeletonMidTitle>
          </SkeletonMidNumberTitleWrapper>
          <SkeletonMidImage>
            <Image src={item.image} width={120} height={120} alt="Picture " />
          </SkeletonMidImage>
        </SkeletonCardItemWrapper>
      ))}
    </>
  );
};

export default MidItemCard;

const SkeletonMidWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;
  justify-content: center;
`;

const SkeletonCardItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: span 4;
  height: 152px;
  padding: 16px 16px 16px 24px;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const SkeletonMidNumberTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkeletonMidNumber = styled.div`
  width: max-content;
  height: 48px;
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonMidTitle = styled.div`
  width: 91px;
  height: 22px;
  font-family: Public Sans;
  color: #637381;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonMidImage = styled.div`
  width: 120px;
  height: 120px;
`;

type MidItemCardProps = ComponentProps<"div"> & {
  image: string;
  title: string;
  number: string;
};
