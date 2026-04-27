import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Styled } from "./styled";
import type { CSSProperties } from "styled-components";
import { useState } from "react";
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
export default function GraficoLateralBars({
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
  function lightenColor(color: string, amount: number) {
    const num = parseInt(color.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + 255 * amount);
    const g = Math.min(255, ((num >> 8) & 0x00ff) + 255 * amount);
    const b = Math.min(255, (num & 0x0000ff) + 255 * amount);

    return `rgb(${r}, ${g}, ${b})`;
  }
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const BAR_HEIGHT = 35;
  // const BAR_HEIGHT = 40; // altura de cada barra
  const chartHeight = dataGraphic.length * BAR_HEIGHT;

  const CustomBar = (props: any) => {
    const { x, y, width, height, fill, index } = props;

    const isHovered = index === hoveredIndex;

    const finalColor = isHovered
      ? lightenColor(fill || "#8884d8", 0.2)
      : fill || "#8884d8";

    return (
      <rect
        x={x}
        y={y}
        rx={4}
        width={width}
        height={height}
        fill={finalColor}
        style={{ transition: "fill 0.2s ease" }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      />
    );
  };
  return (
    <Styled widthContainer={widthContainer} heightContainer={heightContainer}>
      <ResponsiveContainer width={"100%"} height={chartHeight}>
        <BarChart data={dataGraphic} layout="vertical" barCategoryGap={10}>
          <XAxis
            type="number"
            tick={{ fill: "#000" }}
            axisLine={{ stroke: "#000" }}
            tickLine={{ stroke: "#000" }}
          />
          <YAxis
            type="category"
            dataKey={xTitle}
            width={"auto"}
            tick={false}
            axisLine={{ stroke: "#000" }}
            tickLine={{ stroke: "#000" }}
          />
          <Tooltip
            cursor={false}
            contentStyle={{ ...styledTooltip, color: "#000" }}
          />

          <Bar
            dataKey={dataKey}
            // barSize={20}
            onClick={(e) => action?.(e?.payload)}
            isAnimationActive={false}
            shape={<CustomBar />}
          >
            <LabelList
              dataKey="label"
              content={(props: any) => {
                const { x, y, value } = props;
                const cy = y - 6;
                const fontSize = 12;
                const maxChars = 12;
                const displayValue =
                  value.length > maxChars
                    ? value.slice(0, maxChars) + "..."
                    : value;

                return (
                  <text
                    x={x + 2}
                    y={cy}
                    fill="#000"
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    fontWeight={"bold"}
                  >
                    {value}
                  </text>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Styled>
  );
}
