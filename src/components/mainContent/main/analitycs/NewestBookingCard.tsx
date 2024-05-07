import {
  PersonGuestImg,
  CalendarImg,
  SevenTwoImg,
  SevenTwoHotImg,
  LandscapeImg,
  AvatarImg,
} from "@/components/Images";
import styled from "styled-components";
import { BookingDataArray as items } from "./BookingDataArray";

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
