import styled from "styled-components";
import RadialChart from "./RadialChart";

const SoldPending = (props: any) => {
  return (
    <ToursWrapper>
      <SPending>
        <RadialText>
          <RadialChart
            width={80}
            height={80}
            color1={props.color1}
            color2={props.color2}
            gradient={props.gradient}
          />
          <InnerText>{props.innerNumber}</InnerText>
        </RadialText>
        <PendingPayment>
          <PendingNumber>{props.number}</PendingNumber>
          <PendingText>{props.text}</PendingText>
        </PendingPayment>
      </SPending>
    </ToursWrapper>
  );
};
export default SoldPending;

const ToursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const RadialText = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
`;

const SPending = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 40px;
  opacity: 0px;
`;

const PendingPayment = styled.div`
  width: 136px;
  height: 33%;
  gap: 4px;
  opacity: 0px;
`;

const PendingText = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

const PendingNumber = styled.div`
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

// const SoldPending = styled.div`
//   display: flex;
//   width: 50%;
//   flex-direction: column;
//   gap: 16px;
//   border: 20px solid;
// `;
