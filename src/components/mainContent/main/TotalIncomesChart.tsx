import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  {
    uv: 1,
  },
  {
    uv: 20,
  },
  {
    uv: 67,
  },
  {
    uv: 66,
  },
  {
    uv: 100,
  },
  {
    uv: 60,
  },
];

const TotalIncomesChart = () => {
  return (
    <div>
      TotalIncomes
      <LineChart width={295} height={87} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#02926c"
          dot={false}
          strokeWidth="3"
        />
      </LineChart>
    </div>
  );
};
export default TotalIncomesChart;
