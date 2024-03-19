import { useMemo } from "react";
import * as d3 from "d3";

const BAR_PADDING = 0.1;

type BarChartProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

const BarChart = ({ width, height, data }: BarChartProps) => {
  const MARGIN = {
    top: width / 10,
    right: width / 7,
    bottom: width / 10,
    left: width / 4.5,
  };

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const textStyle = { fontSize: width / 19, marginTop: height / -8 };

  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
  
  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  const xScale = useMemo(() => {
    const [_, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth]);
  }, [data, width]);

  const allShapes = data.map((d, i) => {
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
          y={y + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={width / 25}
        >
          {d.value}
        </text>
        <text
          x={xScale(0) - 5}
          y={y + yScale.bandwidth() / 2}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={width / 25}
        >
          {d.name}
        </text>
      </g>
    );
  });

  const xAxis = xScale.ticks(2).map((value, i) => (
    <g key={i}>
      <text
        x={xScale(value)}
        y={-5}
        textAnchor="middle"
        alignmentBaseline="central"
        fontSize={width / 25}
      >
        {value}
      </text>
    </g>
  ));

  return (
    <div className="bar-chart__wrapper">
      <svg width={width} height={height}>
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
