"use client";

import LeftNavbar from "@/components/Leftnavbaritems/LeftNavbar";

import styled from "styled-components";
import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import TopBar from "@/components/topBar/TopBar";
import MidItemCard from "@/components/midbar/MidItemAnalitycs";
import { analitycsMidbarElements } from "@/components/midbar/mock/midbarElements";

export default function Analitycs() {
  return (
    <RowItems>
      <LeftNavbar />
      <ColumnItems>
        <MidCards>
          <TopBar />
        </MidCards>
        <MidItemCard items={analitycsMidbarElements} />
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
  padding: 0 10px 0 10px;
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
