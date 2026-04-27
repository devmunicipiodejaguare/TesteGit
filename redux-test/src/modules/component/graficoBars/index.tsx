import {
  Bar,
  BarChart,
  LabelList,
  Legend,
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
  dataKey?: string;
  styledTooltip?: CSSProperties;
  action?: (e: { fill?: string; label: string; value: number }) => void;
  innLabel: boolean;
}

type CustomLabelProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  payload?: any;
};
export default function GraficoBars({
  heightContainer = "100%",
  widthContainer = "100%",
  dataGraphic,
  xTitle = "label",
  yTitle = "value",
  dataKey = "value",
  styledTooltip,
  innLabel = false,
  action,
}: propsGraphic) {
  return (
    <Styled widthContainer={widthContainer} heightContainer={heightContainer}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={dataGraphic}>
          {innLabel ? <XAxis /> : <XAxis dataKey={xTitle} />}
          <YAxis dataKey={yTitle} />
          <Tooltip contentStyle={{ ...styledTooltip, color: "#000" }} />
          <Bar
            dataKey={dataKey}
            onClick={(e) => action(e?.payload)}
            isAnimationActive={false}
          >
            {innLabel ? (
              <LabelList
                dataKey="label"
                content={(props: any) => {
                  const { x, y, width, height, value } = props;

                  const cx = x + width / 2 + 3;
                  const cy = y + height - 35;

                  const fontSize = 12;
                  const estimatedTextHeight = value.length * (fontSize * 0.6);

                  if (height < estimatedTextHeight + 10) return null;

                  return (
                    <text
                      x={cx}
                      y={cy}
                      fill="#000"
                      fontWeight={"bold"}
                      textAnchor="middle"
                      dominantBaseline="auto"
                      transform={`rotate(-90, ${cx}, ${cy})`}
                    >
                      {value}
                    </text>
                  );
                }}
              />
            ) : (
              <></>
            )}
          </Bar> 
        </BarChart>
      </ResponsiveContainer>
    </Styled>
  );
}
