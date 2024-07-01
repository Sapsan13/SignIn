import { Logo } from "@/components/Images";
import styled from "styled-components";

const LandingFooter = () => {
  return (
    <ItemsWrapper>
      <Logo />
      <Copyright>
        &copy;All rights reserved
        <br />
        <Row>
          made by<></>
          <MinimalCC> Minimal.cc</MinimalCC>
        </Row>
      </Copyright>
    </ItemsWrapper>
  );
};
export default LandingFooter;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding: 40px 0px 40px 0px;
  gap: 8px;
  width: 100%;
  overflow: hidden;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  max-width: 160px;
  width: 100%;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

const MinimalCC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: rgba(0, 167, 111, 1);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
