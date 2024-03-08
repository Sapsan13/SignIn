import styled from "styled-components";

const SkeletonPinkBulb = styled.div`
  display: flex;
  background-color: #ffe4de;
  width: 35px;
  height: 24px;
  border-radius: 6px;
  gap: 6px;
  margin-left: auto;
  align-items: center;
`;

const SkeletonNumberPlus = styled.div`
  //styleName: Components/Label;
  color: #b71d18;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
`;
const EmailPlus = () => {
  return (
    <SkeletonPinkBulb>
      <SkeletonNumberPlus>32+</SkeletonNumberPlus>
    </SkeletonPinkBulb>
  );
};

export default EmailPlus;
