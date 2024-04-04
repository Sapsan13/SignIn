import LeftNavbar from "@/overview/LeftNavbar";
// import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import ChartsHeader from "@/components/mainContent/main/booking/ChartHeader";
import BarchartStatistics from "@/components/mainContent/main/booking/BarchartStatistics";
import TopMidElement from "@/components/topBar/TopMidElement";
import styled from "styled-components";
import TopBar from "@/components/topBar/TopBar";
const Booking = () => {
  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <div>
        <TopBar />
        <ChartsHeader />
        <BarchartStatistics />
      </div>
    </SkeletonRowItems>
  );
};
export default Booking;
