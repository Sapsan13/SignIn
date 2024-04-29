import { useState } from "react";
import styled from "styled-components";

const SkeletonStandartExtendedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (min-width: 600px) {
    display: none;
  }
`;

const SkeletonStandartExtended = styled.div<{ $isIndex: boolean }>`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
  text-align: center;
  color: rgba(33, 43, 54, 1);
  width: fit-content;
  height: 48px;
  padding: 13px 0px 12px 0px;
  color: ${(props) =>
    props.$isIndex === true ? "rgba(33, 43, 54, 1)" : "rgba(99, 115, 129, 1)"};
  border-bottom: ${(props) =>
    props.$isIndex === true ? "2px solid rgba(33, 43, 54, 1)" : "none"};
`;

const StandartExtendedSwitch = ({ setStateIndex, stateIndex }) => {
  return (
    <SkeletonStandartExtendedWrapper>
      <SkeletonStandartExtended
        onClick={(event) => setStateIndex(+event.target.dataset.index)}
        data-index={0}
        $isIndex={stateIndex === 0}
      >
        Standart
      </SkeletonStandartExtended>
      <SkeletonStandartExtended
        onClick={(event) => setStateIndex(+event.target.dataset.index)}
        data-index={1}
        $isIndex={stateIndex === 1}
      >
        Standart Plus
      </SkeletonStandartExtended>
      <SkeletonStandartExtended
        onClick={(event) => setStateIndex(+event.target.dataset.index)}
        data-index={2}
        $isIndex={stateIndex === 2}
      >
        Extended
      </SkeletonStandartExtended>
    </SkeletonStandartExtendedWrapper>
  );
};
export default StandartExtendedSwitch;

// props destruct
// const StandartExtendedSwitch = ({setStateIndex}) =>
//   const StandartExtendedSwitch = (props) => {
//     cosnt setStateIndex = props.setStateIndex
