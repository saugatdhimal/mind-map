import { create } from "zustand";

type State = {
  openModal: boolean;
  nodeData: {
    name: string;
    positive: number;
    negative: number;
    comments: number;
  };
};

type Action = {
  setOpenModal: (openModal: State["openModal"]) => void;
  setNodeData: (nodeData: State["nodeData"]) => void;
};

export const useModalStore = create<State & Action>((set) => ({
  openModal: false,
  setOpenModal: (openModal) => set(() => ({ openModal: openModal })),
  nodeData: { name: "", positive: 0, negative: 0, comments: 0 },
  setNodeData: (nodeData) => set(() => ({ nodeData: nodeData })),
}));
