import { SevenTwoHotImg, LandscapeImg, AvatarImg } from "@/components/Images";
import styled from "styled-components";
import { BookingDataArray as items } from "./mock/BookingDataArray";
import { CalendarImg } from "../../../../../public/illustrations/NewestBookingCards/CalendarImg";
import { PersonGuestImg } from "../../../../../public/illustrations/NewestBookingCards/PersonGuestImg";
import { SevenTwoImg } from "../../../../../public/illustrations/NewestBookingCards/SevenTwoImg";

const NewestBookingCard = ({}: BookingCard) => {
  return items.map((item: any) => {
    var JSXTag = item.isHot ? <SevenTwoHotImg /> : <SevenTwoImg />;
    return (
      <BookingCardWrapper key={item.id}>
        <FlexColWrap>
          <FlexRowAvatarNameDate>
            <CardAvatar>
              <AvatarImg icon={item.avatar}></AvatarImg>
            </CardAvatar>
            <FlexColFirstLast>
              <FlexRow>
                <FirstLastName>{item.firstName}</FirstLastName>
                <FirstLastName>{item.lastName}</FirstLastName>
              </FlexRow>
              <DateTime>{item.date}</DateTime>
            </FlexColFirstLast>
          </FlexRowAvatarNameDate>
          <FlexRowDurationPersons>
            <BookingDuration>
              <CalendarImg />
              {item.bookingDuration}
            </BookingDuration>
            <GuestsPersons>
              <PersonGuestImg />
              {item.guestsPersons}
            </GuestsPersons>
          </FlexRowDurationPersons>
        </FlexColWrap>
        <Relative>
          <LandscapeImg icon={item.photo} />
          <Absolute>{JSXTag}</Absolute>
        </Relative>
      </BookingCardWrapper>
    );
  });
};
export default NewestBookingCard;

const Relative = styled.div`
  display: flex;
  position: relative;
`;

const Absolute = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 8px;
  padding: 2px 6px 2px 6px;
  gap: 6px;
  border-radius: 6px 0px 0px 0px;
`;

const BookingCardWrapper = styled.div`
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

const FlexColWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 8px 0;
  gap: 16px;
`;

const CardAvatar = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const FirstLastName = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const DateTime = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #919eab;
`;

const BookingDuration = styled.div`
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #919eab;
  text-align: left;
  display: flex;
  gap: 4px;
`;

const GuestsPersons = styled.div`
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #919eab;
  text-align: left;
  display: flex;
  gap: 4px;
`;

const FlexColFirstLast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FlexRowAvatarNameDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const FlexRowDurationPersons = styled.div`
  display: flex;
  gap: 16px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
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
