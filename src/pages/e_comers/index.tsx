import NewestBookingCard from "@/components/mainContent/main/analitycs/NewestBookingCard";
import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import CustomerReviews from "@/components/mainContent/main/booking/CustomerReviews";
import RadialChart from "@/components/mainContent/main/overview/RadialChart";
import styled from "styled-components";

// const SkeletonTotalBooked = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
// `;

const SkeletonCol = styled.div`
  display: flex;
  width: 712px;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const E_Comerse = () => {
  return (
    <SkeletonCol>
      <NewestBookingComponent />
    </SkeletonCol>
  );
};
export default E_Comerse;
