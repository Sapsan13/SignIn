// import Booked from "@/components/mainContent/main/Booked";
"use client";
import Booked from "@/components/mainContent/main/overview/Booked";
import SoldPending from "@/components/mainContent/main/overview/SoldPending";
import TotalIncomes from "@/components/mainContent/main/overview/TotalIncomes";
import ToursAvailable from "@/components/mainContent/main/overview/ToursAvailable";
import MidItemCard from "@/components/mainContent/midbar/MidItemAnalitycs";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import TopBar from "@/components/topBar/TopBar";
import LeftNavbar from "@/components/leftNavbarItems/LeftNavbar";
import styled from "styled-components";

const SkeletonRowItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px 0 20px;
  flex: 1;
  padding-bottom: 24px;
`;

const SkeletonWrapper = styled.div`
  display: grid;
  padding-left: 60px;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

const SkeletonMidEl = styled.div`
  grid-column: 9 / span 4;
  grid-row: span 2;
  height: 100%;
`;

const SkeletonTotalIncomes = styled.div`
  grid-column: span 4;
  height: 100%;
`;

const SkeletonBooked = styled.div`
  grid-column: span 4;
  height: 100%;
`;

const SkeletonSoldPending = styled.div`
  grid-column: span 8;
  height: 100%;
`;

const SkeletonIncome = styled.div`
  grid-column: span 4;
`;

const SkeletonPending = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
`;

const SkeletonColumnItems = styled.div`
  width: 100%;
  display: grid;
`;

const Overview = () => {
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <SkeletonColumnItems>
        <TopBar />
        <SkeletonWrapper>
          <MidItemCard items={overviewMidbarElements} />
          <SkeletonTotalIncomes>
            <TotalIncomes />
          </SkeletonTotalIncomes>
          <SkeletonBooked>
            <Booked />
          </SkeletonBooked>
          <SkeletonMidEl>
            <ToursAvailable />
          </SkeletonMidEl>
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
        </SkeletonWrapper>
      </SkeletonColumnItems>
    </SkeletonRowItems>
  );
};
export default Overview;