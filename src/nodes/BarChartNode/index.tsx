import { ChangeEvent, memo, useCallback, useState } from "react";
import {
  Handle,
  Node,
  NodeProps,
  NodeToolbar,
  Position,
  useEdges,
  useNodes,
  useReactFlow,
} from "reactflow";

import Input from "@components/Input";
import EditButton from "@components/EditButton";
import DeleteButton from "@components/DeleteButton";
import CloseButton from "@components/CloseButton";
import BarChart from "@components/BarChart";
import cn from "@utils/cn";

export default memo(({ id, data }: NodeProps) => {
  const nodes = useNodes();
  const edges = useEdges();
  const { setNodes, setEdges } = useReactFlow();
  const [active, setActive] = useState(false);
  const [editLabel, setEditLabel] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  const handleDeleteBtn = useCallback(() => {
    setNodes(() => nodes.filter((node) => node.id !== id));
    setEdges(() => edges.filter((edge) => edge.source || edge.target !== id));
  }, [nodes, edges]);

  const handleEditBtn = useCallback(() => {
    setEditLabel(true);
  }, []);

  const handleCloseBtn = useCallback(() => {
    setEditLabel(false);
  }, []);

  const handleBgColor = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNodes(() =>
        nodes.map((node: Node) => {
          if (node.id == id) {
            node.data = {
              ...node.data,
              bgColor: e.target.value,
            };
          }
          return node;
        })
      );
    },
    [nodes]
  );

  const handleLabelColor = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNodes(() =>
        nodes.map((node: Node) => {
          if (node.id == id) {
            node.data = {
              ...node.data,
              textColor: e.target.value,
            };
          }
          return node;
        })
      );
    },
    [nodes]
  );

  const handleLabelChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNodes(() =>
        nodes.map((node: Node) => {
          if (node.id == id) {
            node.data = {
              ...node.data,
              label: e.target.value,
            };
          }
          return node;
        })
      );
    },
    [nodes]
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: data.bgColor }}
      className="w-[150px] h-10 flex items-center justify-center text-center cursor-grab rounded-sm"
    >
      <NodeToolbar isVisible={active && !editLabel} position={Position.Top}>
        <BarChart data={data.reviews} />
      </NodeToolbar>
      <Handle
        type="target"
        position={Position.Left}
        className={cn(["opacity-0", !active || editLabel], "w-2.5 h-2.5")}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={cn(["opacity-0", !active || editLabel], "w-2.5 h-2.5")}
      />
      <p className="text-md" style={{ color: data.textColor }}>
        {data.label}
      </p>
      <Input
        type="color"
        isVisible={editLabel}
        defaultValue={data.bgColor}
        onChange={handleBgColor}
        className="nodrag w-3 h-3 absolute top-0.5 right-4 bg-white rounded-sm cursor-pointer z-20"
      />
      <Input
        type="color"
        isVisible={editLabel}
        defaultValue={data.textColor}
        onChange={handleLabelColor}
        className="nodrag w-3 h-3 absolute top-0.5 right-8 bg-white rounded-sm cursor-pointer z-20"
      />
      <Input
        type="text"
        isVisible={editLabel}
        defaultValue={data.label}
        maxLength={15}
        onChange={handleLabelChange}
        style={{ backgroundColor: data.bgColor, color: data.textColor }}
        className="w-[150px] h-10 absolute inset-0 rounded-sm nodrag px-2 text-md text-center z-10"
      />
      <DeleteButton
        isVisible={active && !editLabel}
        onClick={handleDeleteBtn}
      />
      <EditButton isVisible={active && !editLabel} onClick={handleEditBtn} />
      <CloseButton isVisible={editLabel} onClick={handleCloseBtn} />
    </div>
  );
});
