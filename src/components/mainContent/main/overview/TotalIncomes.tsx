import styled from "styled-components";
import TotalIncomesChart from "./TotalIncomesChart";
import { Ascend } from "@/components/Images";

const TotalIncomes = () => {
  return (
    <SkeletonTotalIncomesWrapper>
      <SkeletonTotal9900>
        <SkeletonFlexCol>
          <SkeletonTotalIncomes>TotalIncomes </SkeletonTotalIncomes>
          <Skeleton9900>9,900</Skeleton9900>
        </SkeletonFlexCol>
        <SkeletonThanLastWeek>
          <SkeletonFlexCol>
            <SkeletonAscend82>
              <Ascend /> <Skeleton82>+8,2%</Skeleton82>
            </SkeletonAscend82>
            <SkeletonThanLastWeekText>than last week</SkeletonThanLastWeekText>
          </SkeletonFlexCol>
        </SkeletonThanLastWeek>
      </SkeletonTotal9900>
      <TotalIncomesChart />
    </SkeletonTotalIncomesWrapper>
  );
};
export default TotalIncomes;

const SkeletonTotalIncomesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5f4e7;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 16px;
`;

const SkeletonTotalIncomes = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonTotal9900 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 78px;
  gap: 8px;
`;

const Skeleton9900 = styled.div`
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonThanLastWeek = styled.div`
  width: 99px;
  height: 48px;
  gap: 4px;
`;

const SkeletonThanLastWeekText = styled.div`
  font-family: Public Sans;
  white-space: nowrap;
  opacity: 80%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const Skeleton82 = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonAscend82 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const SkeletonFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
