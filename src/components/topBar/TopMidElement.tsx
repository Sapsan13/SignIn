import styled from "styled-components";
import TopBar from "./TopBar";
import MidItemCard from "../mainContent/midbar/MidItemAnalitycs";

const TopMidElement = ({ items }) => {
  const SkeletonMainWrapper = styled.div`
    display: grid;
    flex-direction: column;
    gap: 24px;
  `;

  return (
    <SkeletonMainWrapper>
      <TopBar />
      {items && <MidItemCard items={items} />}
    </SkeletonMainWrapper>
  );
};

export default TopMidElement;
