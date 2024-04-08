import styled from "styled-components";

const SkeletonBookedBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 268px;
  border-radius: 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
`;
const SkeletonBookedBarTitle = styled.div`
  width: 344px;
  height: 52px;
  padding: 24px 16px 0 24px;
  gap: 16px;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonBookedBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 216px;
  padding: 24px;
  gap: 24px;
`;

const SkeletonBookedBarItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  height: 40px;
  gap: 8px;
  border-radius: 50%;
`;

const SkeletonFlexRow = styled.div`
  width: 296px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SkeletonBarTitleWrapper = styled.div`
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonNumberWrapper = styled.div`
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const SkeletonBookedFirstItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 296px;
  overflow: hidden;
  &::-webkit-progress-value {
    background: #eea000;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background: #edeff1;
  }
`;
const SkeletonBookedSecondItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 296px;
  overflow: hidden;
  &::-webkit-progress-value {
    background: #ff5630;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background: #edeff1;
  }
`;

const SkeletonBookedThirdItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 296px;
  overflow: hidden;
  &::-webkit-progress-value {
    background: #22c55e;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background: #edeff1;
    border-radius: 8px;
  }
`;
const Booked = () => {
  return (
    <SkeletonBookedBarsWrapper>
      <SkeletonBookedBarTitle>Booked</SkeletonBookedBarTitle>
      <SkeletonBookedBarBlock>
        <SkeletonBookedBarItem>
          <SkeletonFlexRow>
            <SkeletonBarTitleWrapper>PENDING</SkeletonBarTitleWrapper>
            <SkeletonNumberWrapper>56,000</SkeletonNumberWrapper>
          </SkeletonFlexRow>
          <SkeletonBookedFirstItem
            value="75"
            max="100"
          ></SkeletonBookedFirstItem>
        </SkeletonBookedBarItem>
        <SkeletonBookedBarItem>
          <SkeletonFlexRow>
            <SkeletonBarTitleWrapper>CANCELED</SkeletonBarTitleWrapper>
            <SkeletonNumberWrapper>50,456</SkeletonNumberWrapper>
          </SkeletonFlexRow>
          <SkeletonBookedSecondItem
            value="47"
            max="100"
          ></SkeletonBookedSecondItem>
        </SkeletonBookedBarItem>
        <SkeletonBookedBarItem>
          <SkeletonFlexRow>
            <SkeletonBarTitleWrapper>SOLD</SkeletonBarTitleWrapper>
            <SkeletonNumberWrapper>155,670</SkeletonNumberWrapper>
          </SkeletonFlexRow>
          <SkeletonBookedThirdItem
            value="47"
            max="100"
          ></SkeletonBookedThirdItem>
        </SkeletonBookedBarItem>
      </SkeletonBookedBarBlock>
    </SkeletonBookedBarsWrapper>
  );
};

export default Booked;
