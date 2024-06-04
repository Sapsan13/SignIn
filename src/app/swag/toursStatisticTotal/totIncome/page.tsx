"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { useGetApiChartTotalIncome } from "@/QueryStore";
import { useGetAuthToken } from "../../UseAuth";

const SwagTotalIncome = () => {
  const router = useRouter();
  const { data: totIncomeData, error, isSuccess } = useGetApiChartTotalIncome();
  const token = useGetAuthToken();

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess, token]);

  if (error) console.log(error);
  console.log(totIncomeData);
  if (!totIncomeData) return <p>loading....</p>;

  return (
    <SkeletontWrapper>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <BarChart width={150} height={10} data={totIncomeData} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis dataKey="" />
          <Bar dataKey="uv" fill="rgb(151, 0, 0)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="pv" fill="rgb(18, 37, 111)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SkeletontWrapper>
  );
};

const SkeletontWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  height: fit-content;
`;

export default SwagTotalIncome;
