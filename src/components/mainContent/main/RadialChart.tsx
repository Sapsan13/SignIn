import { Legend, Line, RadialBar, RadialBarChart, Tooltip } from "recharts";

const data = [
  {
    name: "",
    uv: "Tours",
    pv: 2400,
    fill: "#44d590",
  },
  {
    name: "",
    uv: "120",
    pv: 2400,
    fill: "#44d590",
  },
];

interface RadialChart {
  width: number;
  hight: number;
}
// width, hight, innerRadius, outerRadius, data
const RadialChart = () => {
  return (
    <RadialBarChart
      width={210}
      height={210}
      innerRadius="85%"
      outerRadius="100%"
      data={data}
      startAngle={45}
      endAngle={270}
      barSize={20}
    >
      <RadialBar
        minAngle={0}
        label={{ fill: "100", position: "center" }}
        background
        clockWise={true}
        dataKey="uv"
        stroke="#44d590"
      />

      <RadialBar
        minAngle={0}
        label={{ fill: "100", position: "center" }}
        background
        clockWise={true}
        dataKey="uv"
        stroke="#04160d"
      />

      <Tooltip />
    </RadialBarChart>
  );
};
export default RadialChart;
