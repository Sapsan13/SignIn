import Image from "next/image";
import styled from "styled-components";
import { BookingDataArray as items } from "./BookingDataArray";

const AvatarImg = ({ icon }: any) => {
  return (
    <Image src={icon} width={40} height={40} alt="Picture of the author" />
  );
};

const SkeletonLandscapeImg = styled.div`
  display: flex;
  width: 236px;
  height: 236px;
  margin: 8px;
  border-radius: 12px;
  overflow: hidden;
`;

const LandscapeImg = ({ icon }: any) => {
  return (
    <SkeletonLandscapeImg>
      <Image src={icon} width={236} height={236} alt="Picture of the author" />
    </SkeletonLandscapeImg>
  );
};

const SkeletonSevenTwo = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 8px;
  padding: 2px 6px 2px 6px;
  gap: 6px;
  border-radius: 6px 0px 0px 0px;
`;

const SevenTwoHotImg = () => {
  return (
    <SkeletonSevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/72Hot.png"
        width={50}
        height={24}
        alt="Picture of the author"
      />
    </SkeletonSevenTwo>
  );
};

const SevenTwoImg = () => {
  return (
    <SkeletonSevenTwo>
      <Image
        src="/illustrations/NewestBookingCards/72.png"
        width={36}
        height={24}
        alt="Picture of the author"
      />
    </SkeletonSevenTwo>
  );
};

const CalendarImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/Calendar.png"
      width={16}
      height={16}
      alt="Picture of the author"
    />
  );
};

const PersonGuestImg = () => {
  return (
    <Image
      src="/illustrations/NewestBookingCards/PersonGuest.png"
      width={16}
      height={16}
      alt="Picture of the author"
    />
  );
};

const SkeletonRelative = styled.div`
  display: flex;
  position: relative;
`;

const SkeletonBookingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 252px;
  width: 100%;
  height: 358px;
  border-radius: 16px;
  background-color: #f4f6f8;
  justify-content: flex-start;
  align-items: center;
`;

const SkeletonFlexColWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 8px 0;
  gap: 16px;
`;

const SkeletonCardAvatar = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
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
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #919eab;
  text-align: left;
  display: flex;
  gap: 4px;
`;

const SkeletonGuestsPersons = styled.div`
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #919eab;
  text-align: left;
  display: flex;
  gap: 4px;
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
  gap: 16px;
`;

const SkeletonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkeletonFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  return items.map((item: any) => {
    var JSXTag = item.isHot ? SevenTwoHotImg : SevenTwoImg;
    return (
      <SkeletonBookingCardWrapper key={item.key}>
        <SkeletonFlexColWrap>
          <SkeletonFlexRowAvatarNameDate>
            <SkeletonCardAvatar>
              <AvatarImg icon={item.avatar}></AvatarImg>
            </SkeletonCardAvatar>
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
              <CalendarImg />
              {item.bookingDuration}
            </SkeletonBookingDuration>
            <SkeletonGuestsPersons>
              <PersonGuestImg />
              {item.guestsPersons}
            </SkeletonGuestsPersons>
          </SkeletonFlexRowDurationPersons>
        </SkeletonFlexColWrap>
        <SkeletonRelative>
          <LandscapeImg icon={item.photo} />
          {<JSXTag />}
        </SkeletonRelative>
      </SkeletonBookingCardWrapper>
    );
  });
};
export default NewestBookingCard;
