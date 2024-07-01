import { Arrow20 } from "@/components/Images";
import styled from "styled-components";
import NewestBookingCard from "./NewestBookingCard";

const NewestBookingComponent = () => {
  return (
    <div>
      <BookingbarWrapper>
        <NewestBookingBar>
          <NewestBookingText>Newest Booking</NewestBookingText>
          <BookingsAvailable>12 Bookings</BookingsAvailable>
        </NewestBookingBar>
        <NavArrows>
          <Arrowleft>
            <Arrow20 />
          </Arrowleft>
          <Arrow20 />
        </NavArrows>
      </BookingbarWrapper>
      <BookingCardsWrapper>
        <NewestBookingCard />
      </BookingCardsWrapper>
    </div>
  );
};

export default NewestBookingComponent;

const BookingbarWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
`;

const NewestBookingBar = styled.div`
  width: 100%;
  height: 54px;
  gap: 4px;
`;
const BookingsAvailable = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: rgba(99, 115, 129, 1);
`;
const NewestBookingText = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const Arrowleft = styled.div`
  display: flex;
  transform: scaleX(-1);
  width: 36px;
  height: 36px;
  border-radius: 50px 0px 0px 0px;
  opacity: 0.48px;
  padding-right: 8px;
  align-items: center;
  justify-content: center;
`;

const NavArrows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  gap: 4px;
  opacity: 0px;
`;

const BookingCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;
