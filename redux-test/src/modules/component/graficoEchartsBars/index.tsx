import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import styled from "styled-components";

export default function GraficoEchartsBars({ data }: { data?: any[] }) {
  const options: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   orient: "horizontal",
    //   left: "left",
    // },
    label: {
      show: true,
      color: "#000",
      fontSize: 12,
      formatter: "{b}: ({d}%)",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: data?.map((d) => ({
          value: d.value,
          name: d.label,
          action: d.action,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const onEvents = {
    click: (params: any) => {
      params.data?.action?.();
    },
  };

  return (
    <ReactECharts
      onEvents={onEvents}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
