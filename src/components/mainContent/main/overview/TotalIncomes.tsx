import styled from "styled-components";
import TotalIncomesChart from "./TotalIncomesChart";
import { Ascend } from "@/components/Images";

const TotalIncomes = () => {
  return (
    <TotalIncomesWrapper>
      <Total9900>
        <FlexCol>
          <TotalIncome>TotalIncomes </TotalIncome>
          <N9900>9,900</N9900>
        </FlexCol>
        <ThanLastWeek>
          <FlexCol>
            <Ascend82>
              <Ascend /> <N82>+8,2%</N82>
            </Ascend82>
            <ThanLastWeekText>than last week</ThanLastWeekText>
          </FlexCol>
        </ThanLastWeek>
      </Total9900>
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

const Total9900 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 78px;
  gap: 8px;
`;

const N9900 = styled.div`
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

const N82 = styled.div`
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
