import styled from "styled-components";

const Booked = () => {
  return (
    <BookedBarsWrapper>
      <BookedBarTitle>Booked</BookedBarTitle>
      <BookedBarBlock>
        <BookedBarItem>
          <FlexRow>
            <BarTitleWrapper>PENDING</BarTitleWrapper>
            <NumberWrapper>56,000</NumberWrapper>
          </FlexRow>
          <BookedFirstItem value="75" max="100"></BookedFirstItem>
        </BookedBarItem>
        <BookedBarItem>
          <FlexRow>
            <BarTitleWrapper>CANCELED</BarTitleWrapper>
            <NumberWrapper>50,456</NumberWrapper>
          </FlexRow>
          <BookedSecondItem value="47" max="100"></BookedSecondItem>
        </BookedBarItem>
        <BookedBarItem>
          <FlexRow>
            <BarTitleWrapper>SOLD</BarTitleWrapper>
            <NumberWrapper>155,670</NumberWrapper>
          </FlexRow>
          <BookedThirdItem value="47" max="100"></BookedThirdItem>
        </BookedBarItem>
      </BookedBarBlock>
    </BookedBarsWrapper>
  );
};

export default Booked;

const BookedBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;
const BookedBarTitle = styled.div`
  width: 100%;
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

const BookedBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: 24px; */
  gap: 24px;
  justify-content: center;
`;

const BookedBarItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  gap: 8px;
  border-radius: 50%;
  padding: 0 24px 0 24px;
`;

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BarTitleWrapper = styled.div`
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;

const NumberWrapper = styled.div`
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const BookedFirstItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  &::-webkit-progress-value {
    background: #eea000;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background: #edeff1;
  }
`;
const BookedSecondItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  &::-webkit-progress-value {
    background: #ff5630;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background: #edeff1;
  }
`;

const BookedThirdItem = styled.progress`
  border: 1px solid transparent;
  height: 8px;
  border-radius: 8px;
  width: 100%;
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
