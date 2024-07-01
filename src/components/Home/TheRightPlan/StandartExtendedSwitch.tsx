import styled from "styled-components";

const StandartExtendedSwitch = ({ setStateIndex, stateIndex }: any) => {
  return (
    <StandartExtendedWrapper>
      {arrOfData.map((item, index) => {
        return (
          <StandartExtended
            onClick={() => setStateIndex(index)}
            key={index}
            $isIndex={stateIndex === index}
          >
            {item.title}
          </StandartExtended>
        );
      })}
    </StandartExtendedWrapper>
  );
};
export default StandartExtendedSwitch;
const StandartExtendedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (min-width: 600px) {
    display: none;
  }
`;

const StandartExtended = styled.div<{ $isIndex: boolean }>`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  color: rgba(33, 43, 54, 1);
  width: fit-content;
  height: 48px;
  padding: 13px 0px 12px 0px;
  color: ${(props) =>
    props.$isIndex === true ? "rgba(33, 43, 54, 1)" : "rgba(99, 115, 129, 1)"};
  border-bottom: ${(props) =>
    props.$isIndex === true ? "2px solid rgba(33, 43, 54, 1)" : "none"};
`;

const arrOfData = [
  {
    title: "Standart",
  },
  {
    title: "Standart Plus",
  },
  {
    title: "Extended",
  },
];
