import Button from "@/components/button";
import Image from "next/image";
import styled from "styled-components";

const ErrowRight = () => {
  return (
    <>
      <Image
        src={"/illustrations/leftBar/ArrowRight.png"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
  );
};

const AvatarSimon = () => {
  return (
    <Image
      src={"/illustrations/customerReviews/SimonJayvion.png"}
      width={40}
      height={40}
      alt="Picture of the author"
    />
  );
};

const StarGold = () => {
  return (
    <>
      <Image
        src={"/illustrations/customerReviews/star.png"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
  );
};

const StarGrey = () => {
  return (
    <>
      <Image
        src={"/illustrations/customerReviews/greyStar.png"}
        width={20}
        height={20}
        alt="Picture of the author"
      />
    </>
  );
};

const SkeletonCustomerReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 12px 24px -4px #919eab1f, 0px 0px 2px 0px #919eab33;
`;

const SkeletonCustomerReviews = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding: 24px 16px 0px 24px;
  gap: 16px;
  opacity: 0px;
`;

const SkeletonArrows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  width: 100%;
  height: 36px;
  gap: 10px;
`;

const SkeletonArrowRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const SkeletonArrowleft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scaleX(-1);
  width: 36px;
  height: 36px;
`;

const SkeletonCustomer = styled.div`
  font-family: Public Sans;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const SkeletonReviews12 = styled.div`
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

const SkeletonJayvion = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  width: 100%;
`;

const SkeletonFlexRowAvatarNameDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SkeletonAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

const SkeletonFlexColFirstLast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SkeletonFirstLastName = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const SkeletonDateTime = styled.div`
  display: flex;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #919eab;
`;

const SkeletonStarsBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const SkeletonTextBlock = styled.div`
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

const SkeletonBtnBar = styled.button`
  text-decoration: none;
  border: none;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 24px;
`;

const SkeletonBtn = styled.button`
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
const SkeletonRejectAccept = styled.div`
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

const SkeletonReject = styled.div`
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

const SkeletonAccept = styled.div`
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

const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const SkeletonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const CustomerReviews = () => {
  return (
    <SkeletonCustomerReviewsWrapper>
      <SkeletonColumn>
        <SkeletonColumn>
          <SkeletonCustomer>Customer Reviews</SkeletonCustomer>
          <SkeletonReviews12>
            Reviews12
            <SkeletonArrows>
              <SkeletonArrowleft>
                <ErrowRight />
              </SkeletonArrowleft>
              <SkeletonArrowRight>
                <ErrowRight />
              </SkeletonArrowRight>
            </SkeletonArrows>
          </SkeletonReviews12>
        </SkeletonColumn>
        <SkeletonJayvion>
          <SkeletonFlexRowAvatarNameDate>
            <SkeletonAvatar>
              <AvatarSimon />
            </SkeletonAvatar>
            <SkeletonFlexColFirstLast>
              <SkeletonRow>
                <SkeletonFirstLastName>Jaiviyon Simon</SkeletonFirstLastName>
              </SkeletonRow>
              <SkeletonDateTime>12 Aug 2022 10:00 PM</SkeletonDateTime>
            </SkeletonFlexColFirstLast>
          </SkeletonFlexRowAvatarNameDate>
          <SkeletonStarsBar>
            <StarGold />
            <StarGold />
            <StarGold />
            <StarGrey />
            <StarGrey />
          </SkeletonStarsBar>
          <SkeletonTextBlock>
            Assumenda nam repudiandae rerum fugiat vel maxime.
          </SkeletonTextBlock>
          <SkeletonBtnBar>
            <SkeletonBtn>Great Sevice</SkeletonBtn>
            <SkeletonBtn>Recommended</SkeletonBtn>
            <SkeletonBtn>Best Price</SkeletonBtn>
          </SkeletonBtnBar>
        </SkeletonJayvion>
        <SkeletonRejectAccept>
          <SkeletonReject>Reject</SkeletonReject>
          <SkeletonAccept>Accept</SkeletonAccept>
        </SkeletonRejectAccept>
      </SkeletonColumn>
    </SkeletonCustomerReviewsWrapper>
  );
};
export default CustomerReviews;
