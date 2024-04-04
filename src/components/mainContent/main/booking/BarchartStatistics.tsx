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

const data = [
  {
    name: "2017",
    canceled: 25,
    sold: 30,
    amt: 2210,
  },
  {
    name: "2018",
    canceled: 30,
    sold: 45,
    amt: 2290,
  },
  {
    name: "2019",
    canceled: 30,
    sold: 19,
    amt: 2000,
  },
  {
    name: "2020",
    canceled: 25,
    sold: 30,
    amt: 2181,
  },
  {
    name: "2021",
    canceled: 15,
    sold: 38,
    amt: 2500,
  },
  {
    name: "2022",
    canceled: 10,
    sold: 38,
    amt: 2100,
  },
  {
    name: "2023",
    canceled: 41,
    sold: 85,
    amt: 2100,
  },
];

const SkeletonChartWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 24px;
  width: 712px;
  height: 336px;
`;

const BarchartStatistics = () => {
  return (
    <SkeletonChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={10} data={data} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="sold" fill="#009764" radius={[8, 8, 0, 0]} />
          <Bar dataKey="canceled" fill="#ffac82" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SkeletonChartWrapper>
  );
};

export default BarchartStatistics;
