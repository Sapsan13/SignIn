import RadialChart from "@/components/mainContent/main/overview/RadialChart";
// import RadialBarChart from "@/components/mainContent/main/overview/RadialChart";
import styled from "styled-components";

//
const ToursAvailable = () => {
  return (
    <SkeletonToursWrapper>
      <SkeletonToursAvailable>
        <SkeletonToursText>Tours Available</SkeletonToursText>
        <SkeletonRadialText>
          <RadialChart
            width={240}
            height={240}
            color1={"#5BE49B"}
            color2={"#00A76F"}
            gradient={"tours"}
          />
          <SkeletonInnerText>
            <SkeletonTours>tours</SkeletonTours>
            <SkeletonNumber>120</SkeletonNumber>
          </SkeletonInnerText>
        </SkeletonRadialText>
        <SkeletonToursBottom>
          <SkeletonSoldOut>
            <SkeletonFlexRowGap>
              <SkeletonGreenSquare />
              Sold out
            </SkeletonFlexRowGap>
            <SkeletonBottomTours>120 Tours</SkeletonBottomTours>
          </SkeletonSoldOut>
          <SkeletonAvailable>
            <SkeletonFlexRowGap>
              <SkeletonGraySquare />
              Available
            </SkeletonFlexRowGap>
            <SkeletonBottomTours>66 Tours</SkeletonBottomTours>
          </SkeletonAvailable>
        </SkeletonToursBottom>
      </SkeletonToursAvailable>
    </SkeletonToursWrapper>
  );
};
export default ToursAvailable;

const SkeletonGreenSquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(0, 167, 111, 1);
`;

const SkeletonGraySquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(145, 158, 171, 0.16);
`;

const SkeletonToursWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const SkeletonToursText = styled.div`
  width: 100%;
  height: 52px;
  padding: 24px 16px 0px 24px;
  gap: 16px;
  display: flex;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const SkeletonToursAvailable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
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

const SkeletonTours = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: rgba(99, 115, 129, 1);
`;

const SkeletonNumber = styled.div`
  font-family: Public Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

const SkeletonToursBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding: 0px 40px 40px 40px;
  gap: 16px;
`;

const SkeletonSoldOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SkeletonAvailable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SkeletonFlexRowGap = styled.div`
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

const SkeletonBottomTours = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
`;
