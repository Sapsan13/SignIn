"use client";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useGetApiChartStatistic } from "@/QueryStore";
import { useEffect } from "react";
import { useGetAuthToken } from "../../UseAuth";

const SwagStatistics = () => {
  const router = useRouter();
  const { data: statisticsData, isSuccess } = useGetApiChartStatistic();
  const token = useGetAuthToken();

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess]);

  if (!statisticsData) return <p>loading....</p>;

  return (
    <SkeletontWrapper>
      <AreaChart
        width={1200}
        height={500}
        data={statisticsData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5d75c5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </SkeletontWrapper>
  );
};
const SkeletontWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
`;

export default SwagStatistics;
