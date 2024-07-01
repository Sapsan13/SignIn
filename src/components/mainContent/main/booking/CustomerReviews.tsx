import {
  StarGrey,
  StarGold,
  AvatarSimon,
  ArowRight,
} from "@/components/Images";
import styled from "styled-components";

const CustomerReviews = () => {
  return (
    <CustomerReviewsWrapper>
      <Column>
        <Column>
          <Customer>Customer Reviews</Customer>
          <Reviews12>
            Reviews12
            <Arrows>
              <Arrowleft>
                <ArowRight />
              </Arrowleft>
              <ArrowRight>
                <ArowRight />
              </ArrowRight>
            </Arrows>
          </Reviews12>
        </Column>
        <Jayvion>
          <FlexRowAvatarNameDate>
            <Avatar>
              <AvatarSimon />
            </Avatar>
            <FlexColFirstLast>
              <Row>
                <FirstLastName>Jaiviyon Simon</FirstLastName>
              </Row>
              <DateTime>12 Aug 2022 10:00 PM</DateTime>
            </FlexColFirstLast>
          </FlexRowAvatarNameDate>
          <StarsBar>
            <StarGold />
            <StarGold />
            <StarGold />
            <StarGrey />
            <StarGrey />
          </StarsBar>
          <TextBlock>
            Assumenda nam repudiandae rerum fugiat vel maxime.
          </TextBlock>
          <BtnBar>
            <Btn>Great Sevice</Btn>
            <Btn>Recommended</Btn>
            <Btn>Best Price</Btn>
          </BtnBar>
        </Jayvion>
        <RejectAccept>
          <Reject>Reject</Reject>
          <Accept>Accept</Accept>
        </RejectAccept>
      </Column>
    </CustomerReviewsWrapper>
  );
};
export default CustomerReviews;

const CustomerReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-height: 765px;
  padding: 24px;
  height: 100%;
  border-radius: 16px;
  box-shadow:
    0px 12px 24px -4px #919eab1f,
    0px 0px 2px 0px #919eab33;
`;

// const CustomerReviews = styled.div`
//   display: flex;
//   width: 100%;
//   height: 54px;
//   padding: 24px 16px 0px 24px;
//   gap: 16px;
//   opacity: 0px;
// `;

const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  width: 100%;
  height: 36px;
  gap: 10px;
`;

const ArrowRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const Arrowleft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scaleX(-1);
  width: 36px;
  height: 36px;
`;

const Customer = styled.div`
  font-family: Public Sans;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const Reviews12 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #637381;
`;

const Jayvion = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  width: 100%;
`;

const FlexRowAvatarNameDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

const FlexColFirstLast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FirstLastName = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const DateTime = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #919eab;
`;

const StarsBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const TextBlock = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

const BtnBar = styled.div`
  text-decoration: none;
  border: none;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 24px;
`;

const Btn = styled.button`
  font-family: Public Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  border: none;
  height: 18px;
  cursor: pointer;
  overflow: hidden;
  padding: 0 5px 0 5px;
  border-radius: 4px;
`;
const RejectAccept = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: left;
  width: 100%;
  height: 84px;
  padding: 24px 0px 0px 0px;
  gap: 16px;
  border: 1px 0px 0px 0px;
`;

const Reject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  width: 140px;
  height: 36px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  color: red;
  background-color: rgba(255, 86, 48, 0.08);
`;

const Accept = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 36px;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
