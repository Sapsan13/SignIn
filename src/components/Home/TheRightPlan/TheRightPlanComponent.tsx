import Image from "next/image";
import styled from "styled-components";
import RightPlanHeader from "./RightPlanHeader";
import RightPlanFooter from "./RightPlanFooter";
import RightPlanMain, { RightPlanMainProps } from "./RightPlanMainContent";
import { RightPlanData, RightPlanDataArray } from "./RightPlanDataArray";
import StandartExtendedSwitch from "./StandartExtendedSwitch";
import { useState } from "react";

export interface TheRightPlanProps {
  items: RightPlanData[];
}

const RightPlanWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  scroll-snap-align: center;
  background: rgba(145, 158, 171, 0.04);
`;

const TheRightPlanComponent = ({ items }: TheRightPlanProps) => {
  const [stateIndex, setStateIndex] = useState(0);
  return (
    <RightPlanWrapper>
      <RightPlanHeader />
      <StandartExtendedSwitch
        setStateIndex={setStateIndex}
        stateIndex={stateIndex}
      />
      <RightPlanMain items={RightPlanDataArray} stateIndex={stateIndex} />
      <RightPlanFooter />
    </RightPlanWrapper>
  );
};
export default TheRightPlanComponent;
