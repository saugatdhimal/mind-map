import { useMemo } from "react";
import { useViewport } from "reactflow";
import * as d3 from "d3";
import cn from "@utils/cn";

type BarChartProps = {
  width?: number;
  height?: number;
  data: { name: string; value: number }[];
};

const BarChart = ({ width = 200, height = 100, data }: BarChartProps) => {
  const { zoom } = useViewport();

  const w = width * zoom;
  const h = height * zoom;
  const MARGIN = {
    top: h / 7,
    right: w / 7,
    bottom: h / 7,
    left: w / 4.5,
  };

  const boundsWidth = w - MARGIN.right - MARGIN.left;
  const boundsHeight = h - MARGIN.top - MARGIN.bottom;

  const textStyle = { fontSize: w / 19 };

  const groups = useMemo(
    () => data.sort((a, b) => b.value - a.value).map((d) => d.name),
    [data]
  );

  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]).padding(0.1);
  }, [data, h]);

  const xScale = useMemo(() => {
    const [_, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, w]);

  const allShapes = useMemo(
    () =>
      data.map((d, i) => {
        const y = yScale(d.name);
        if (y === undefined) {
          return null;
        }

        return (
          <g key={i}>
            <rect
              x={xScale(0)}
              y={yScale(d.name)}
              width={xScale(d.value)}
              height={yScale.bandwidth()}
              fill="#00CADC"
              rx={1}
            />
            <text
              x={xScale(d.value) + 5}
              y={y + yScale.bandwidth() / 1.8}
              textAnchor="start"
              alignmentBaseline="central"
              fontSize={w / 25}
            >
              {d.value}
            </text>
            <text
              x={xScale(0) - 5}
              y={y + yScale.bandwidth() / 1.8}
              textAnchor="end"
              alignmentBaseline="central"
              fontSize={w / 25}
            >
              {d.name}
            </text>
          </g>
        );
      }),
    [data, xScale, yScale]
  );

  const xAxis = useMemo(
    () =>
      xScale.ticks(2).map((value, i) => (
        <g key={i}>
          <text
            x={xScale(value)}
            y={-5}
            textAnchor="middle"
            alignmentBaseline="central"
            fontSize={w / 25}
          >
            {value}
          </text>
        </g>
      )),
    [xScale]
  );

  return (
    <div className="bg-[#EFEBE5] p-3">
      <svg
        width={w}
        height={h}
        className={cn([
          "hidden",
          !data[0].value && !data[1].value && !data[2].value,
        ])}
      >
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {xAxis}
          {allShapes}
        </g>
      </svg>
      <div>
        <p style={textStyle}>Total Reviews : {data[0].value + data[1].value}</p>
        <p style={textStyle}>Positive Reviews : {data[0].value}</p>
        <p style={textStyle}>Negative Reviews : {data[1].value}</p>
        <p style={textStyle}>Comments : {data[2].value}</p>
      </div>
    </div>
  );
};

export default BarChart;
