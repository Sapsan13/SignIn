import styled from "styled-components";
import TopBar from "./TopBar";
import MidItemCard from "../mainContent/midbar/MidItemAnalitycs";

const TopMidElement = ({ items }) => {
  const SkeletonMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <SkeletonMainWrapper>
      <TopBar />
      {/* {items ? <MidItemCard items={items} /> : null} */}
      {items && <MidItemCard items={items} />}
    </SkeletonMainWrapper>
  );
};

export default TopMidElement;
