"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { swagStatistics } from "@/store/actions/swaggerActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagStatistics = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
    console.log(`token => `, token);
    dispatch(swagStatistics(token));
  }, [dispatch, router, token]);

  const stat = useSelector((store: any) => {
    return store.swagger.statistics;
  });

  // console.log("STATS");
  // console.log(stat);

  const data: any = [];

  if (!stat) return null;
  stat.map((item: any) =>
    data.push({
      key: item.name,
      name: item.name,
      uv: item.uv,
      pv: item.pv,
      atm: item.amt,
    })
  );
  const SkeletontWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
  `;
  console.log(data);
  return (
    <SkeletontWrapper>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <BarChart width={150} height={10} data={data} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#009764" radius={[8, 8, 0, 0]} />
          <Bar dataKey="pv" fill="#ffac82" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SkeletontWrapper>
  );
};

export default SwagStatistics;
