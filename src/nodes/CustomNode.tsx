import { memo, useCallback, useState } from "react";
import { Handle, NodeProps, NodeToolbar, Position } from "reactflow";
import BarChart from "./BarChart";

export default memo(({ data }: NodeProps) => {
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
        <BarChart data={data.reviews} />
      </NodeToolbar>
      <Handle type="target" position={Position.Left} />
      <div
        className="label__wrapper"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
});
