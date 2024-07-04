import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { data } from "./mock/data";

const BarchartStatistics = () => {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" aspect={2.1 / 1}>
        <BarChart width={1} height={1} data={data} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="sold" fill="#009764" radius={[8, 8, 0, 0]} />
          <Bar dataKey="canceled" fill="#ffac82" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default BarchartStatistics;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 24px;
`;
