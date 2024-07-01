"use client";
import Booked from "@/components/mainContent/main/overview/Booked";
import SoldPending from "@/components/mainContent/main/overview/SoldPending";
import TotalIncomes from "@/components/mainContent/main/overview/TotalIncomes";
import ToursAvailable from "@/components/mainContent/main/overview/ToursAvailable";
import TopBar from "@/components/topBar/TopBar";
import LeftNavbar from "@/components/Leftnavbaritems/LeftNavbar";
import styled from "styled-components";
import { overviewMidbarElements } from "@/components/midbar/mock/midbarElements";
import MidItemCard from "@/components/midbar/MidItemAnalitycs";

const Overview = () => {
  return (
    <RowItems>
      <LeftNavbar />
      <ColumnItems>
        <TopBar />
        <Wrapper>
          <MidItemCard items={overviewMidbarElements} />
          <TotalIncome>
            <TotalIncomes />
          </TotalIncome>
          <Book>
            <Booked />
          </Book>
          <MidEl>
            <ToursAvailable />
          </MidEl>
          <SoldPend>
            <Pending>
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
            </Pending>
          </SoldPend>
        </Wrapper>
      </ColumnItems>
    </RowItems>
  );
};
export default Overview;

const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10px 0 10px;
  flex: 1;
`;

const Wrapper = styled.div`
  display: grid;
  padding-left: 60px;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;

const MidEl = styled.div`
  grid-column: 9 / span 4;
  grid-row: span 8;
  height: 100%;
`;

const TotalIncome = styled.div`
  grid-column: span 4;
  height: 100%;
`;

const Book = styled.div`
  grid-column: span 4;
  height: 100%;
`;

const SoldPend = styled.div`
  grid-column: span 8;
`;

const Income = styled.div`
  grid-column: span 4;
`;

const Pending = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  border-radius: 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const ColumnItems = styled.div`
  width: 100%;
`;
