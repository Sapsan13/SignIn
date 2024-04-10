import LeftNavbar from "@/overview/LeftNavbar";
import TopMidElement from "@/components/topBar/TopMidElement";
import { analitycsMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import styled from "styled-components";
import NewestBookingComponent from "@/components/mainContent/main/analitycs/NewestBookingComponent";
import ToursAvailable from "@/components/mainContent/main/overview/ToursAvailable";
const Analitycs = () => {
  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
  `;
  const SkeletonColumnItems = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 280px;
    padding: 20px 40px 0px 40px;
    gap: 24px;
  `;
  return (
    <>
      <SkeletonRowItems>
        <LeftNavbar />
        <SkeletonColumnItems>
          <TopMidElement items={analitycsMidbarElements} />
          <SkeletonRowItems>
            <NewestBookingComponent />
          </SkeletonRowItems>
        </SkeletonColumnItems>
      </SkeletonRowItems>
    </>
  );
};
export default Analitycs;
