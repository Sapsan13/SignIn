import styled from "styled-components";
import RadialChart from "./RadialChart";
const SkeletonToursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const SkeletonRadialText = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const SkeletonInnerText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
`;

const SkeletonSPending = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 40px;
  opacity: 0px;
`;

const SkeletonPendingPayment = styled.div`
  width: 136px;
  height: 33%;
  gap: 4px;
  opacity: 0px;
`;

const SkeletonPendingText = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

const SkeletonPendingNumber = styled.div`
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const SkeletonSoldPending = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 16px;
  border: 20px solid;
`;

const SoldPending = (props: any) => {
  return (
    <SkeletonToursWrapper>
      <SkeletonSPending>
        <SkeletonRadialText>
          <RadialChart
            width={80}
            hight={80}
            color1={props.color1}
            color2={props.color2}
            gradient={props.gradient}
          />
          <SkeletonInnerText>{props.innerNumber}</SkeletonInnerText>
        </SkeletonRadialText>
        <SkeletonPendingPayment>
          <SkeletonPendingNumber>{props.number}</SkeletonPendingNumber>
          <SkeletonPendingText>{props.text}</SkeletonPendingText>
        </SkeletonPendingPayment>
      </SkeletonSPending>
    </SkeletonToursWrapper>
  );
};
export default SoldPending;
