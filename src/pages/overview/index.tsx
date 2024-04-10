// import Booked from "@/components/mainContent/main/Booked";
import Booked from "@/components/mainContent/main/overview/Booked";
import SoldPending from "@/components/mainContent/main/overview/SoldPending";
import TotalIncomes from "@/components/mainContent/main/overview/TotalIncomes";
import ToursAvailable from "@/components/mainContent/main/overview/ToursAvailable";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import TopMidElement from "@/components/topBar/TopMidElement";
import LeftNavbar from "@/overview/LeftNavbar";
import styled from "styled-components";

const Overview = () => {
  const SkeletonWrapper = styled.div`
    display: grid;
    padding-left: 40px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 24px;
  `;

  const SkeletonThreeFr = styled.div`
    grid-column: 1 / 12;
    grid-row: 1;
  `;

  const SkeletonTotalIncomes = styled.div`
    grid-column: 1 / 4;
    grid-row: 2;
  `;

  const SkeletonBooked = styled.div`
    grid-column: 4 / 8;
    grid-row: 2;
  `;

  const SkeletonSoldPending = styled.div`
    grid-column: 1 / 8;
    grid-row: 3;
  `;

  const SkeletonIncome = styled.div`
    grid-column: 8/ 12;
    grid-row: 2 / span 2;
  `;

  const SkeletonPending = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
  `;

  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const SkeletonColumnItems = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
  `;
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <SkeletonWrapper>
        <SkeletonThreeFr>
          <TopMidElement items={overviewMidbarElements} />
        </SkeletonThreeFr>
        <SkeletonTotalIncomes>
          <TotalIncomes />
        </SkeletonTotalIncomes>
        <SkeletonBooked>
          <Booked />
        </SkeletonBooked>
        <SkeletonSoldPending>
          <SkeletonPending>
            <SoldPending
              color1={"#5BE49B"}
              color2={"#00A76F"}
              innerNumber={"73.9%"}
              number={"9,990"}
              text={"Sold"}
              gradient={"sold"}
            />
            <SoldPending
              color1={"#FFD666 "}
              color2={"#FFAB00"}
              innerNumber={"45.6%"}
              number={"10,989"}
              text={"Pending for payment"}
              gradient={"pending"}
            />
          </SkeletonPending>
        </SkeletonSoldPending>
        <SkeletonIncome>
          <ToursAvailable />
        </SkeletonIncome>
      </SkeletonWrapper>
    </SkeletonRowItems>
  );
};
export default Overview;
