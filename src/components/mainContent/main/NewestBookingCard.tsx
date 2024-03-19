import Image from "next/image";
import styled from "styled-components";
import { BookingDataArray as items } from "./BookingDataArray";

const AvatarImg = ({ icon }: any) => {
  return (
    <Image src={icon} width={40} height={40} alt="Picture of the author" />
  );
};

const SkeletonBookingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
  height: 358px;
  border-radius: 16px;
`;

const SkeletonAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

const SkeletonFirstLastName = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const SkeletonDateTime = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #919eab;
`;

const SkeletonDate = styled.div`
  display: flex;
`;

const SkeletonBookingDuration = styled.div`
  display: flex;
`;

const SkeletonGuestsPersons = styled.div`
  display: flex;
`;

const SkeletonBookingCosts = styled.div`
  display: flex;
`;

const SkeletonPhoto = styled.div`
  display: flex;
`;

const SkeletonFlexColFirstLast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SkeletonFlexRowAvatarNameDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SkeletonFlexRowDurationPersons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SkeletonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkeletonFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

interface BookingCard {
  firstName: string;
  lastName: string;
  date: string;
  avatar?: React.ReactElement;
  bookingDuration: string;
  guestsPersons: string;
  isHot: boolean;
  bookingCosts: number;
  photo: React.ReactElement;
}

const NewestBookingCard = ({}: BookingCard) => {
  return items.map((item: any) => (
    <SkeletonBookingCardWrapper key={item.key}>
      <SkeletonFlexCol>
        <SkeletonFlexRowAvatarNameDate>
          <SkeletonAvatar>
            <AvatarImg icon={item.avatar}></AvatarImg>
          </SkeletonAvatar>
          <SkeletonFlexColFirstLast>
            <SkeletonFlexRow>
              <SkeletonFirstLastName>{item.firstName}</SkeletonFirstLastName>
              <SkeletonFirstLastName>{item.lastName}</SkeletonFirstLastName>
            </SkeletonFlexRow>
            <SkeletonDateTime>{item.date}</SkeletonDateTime>
          </SkeletonFlexColFirstLast>
        </SkeletonFlexRowAvatarNameDate>
        <SkeletonFlexRowDurationPersons>
          <SkeletonBookingDuration>
            {item.bookingDuration}
          </SkeletonBookingDuration>
          <SkeletonGuestsPersons>{item.guestsPersons}</SkeletonGuestsPersons>
        </SkeletonFlexRowDurationPersons>
      </SkeletonFlexCol>
    </SkeletonBookingCardWrapper>
  ));
};
export default NewestBookingCard;
