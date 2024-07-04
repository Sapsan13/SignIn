"use client";

import LeftNavbar from "@/components/Leftnavbaritems/LeftNavbar";

import styled from "styled-components";
import NewestBookingComponent from "@/components/mainContent/main/analytics/NewestBookingComponent";
import TopBar from "@/components/topBar/TopBar";
import MidItemCard from "@/components/midbar/MidItemAnalytics";
import { analyticsMidbarElements } from "@/components/midbar/mock/midbarElements";

export default function Analytics() {
  return (
    <RowItems>
      <LeftNavbar />
      <ColumnItems>
        <MidCardsTop>
          <TopBar />
        </MidCardsTop>
        <MidItemCard items={analyticsMidbarElements} />
        <MidCards>
          <NewestBookingComponent />
        </MidCards>
      </ColumnItems>
    </RowItems>
  );
}

const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding: 0 40px 0 0;
  overflow: hidden;
  @media (min-width: 1280px) {
    overflow: scroll;
  }
`;

const ColumnItems = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

const MidCards = styled.div`
  grid-column: span 12;
`;

const MidCardsTop = styled.div`
  grid-column: span 12;
  max-height: 30px;
`;
