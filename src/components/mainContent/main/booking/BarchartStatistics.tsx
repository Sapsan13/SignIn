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

const data = [
  {
    name: "2017",
    uv: 25,
    pv: 30,
    amt: 2210,
  },
  {
    name: "2018",
    uv: 30,
    pv: 45,
    amt: 2290,
  },
  {
    name: "2019",
    uv: 30,
    pv: 19,
    amt: 2000,
  },
  {
    name: "2020",
    uv: 25,
    pv: 30,
    amt: 2181,
  },
  {
    name: "2021",
    uv: 15,
    pv: 38,
    amt: 2500,
  },
  {
    name: "2022",
    uv: 10,
    pv: 38,
    amt: 2100,
  },
  {
    name: "2023",
    uv: 41,
    pv: 85,
    amt: 2100,
  },
];

const BarchartStatistics = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={100}
        height={120}
        data={data}
        barSize={8}
        margin={{ top: 8, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" radius={[8, 8, 0, 0]} />
        <Bar dataKey="uv" fill="#82ca9d" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarchartStatistics;
