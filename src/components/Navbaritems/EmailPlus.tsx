import styled from "styled-components";

const EmailPlus = () => {
  return (
    <PinkBulb>
      <NumberPlus>32+</NumberPlus>
    </PinkBulb>
  );
};

export default EmailPlus;

const PinkBulb = styled.div`
  display: flex;
  background-color: #ffe4de;
  width: 35px;
  height: 24px;
  border-radius: 6px;
  gap: 6px;
  margin-right: 8px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

const NumberPlus = styled.div`
  color: #b71d18;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
`;
