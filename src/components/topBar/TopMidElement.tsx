import styled from "styled-components";
import TopBar from "./TopBar";
import MidItemCard from "../mainContent/midbar/MidItemAnalitycs";

const TopMidElement = ({ items }) => {
  const SkeletonMainWrapper = styled.div`
    display: grid;
    flex-direction: column;
    gap: 24px;
  `;

  return <>{items && <MidItemCard items={items} />}</>;
};

export default TopMidElement;
