// import Booked from "@/components/mainContent/main/Booked";
import Booked from "@/components/mainContent/main/overview/Booked";
import TotalIncomes from "@/components/mainContent/main/overview/TotalIncomes";
import ToursAvailable from "@/components/mainContent/main/overview/ToursAvailable";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import TopMidElement from "@/components/topBar/TopMidElement";
import LeftNavbar from "@/overview/LeftNavbar";
import styled from "styled-components";

const Overview = () => {
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
      <SkeletonColumnItems>
        <TopMidElement items={overviewMidbarElements} />
        <SkeletonRowItems>
          <TotalIncomes />
          <Booked />
          <ToursAvailable />
        </SkeletonRowItems>
      </SkeletonColumnItems>
    </SkeletonRowItems>
  );
};
export default Overview;
