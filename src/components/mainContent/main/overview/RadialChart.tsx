import {
  Legend,
  Line,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from "recharts";

interface RadialChart {
  width: number;
  hight: number;
}
// width, hight, innerRadius, outerRadius, data
const RadialChart = (props) => {
  const data = [
    {
      name: "",
      uv: "Tours",
      pv: 120,
      fill: props.color,
    },
  ];
  return (
    <RadialBarChart
      width={props.width}
      height={props.height}
      innerRadius="85%"
      outerRadius="100%"
      data={data}
      barSize={20}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 160]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar background dataKey={"pv"} cornerRadius={"40"} />
      <Tooltip />
    </RadialBarChart>
  );
};
export default RadialChart;
