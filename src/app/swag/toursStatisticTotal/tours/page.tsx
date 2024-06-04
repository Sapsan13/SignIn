"use client";
import { useGetApiChartTours } from "@/QueryStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Pie, PieChart } from "recharts";
import styled from "styled-components";
import { useGetAuthToken } from "../../UseAuth";
const SwagTours = () => {
  const router = useRouter();
  const { data: toursData, error, isSuccess } = useGetApiChartTours();
  const token = useGetAuthToken();

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess, token]);

  if (error) {
    console.log(error);
  }

  if (!toursData) return <p>loading....</p>;

  if (!toursData) return null;
  console.log(toursData);
  return (
    <SkeletonSwagWrap>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={30}
          endAngle={330}
          data={toursData}
          cx="50%"
          cy="50%"
          outerRadius={145}
          fill="#75f3d8"
          label
        />
      </PieChart>
    </SkeletonSwagWrap>
  );
};
export default SwagTours;
const SkeletonSwagWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
