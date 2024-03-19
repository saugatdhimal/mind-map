import { memo, useCallback, useState } from "react";
import {
  Handle,
  NodeProps,
  NodeToolbar,
  Position,
  useViewport,
} from "reactflow";
import BarChart from "./BarChart";


const barChartData = [
  { name: "Positive", value: 13451 },
  { name: "Negative", value: 11839 },
  { name: "Comments", value: 10463 },
];

export default memo(({ data }: NodeProps) => {
  const { zoom } = useViewport();
  const [active, setActive] = useState(false);

  const onMouseEnter = useCallback(() => {
    setActive(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      <NodeToolbar isVisible={active} position={Position.Top}>
        <BarChart width={200 * zoom} height={100 * zoom} data={barChartData} />
      </NodeToolbar>
      <Handle type="target" position={Position.Left} />
      <div
        className="label__wrapper"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
});
