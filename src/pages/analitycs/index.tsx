import LeftNavbar from "@/overview/LeftNavbar";
import TopMidElement from "@/components/topBar/TopMidElement";
import { analitycsMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import styled from "styled-components";
const Analitycs = () => {
  const SkeletonRowItems = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <SkeletonRowItems>
      <LeftNavbar />
      <TopMidElement items={analitycsMidbarElements} />
    </SkeletonRowItems>
  );
};
export default Analitycs;
