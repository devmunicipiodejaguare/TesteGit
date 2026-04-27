import {
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
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
  dataKey?: string;
  nameKey?: string;
  innerRadius?: string;
  outerRadius?: string;
  styledTooltip?: CSSProperties;
  action?: (e: { fill?: string; label: string; value: number }) => void;
}
export default function GraficoPie({
  heightContainer = "100%",
  widthContainer = "100%",
  dataGraphic,
  dataKey = "value",
  nameKey = "label",
  innerRadius = "40%",
  outerRadius = "70%",
  styledTooltip,
  action,
}: propsGraphic) {
  const renderShape = (props: any) => {
    const { isActive } = props;

    return <Sector {...props} style={{ opacity: isActive ? 1 : 0.7 }} />;
  };

  return (
    <Styled widthContainer={widthContainer} heightContainer={heightContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart responsive>
          <Pie
            data={dataGraphic}
            dataKey={dataKey}
            nameKey={nameKey}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            isAnimationActive={false}
            shape={renderShape}
            onClick={(e) => action(e?.payload)}
          >
            <LabelList
              content={(props: any) => {
                const { viewBox } = props;
                console.log(props);
                const midAngle = (viewBox.startAngle + viewBox.endAngle) / 2;
                const RADIAN = Math.PI / 180;
                const radius =
                  viewBox?.innerRadius +
                  (viewBox?.outerRadius - viewBox?.innerRadius) / 2;

                const x = viewBox?.cx + radius * Math.cos(-midAngle * RADIAN);
                const y = viewBox?.cy + radius * Math.sin(-midAngle * RADIAN);

                const total = dataGraphic.reduce(
                  (acc, item) => acc + item.value,
                  0,
                );
                const percent = props.value / total;

                if (percent < 0.01) return null;

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#f2f2f2"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                    style={{
                      fontSize: '0.7rem'
                    }}
                  >
                    {(percent * 100).toFixed(0)}%
                  </text>
                );
              }}
            />
          </Pie>
          <Tooltip contentStyle={{ ...styledTooltip, color: "#000" }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Styled>
  );
}
