"use client";

import LeftNavbar from "@/components/leftNavbarItems/LeftNavbar";
import { analitycsMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import styled from "styled-components";
import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import TopBar from "@/components/topBar/TopBar";
import MidItemCard from "@/components/mainContent/midbar/MidItemAnalitycs";

export default function Analitycs() {
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <SkeletonColumnItems>
        <SkeletonMidCards>
          <TopBar />
        </SkeletonMidCards>
        <MidItemCard items={analitycsMidbarElements} />
        <SkeletonMidCards>
          <NewestBookingComponent />
        </SkeletonMidCards>
      </SkeletonColumnItems>
    </SkeletonRowItems>
  );
}

const SkeletonRowItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 0 20px 0 20px;
`;

const SkeletonColumnItems = styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  padding-left: 40px;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

const SkeletonMidCards = styled.div`
  width: 100%;
  grid-column: span 12;
  gap: 24px;
`;