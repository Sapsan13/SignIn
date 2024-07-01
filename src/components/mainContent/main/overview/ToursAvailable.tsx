import RadialChart from "@/components/mainContent/main/overview/RadialChart";
// import RadialBarChart from "@/components/mainContent/main/overview/RadialChart";
import styled from "styled-components";

//
const ToursAvailable = () => {
  return (
    <ToursWrapper>
      <ToursAvail>
        <ToursText>Tours Available</ToursText>
        <RadialText>
          <RadialChart
            width={240}
            height={240}
            color1={"#5BE49B"}
            color2={"#00A76F"}
            gradient={"tours"}
          />
          <InnerText>
            <Tours>tours</Tours>
            <Number>120</Number>
          </InnerText>
        </RadialText>
        <ToursBottom>
          <SoldOut>
            <FlexRowGap>
              <GreenSquare />
              Sold out
            </FlexRowGap>
            <BottomTours>120 Tours</BottomTours>
          </SoldOut>
          <Available>
            <FlexRowGap>
              <GraySquare />
              Available
            </FlexRowGap>
            <BottomTours>66 Tours</BottomTours>
          </Available>
        </ToursBottom>
      </ToursAvail>
    </ToursWrapper>
  );
};
export default ToursAvailable;

const GreenSquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(0, 167, 111, 1);
`;

const GraySquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(145, 158, 171, 0.16);
`;

const ToursWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ToursText = styled.div`
  width: 100%;
  height: 52px;
  gap: 16px;
  display: flex;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const ToursAvail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
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

const Tours = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const Number = styled.div`
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

const ToursBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;

const SoldOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Available = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlexRowGap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(99, 115, 129, 1);
`;

const BottomTours = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
`;
