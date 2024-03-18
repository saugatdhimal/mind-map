import { useCallback, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  updateEdge,
  useReactFlow,
  Position,
  OnConnect,
  OnConnectStart,
  Connection,
  Edge,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes } from "./nodes";
import { initialEdges, markerEndObj, styleObj } from "./edges";

let id = 1;
const getId = () => `${id++}`;

export default function App() {
  const connectingNodeId = useRef<string | null>(null);
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

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
        const style = nodes.find(
          (x) => x.id == connectingNodeId.current
        )?.style;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          data: { label: `Node ${id}` },
          style: style,
        };

        const newEdge = {
          id,
          source: connectingNodeId.current,
          target: id,
          style: styleObj,
          markerEnd: markerEndObj,
          type: "smoothstep",
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

  const onEdgeUpdateEnd = useCallback((_: any, edge: { id: string }) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
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
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
