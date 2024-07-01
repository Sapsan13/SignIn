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
import { data } from "./mock/data";

const BarchartStatistics = () => {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
        <BarChart width={150} height={10} data={data} barSize={8}>
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
  width: 100%;
  height: 70%;
`;
