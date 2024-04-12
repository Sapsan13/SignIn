import LeftNavbar from "@/overview/LeftNavbar";
// import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import ChartsHeader from "@/components/mainContent/main/booking/ChartHeader";
import BarchartStatistics from "@/components/mainContent/main/booking/BarchartStatistics";
import styled from "styled-components";
import TopBar from "@/components/topBar/TopBar";
import CustomerReviews from "@/components/mainContent/main/booking/CustomerReviews";
const Booking = () => {
  const SkeletonRowItems = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 0 40px 0 40px;
    gap: 24px;
  `;

  const SkeletonColumn = styled.div`
    display: flex;
    flex: 1;
    height: 75%;
    flex-direction: column;
    padding: 0 40px 0 40px;
    gap: 24px;
  `;

  const SkeletonRowItemsTwelve = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-template-rows: repeat(12, 1fr); */
    column-gap: 24px;
    row-gap: 24px;
  `;

  const SkeletonMidCards = styled.div`
    width: 100%;
    grid-column: span 12;
    gap: 24px;
  `;

  const SkeletonRowItemsEight = styled.div`
    width: 100%;
    grid-column: span 8;
    gap: 24px;
    border-radius: 16px;
    box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
  `;

  const SkeletonMidCardsFour = styled.div`
    width: 100%;
    grid-column: span 4;
    gap: 24px;
  `;

  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <SkeletonColumn>
        <SkeletonMidCards>
          <TopBar />
        </SkeletonMidCards>
        <SkeletonRowItemsTwelve>
          <SkeletonRowItemsEight>
            <ChartsHeader />
            <BarchartStatistics />
          </SkeletonRowItemsEight>
          <SkeletonMidCardsFour>
            <CustomerReviews />
          </SkeletonMidCardsFour>
        </SkeletonRowItemsTwelve>
      </SkeletonColumn>
    </SkeletonRowItems>
  );
};
export default Booking;
