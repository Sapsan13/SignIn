"use client";

import styled from "styled-components";
import NewestBookingComponent from "@/components/mainContent/main/analytics/NewestBookingComponent";
import TopBar from "@/components/topBar/TopBar";
import MidItemCard from "@/components/midbar/MidItemAnalytics";
import { analyticsMidbarElements } from "@/components/midbar/mock/midbarElements";
import Navbar from "@/components/Navbaritems/Navbar";

export default function Analytics() {
  return (
    <RowItems>
      <Navbar />
      <Column>
        <TopBar />
        <ColumnItems>
          <MidItemCard items={analyticsMidbarElements} />
          <MidCards>
            <NewestBookingComponent />
          </MidCards>
        </ColumnItems>
      </Column>
    </RowItems>
  );
}

const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding: 0 40px 0 0;
  overflow: hidden;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
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
