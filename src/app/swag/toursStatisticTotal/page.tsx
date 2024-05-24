"use client";
import styled from "styled-components";
import Link from "next/link";

const ToursIncomeStat = () => {
  return (
    <SkeletonSwagWrap>
      <Link href={"/swag/toursStatisticTotal/tours"}>SwagTours</Link>
      <Link href={"/swag/toursStatisticTotal/statistics"}>SwagStatistics</Link>
      <Link href={"/swag/toursStatisticTotal/totIncome"}>TotalIncomes</Link>
    </SkeletonSwagWrap>
  );
};
export default ToursIncomeStat;

const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
