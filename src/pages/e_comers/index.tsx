import Booked from "@/components/mainContent/main/Booked";
import NewestBookingCard from "@/components/mainContent/main/NewestBookingCard";
import NewestBookingComponent from "@/components/mainContent/main/NewestBookingComponent";
import RadialChart from "@/components/mainContent/main/RadialChart";
import TotalIncomes from "@/components/mainContent/main/TotalIncomes";
import styled from "styled-components";

const SkeletonTotalBooked = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const E_Comerse = () => {
  return (
    <>
      <NewestBookingComponent />
    </>
  );
};
export default E_Comerse;
