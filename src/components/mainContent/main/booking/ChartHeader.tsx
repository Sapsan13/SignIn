import styled from "styled-components";
import { Arrowright } from "../../../../../public/illustrations/Leftbar/Usercard/Arrowright";

const ChartsHeader = () => {
  return (
    <StatisticsHeaderWrap>
      <StatisticsYear>
        <Statistics>Statistics</Statistics>
        <Year>
          <div> Year</div>
          <Arrowright height={24} width={24} />
        </Year>
      </StatisticsYear>
      <CheckIn>(+43% Check In | +12% Check Out) than last year</CheckIn>
      <RowGap>
        <SoldDots />
        <CircleText>Sold</CircleText>
        <CanceledDots />
        <CircleText>Canceled</CircleText>
      </RowGap>
    </StatisticsHeaderWrap>
  );
};

export default ChartsHeader;

const StatisticsHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 24px 0 20px;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const StatisticsYear = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Year = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  width: 62px;
  height: 28px;
  top: 24px;
  left: 626px;
  padding: 3px 4px 3px 8px;
  gap: 4px;
  border-radius: 6px;
  overflow: hidden;
  background-color: rgba(99, 115, 129, 0.1);
`;

const CheckIn = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 4px 0 24px 0;
  text-align: left;
  color: rgba(99, 115, 129, 1);
`;

const CanceledDots = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #ffac82;
  background-color: #ffac82;
`;
const SoldDots = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #009764;
  background-color: #009764;
`;

const CircleText = styled.div`
  font-family: Public Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;

const RowGap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding-bottom: 10px;
  gap: 8px;
`;
