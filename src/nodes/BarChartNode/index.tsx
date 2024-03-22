import { memo, useCallback, useState } from "react";
import { Handle, NodeProps, NodeToolbar, Position } from "reactflow";

import BarChart from "./BarChart";
import EditButton from "@components/EditButton";
import { useModalStore } from "@store/index";

export default memo(({ data }: NodeProps) => {
  const [active, setActive] = useState(false);
  const setOpenModal = useModalStore((state) => state.setOpenModal);
  const setNodeData = useModalStore((state) => state.setNodeData);

  const handleMouseEnter = useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  const handleClick = useCallback(() => {
    setNodeData({
      name: data.label || " ",
      positive: data.reviews[0].value || 0,
      negative: data.reviews[1].value || 0,
      comments: data.reviews[2].value || 0,
    });
    setOpenModal(true);
  }, []);

  return (
    <div
      className="w-[150px] h-10 flex items-center justify-center text-center cursor-grab"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NodeToolbar isVisible={active} position={Position.Top}>
        <BarChart data={data.reviews} />
      </NodeToolbar>
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
      <p className="text-xs">{data.label}</p>
      <EditButton isVisible={active} onClick={handleClick} />
      <Handle type="source" position={Position.Right} className="w-2 h-2" />
    </div>
  );
});
