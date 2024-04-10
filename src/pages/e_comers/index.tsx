import RadialChart from "@/components/mainContent/main/overview/RadialChart";
import styled from "styled-components";

const SkeletonToursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
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
  width: 356px;
  height: 160px;
  padding: 40px 0px 0px 0px;
  gap: 40px;
  opacity: 0px;
`;

const SkeletonPendingPayment = styled.div`
  width: 136px;
  height: 62px;
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
  width: 712px;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 20px solid;
`;

const E_Comerse = () => {
  return (
    <SkeletonToursWrapper>
      <SkeletonSPending>
        <SkeletonRadialText>
          <RadialChart
            width={80}
            height={80}
            color1={"#5BE49B"}
            color2={"#00A76F"}
          />
          <SkeletonInnerText>49%</SkeletonInnerText>
        </SkeletonRadialText>
        <SkeletonPendingPayment>
          <SkeletonPendingNumber>10,989</SkeletonPendingNumber>
          <SkeletonPendingText>Pending for payment</SkeletonPendingText>
        </SkeletonPendingPayment>
      </SkeletonSPending>
    </SkeletonToursWrapper>
  );
};
export default E_Comerse;
