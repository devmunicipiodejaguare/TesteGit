import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Styled } from "./styled";
import type { CSSProperties } from "styled-components";
type Percentage = "0%" | "100%" | `${number}%`;
type dataGraphic = {
  label: string;
  value: number;
  action?: (e?: any) => void;
  fill?: string;
};
interface propsGraphic {
  heightContainer: Percentage;
  widthContainer: Percentage;
  dataGraphic: dataGraphic[];
  xTitle?: string;
  yTitle?: string;
  nameLine?: string;
  styledTooltip?: CSSProperties;
}

export default function GraficoLine({
  heightContainer = "100%",
  widthContainer = "100%",
  dataGraphic,
  xTitle = "label",
  yTitle = "value",
  nameLine = "value",
  styledTooltip,
}: propsGraphic) {
  function CustomTooltip({ active, payload }: any) {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div
          style={{
            background: "#222",
            color: "#fff",
            gap: 10,
            display: "flex",
          }}
        >
          <p>{data.label}</p>
          <p>Valor: {data.value}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <Styled widthContainer={widthContainer} heightContainer={heightContainer}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={dataGraphic}>
          <XAxis dataKey={xTitle} />
          <YAxis dataKey={yTitle} />
          <Tooltip contentStyle={{ ...styledTooltip, color: "#000" }} />

          <Line dataKey={nameLine} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </Styled>
  );
}
