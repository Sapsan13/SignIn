"use client";
import LeftNavbar from "@/components/Leftnavbaritems/LeftNavbar";
import ChartsHeader from "@/components/mainContent/main/booking/ChartHeader";
import BarchartStatistics from "@/components/mainContent/main/booking/BarchartStatistics";
import styled from "styled-components";
import TopBar from "@/components/topBar/TopBar";
import CustomerReviews from "@/components/mainContent/main/booking/CustomerReviews";

const Booking = () => {
  return (
    <RowItems>
      <LeftNavbar />
      <Column>
        <MidCards>
          <TopBar />
        </MidCards>
        <RowItemsTwelve>
          <RowItemsEight>
            <ChartsHeader />
            <BarchartStatistics />
          </RowItemsEight>
          <MidCardsFour>
            <CustomerReviews />
          </MidCardsFour>
        </RowItemsTwelve>
      </Column>
    </RowItems>
  );
};
export default Booking;

const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 40px;
  gap: 24px;
`;

const RowItemsTwelve = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  gap: 24px;
`;

const MidCards = styled.div`
  width: 100%;
  grid-column: span 12;
  gap: 24px;
`;

const RowItemsEight = styled.div`
  width: 100%;
  grid-column: span 8;
  max-height: 765px;
  gap: 24px;
  border-radius: 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

const MidCardsFour = styled.div`
  width: 100%;
  grid-column: span 4;
`;
