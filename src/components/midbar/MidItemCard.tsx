import { ComponentProps } from "react";
import styled from "styled-components";
import Image from "next/image";

const MidItemCard = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <CardItemWrapper key={item.id}>
          <MidNumberTitleWrapper>
            <MidNumber>{item.number}</MidNumber>
            <MidTitle> {item.title}</MidTitle>
          </MidNumberTitleWrapper>
          <MidImage>
            <Image src={item.image} width={120} height={120} alt="Picture " />
          </MidImage>
        </CardItemWrapper>
      ))}
    </>
  );
};

export default MidItemCard;

const MidWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
`;

const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 16px 0 24px;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const MidNumberTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MidNumber = styled.div`
  width: max-content;
  height: 48px;
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

const MidTitle = styled.div`
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

const MidImage = styled.div`
  width: 120px;
  height: 120px;
`;

type MidItemCardProps = ComponentProps<"div"> & {
  image: string;
  title: string;
  number: string;
};
