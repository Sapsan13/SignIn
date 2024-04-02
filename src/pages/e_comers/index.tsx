import NewestBookingCard from "@/components/mainContent/main/analitycs/NewestBookingCard";
import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import CustomerReviews from "@/components/mainContent/main/booking/CustomerReviews";
import RadialChart from "@/components/mainContent/main/overview/RadialChart";
import styled from "styled-components";
import BarchartStatistics from "../../../src/components/mainContent/main/booking/BarchartStatistics";

const SkeletonTotalBooked = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Skeleton = styled.div`
  display: flex;
  width: 712px;
  height: 336px;
`;

const Skeleton1 = styled.div``;

const E_Comerse = () => {
  return (
    <>
      <Skeleton>
        <BarchartStatistics />
      </Skeleton>
    </>
  );
};
export default E_Comerse;
