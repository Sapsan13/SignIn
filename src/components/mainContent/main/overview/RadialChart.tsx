import {
  Legend,
  Line,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from "recharts";

interface RadialChartProps {
  width: number;
  hight: number;
  color1: string;
  color2: string;
  gradient: string;
}

const RadialChart = (props: RadialChartProps) => {
  var $grad = `${props.gradient}`;
  const data = [
    {
      name: "",
      uv: "Tours",
      pv: 120,
      fill: `url(#${props.gradient})`,
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
      <defs>
        <linearGradient id={props.gradient} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={props.color1} stopOpacity={1} />
          <stop offset="100%" stopColor={props.color2} stopOpacity={1} />
        </linearGradient>
      </defs>
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
