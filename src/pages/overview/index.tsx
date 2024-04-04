// import Booked from "@/components/mainContent/main/Booked";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import TopMidElement from "@/components/topBar/TopMidElement";
import LeftNavbar from "@/overview/LeftNavbar";
import styled from "styled-components";

const Overview = () => {
  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <TopMidElement items={overviewMidbarElements} />
    </SkeletonRowItems>
  );
};
export default Overview;
