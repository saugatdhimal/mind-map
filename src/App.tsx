import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  updateEdge,
  useReactFlow,
  OnConnect,
  OnConnectStart,
  Connection,
  Edge,
  ControlButton,
} from "reactflow";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, markerEndObj, styleObj } from "./edges";

import "reactflow/dist/style.css";

let id = 1;
const getId = () => `${id++}`;
const edgeTypes = ["straight", "step", "smoothstep", "simplebezier"];

export default function App() {
  const edgeUpdateSuccessful = useRef(true);
  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const [edgeId, setEdgeId] = useState(0);

  const onConnect: OnConnect = useCallback(
    (connection) => {
      connectingNodeId.current = null;
      setEdges((edges) =>
        addEdge(
          {
            ...connection,
            style: styleObj,
            markerEnd: markerEndObj,
            type: "smoothstep",
          },
          edges
        )
      );
    },
    [setEdges]
  );

  const onConnectStart: OnConnectStart = useCallback((_, params) => {
    connectingNodeId.current = params.nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event: any) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId();
        const data = nodes.find((x) => x.id == connectingNodeId.current)?.data;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: {
            label: `Node ${id}`,
            reviews: [
              { name: "Positive", value: 0 },
              { name: "Negative", value: 0 },
              { name: "Comments", value: 0 },
            ],
            bgColor: data.bgColor,
            textColor: data.textColor,
          },
          type: "barChartNode",
        };

        const newEdge = {
          id: `${connectingNodeId.current}->${id}`,
          source: connectingNodeId.current,
          target: id,
          style: styleObj,
          markerEnd: markerEndObj,
          type: "step",
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat(newEdge));
      }
    },
    [screenToFlowPosition, nodes]
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els) => updateEdge(oldEdge, newConnection, els));
    },
    []
  );

  const onEdgeUpdateEnd = useCallback((_: any, edge: Edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const handleEdgeType = useCallback(() => {
    setEdges((eds) =>
      eds.map((e) => {
        return {
          ...e,
          type: edgeTypes[edgeId],
        };
      })
    );
    if (edgeId == edgeTypes.length - 1) {
      setEdgeId(0);
    } else setEdgeId(edgeId + 1);
  }, [edgeId, edgeTypes]);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onEdgeUpdate={onEdgeUpdate}
      onEdgeUpdateStart={onEdgeUpdateStart}
      onEdgeUpdateEnd={onEdgeUpdateEnd}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      fitView
    >
      <Background />
      <MiniMap pannable zoomable />
      <Controls>
        <ControlButton onClick={handleEdgeType}>
          <svg viewBox="0 0 20 20">
            <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
          </svg>
        </ControlButton>
      </Controls>
    </ReactFlow>
  );
}
