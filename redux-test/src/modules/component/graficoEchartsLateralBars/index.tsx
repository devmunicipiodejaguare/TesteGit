import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

export default function GraficoEchartsBarsLateral({
  data,
  XTextRotation,
  title,
  zoom,
  porcentagem = false,
}: {
  data?: any[];
  XTextRotation?: number;
  title: string;
  zoom?: boolean;
  porcentagem?: boolean;
}) {
  // const resolution = useResolution();
  const sortedData = data?.sort((a, b) => b?.value - a?.value);

  const options: EChartsOption = {
    title: {
      text: title,
    },
    grid: {
      left: "5%",
      right: "5%",
    },
    tooltip: {},
    xAxis: {
      axisLabel: {
        color: "#000",
      },
    },
    yAxis: {
      data: sortedData?.map((d) => d.label),
      axisLabel: {
        color: "#000",
        interval: 0,
        fontSize: 10,
      },
    },
    series: [
      {
        type: "bar",
        data: sortedData?.map((d) => d.value),
        label: {
          show: true,
          position: "right", // como é barra lateral
          formatter: `{c} ${porcentagem ? "%" : ''}`, // aqui adiciona o %
          color: "black",
        },
        // barWidth: 45,
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
}