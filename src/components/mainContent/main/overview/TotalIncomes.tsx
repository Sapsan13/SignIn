import styled from "styled-components";
import TotalIncomesChart from "./TotalIncomesChart";
import { Ascend } from "@/components/Images";

const TotalIncomes = () => {
  return (
    <TotalIncomesWrapper>
      <Total>
        <FlexCol>
          <TotalIncome>TotalIncomes </TotalIncome>
          <NumberNine>9,900</NumberNine>
        </FlexCol>
        <ThanLastWeek>
          <FlexCol>
            <Ascend82>
              <Ascend /> <NumberEight>+8,2%</NumberEight>
            </Ascend82>
            <ThanLastWeekText>than last week</ThanLastWeekText>
          </FlexCol>
        </ThanLastWeek>
      </Total>
      <TotalIncomesChart />
    </TotalIncomesWrapper>
  );
};

export default TotalIncomes;

const TotalIncomesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5f4e7;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 24px;
  border-radius: 16px;
`;

const TotalIncome = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 78px;
  gap: 8px;
`;

const NumberNine = styled.div`
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

const ThanLastWeek = styled.div`
  width: 99px;
  height: 48px;
  gap: 4px;
`;

const ThanLastWeekText = styled.div`
  font-family: Public Sans;
  white-space: nowrap;
  opacity: 80%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const NumberEight = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const Ascend82 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
