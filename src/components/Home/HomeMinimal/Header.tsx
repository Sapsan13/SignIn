import styled from "styled-components";

const SkeletonHeaderWrpper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const SkeletonMinimalUI = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  top: 0;
  font-family: Public Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: rgba(145, 158, 171, 1);
`;

const SkeletonWhatMin = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  width: 100%;
  font-family: Public Sans;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
  align-items: center;
  gap: 24px;
  @media (max-width: 600px) {
    flex-direction: column;
    font-family: Public Sans;
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <SkeletonHeaderWrpper>
      <SkeletonWhatMin>
        <SkeletonMinimalUI>Minimal UI</SkeletonMinimalUI>
        What Minimal <br /> helps you?
      </SkeletonWhatMin>
    </SkeletonHeaderWrpper>
  );
};
export default Header;
