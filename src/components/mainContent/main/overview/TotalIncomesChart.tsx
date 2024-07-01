import { Line, LineChart } from "recharts";
import styled from "styled-components";
import { data } from "./mock/data";

const TotalIncomesChart = () => {
  return (
    <Flex>
      <LineChart width={360} height={118} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#02926c"
          dot={false}
          strokeWidth="5"
        />
      </LineChart>
    </Flex>
  );
};
export default TotalIncomesChart;

const Flex = styled.div`
  width: 100%;
  display: flex;
`;
