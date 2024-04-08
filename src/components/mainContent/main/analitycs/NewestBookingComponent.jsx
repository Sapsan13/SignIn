import Image from "next/image";
import styled from "styled-components";
import NewestBookingCard from "./NewestBookingCard";

const NewestBookingComponent = () => {
  const SkeletonBookingbarWrapper = styled.div`
    display: flex;
    width: 1, 008px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
  `;

  const SkeletonNewestBookingBar = styled.div`
    width: 100%;
    height: 54px;
    gap: 4px;
  `;
  const SkeletonBookingsAvailable = styled.div`
    font-family: Public Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: rgba(99, 115, 129, 1);
  `;
  const SkeletonNewestBookingText = styled.div`
    display: flex;
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: left;
  `;

  const SkeletonArrowRight = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    border-radius: 50px 0px 0px 0px;
    opacity: 0.48px;
    padding-right: 8px;
    align-items: center;
    justify-content: center;
  `;

  const SkeletonArrowleft = styled.div`
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
  const Errow = () => {
    return (
      <SkeletonArrowRight>
        <Image
          src={"/illustrations/leftBar/ArrowRight.png"}
          width={20}
          height={20}
          alt="Picture of the author"
        />
      </SkeletonArrowRight>
    );
  };

  const SkeletonNavArrows = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 36px;
    gap: 4px;
    opacity: 0px;
  `;

  const SkeletonBookingCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
  `;
  return (
    <div>
      <SkeletonBookingbarWrapper>
        <SkeletonNewestBookingBar>
          <SkeletonNewestBookingText>Newest Booking</SkeletonNewestBookingText>
          <SkeletonBookingsAvailable>12 Bookings</SkeletonBookingsAvailable>
        </SkeletonNewestBookingBar>
        <SkeletonNavArrows>
          <SkeletonArrowleft>
            <Errow />
          </SkeletonArrowleft>
          <Errow />
        </SkeletonNavArrows>
      </SkeletonBookingbarWrapper>
      <SkeletonBookingCardsWrapper>
        <NewestBookingCard />
      </SkeletonBookingCardsWrapper>
    </div>
  );
};

export default NewestBookingComponent;
