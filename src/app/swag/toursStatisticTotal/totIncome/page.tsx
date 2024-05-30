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
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetApiChartTotalIncome } from "@/QueryStore";

const SwagTotalIncome = () => {
  const router = useRouter();
  const { data, error, isSuccess } = useGetApiChartTotalIncome();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess, token]);

  if (error) console.log(error);
  console.log(data);
  if (!data) return <p>loading....</p>;

  return (
    <SkeletontWrapper>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <BarChart width={150} height={10} data={data} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* <XAxis dataKey="name" /> */}
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
