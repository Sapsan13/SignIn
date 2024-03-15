import Booked from "@/components/mainContent/main/Booked";
import TotalIncomes from "@/components/mainContent/main/TotalIncomesChart";
import styled from "styled-components";

const SkeletonTotalBooked = styled.div`
  display: flex;
  flex-direction: row;
`;

const E_Comerse = () => {
  return (
    <SkeletonTotalBooked>
      <TotalIncomes />
      <Booked />
    </SkeletonTotalBooked>
  );
};
export default E_Comerse;
