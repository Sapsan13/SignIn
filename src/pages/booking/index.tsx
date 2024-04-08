import LeftNavbar from "@/overview/LeftNavbar";
// import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import ChartsHeader from "@/components/mainContent/main/booking/ChartHeader";
import BarchartStatistics from "@/components/mainContent/main/booking/BarchartStatistics";
import TopMidElement from "@/components/topBar/TopMidElement";
import styled from "styled-components";
import TopBar from "@/components/topBar/TopBar";
import CustomerReviews from "@/components/mainContent/main/booking/CustomerReviews";
const Booking = () => {
  const SkeletonBoxShadow = styled.div`
    display: flex;
    flex-direction: column;
    width: 712px;
    height: 460px;
    border-radius: 16px;
    box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
  `;

  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 40px 0 40px;
    gap: 24px;
  `;

  const SkeletonColumn = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
  `;

  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <SkeletonColumn>
        <TopBar />
        <SkeletonRowItems>
          <SkeletonBoxShadow>
            <ChartsHeader />
            <BarchartStatistics />
          </SkeletonBoxShadow>
          <CustomerReviews />
        </SkeletonRowItems>
      </SkeletonColumn>
    </SkeletonRowItems>
  );
};
export default Booking;
