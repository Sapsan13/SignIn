import Image from "next/image";
import styled from "styled-components";
const SkeletonRotate90 = styled.div`
  display: flex;
  cursor: pointer;
  background-color: rgba(99, 115, 129, 0.01);
  height: 16px;
  width: 16px;

  transform: rotate(90deg);
`;
const Arrow = () => {
  return (
    <SkeletonRotate90>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={16}
        height={16}
        alt="Picture arrowright"
      />
    </SkeletonRotate90>
  );
};

const SkeletonStatisticsHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 712px;
  height: 102px;
  padding: 24px;
  gap: 16px;
`;

const SkeletonStatistics = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const SkeletonStatisticsYear = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SkeletonYear = styled.div`
  display: flex;
  flex-direction: row;
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

const SkeletonCheckIn = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: rgba(99, 115, 129, 1);
`;

const SkeletonCanceledDots = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #ffac82;
  background-color: #ffac82;
`;
const SkeletonSoldDots = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #009764;
  background-color: #009764;
`;

const SkeletonCircleText = styled.div`
  font-family: Public Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;

const SkeletonRowGap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 8px;
`;

const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChartsHeader = () => {
  return (
    <SkeletonStatisticsHeaderWrap>
      <SkeletonStatisticsYear>
        <SkeletonStatistics>Statistics</SkeletonStatistics>
        <SkeletonYear>
          <div> Year</div>
          <div>
            <Arrow />
          </div>
        </SkeletonYear>
      </SkeletonStatisticsYear>
      <SkeletonCheckIn>
        (+43% Check In | +12% Check Out) than last year
      </SkeletonCheckIn>
      <SkeletonRowGap>
        <SkeletonSoldDots />
        <SkeletonCircleText>Sold</SkeletonCircleText>
        <SkeletonCanceledDots />
        <SkeletonCircleText>Canceled</SkeletonCircleText>
      </SkeletonRowGap>
    </SkeletonStatisticsHeaderWrap>
  );
};

export default ChartsHeader;
