"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useGetApiChartStatistic } from "@/QueryStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const SwagStatistics = () => {
  const router = useRouter();
  const { data, isSuccess } = useGetApiChartStatistic();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess]);

  if (!data) return <p>loading....</p>;
  return (
    <SkeletontWrapper>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <BarChart width={150} height={10} data={data} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#009764" radius={[8, 8, 0, 0]} />
          <Bar dataKey="pv" fill="rgb(255, 238, 82)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SkeletontWrapper>
  );
};
const SkeletontWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
`;

export default SwagStatistics;
