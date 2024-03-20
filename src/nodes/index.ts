import { Node, NodeTypes, Position } from "reactflow";
import CustomNode from "./CustomNode";

export const initialNodes: Node[] = [
  {
    id: "mind_map",
    type: "input",
    position: { x: -100, y: 200 },
    sourcePosition: Position.Right,
    data: { label: "Manufacturing Process" },
    style: { backgroundColor: "black", color: "white" },
  },
  {
    id: "research",
    position: { x: 100, y: 0 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Research",
      reviews: [
        { name: "Positive", value: 13451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 10463 },
      ],
    },
  },
  {
    id: "planning",
    position: { x: 100, y: 100 },
    type: "customNode",
    style: { backgroundColor: "#82B3E8" },
    data: {
      label: "Planning",
      reviews: [
        { name: "Positive", value: 12451 },
        { name: "Negative", value: 10839 },
        { name: "Comments", value: 7463 },
      ],
    },
  },
  {
    id: "designing",
    position: { x: 100, y: 200 },
    type: "customNode",
    style: { backgroundColor: "#E96343" },
    data: {
      label: "Designing",
      reviews: [
        { name: "Positive", value: 21451 },
        { name: "Negative", value: 15839 },
        { name: "Comments", value: 12463 },
      ],
    },
  },
  {
    id: "manufacturing",
    position: { x: 100, y: 300 },
    type: "customNode",
    style: { backgroundColor: "#E8919D" },
    data: {
      label: "Manufacturing",
      reviews: [
        { name: "Positive", value: 54451 },
        { name: "Negative", value: 53839 },
        { name: "Comments", value: 52463 },
      ],
    },
  },
  {
    id: "sales_marketing",
    position: { x: 100, y: 400 },
    type: "customNode",
    style: { backgroundColor: "#A684EB" },
    data: {
      label: "Sales Marketing",
      reviews: [
        { name: "Positive", value: 3451 },
        { name: "Negative", value: 1839 },
        { name: "Comments", value: 463 },
      ],
    },
  },
  {
    id: "external",
    position: { x: 300, y: -25 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "External",
      reviews: [
        { name: "Positive", value: 1345 },
        { name: "Negative", value: 1183 },
        { name: "Comments", value: 1046 },
      ],
    },
  },
  {
    id: "internal",
    position: { x: 300, y: 25 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Internal",
      reviews: [
        { name: "Positive", value: 134 },
        { name: "Negative", value: 118 },
        { name: "Comments", value: 104 },
      ],
    },
  },
  {
    id: "prd",
    position: { x: 300, y: 75 },
    type: "customNode",
    style: { backgroundColor: "#82B3E8" },
    data: {
      label: "PRD",
      reviews: [
        { name: "Positive", value: 24513 },
        { name: "Negative", value: 18392 },
        { name: "Comments", value: 10631 },
      ],
    },
  },
  {
    id: "specs",
    position: { x: 300, y: 125 },
    type: "customNode",
    style: { backgroundColor: "#82B3E8" },
    data: {
      label: "Specs",
      reviews: [
        { name: "Positive", value: 12451 },
        { name: "Negative", value: 11139 },
        { name: "Comments", value: 10263 },
      ],
    },
  },
  {
    id: "hardware",
    position: { x: 300, y: 175 },
    type: "customNode",
    style: { backgroundColor: "#E96343" },
    data: {
      label: "Hardware",
      reviews: [
        { name: "Positive", value: 13451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 10463 },
      ],
    },
  },
  {
    id: "software",
    position: { x: 300, y: 225 },
    type: "customNode",
    style: { backgroundColor: "#E96343" },
    data: {
      label: "Software",
      reviews: [
        { name: "Positive", value: 1345 },
        { name: "Negative", value: 1139 },
        { name: "Comments", value: 1043 },
      ],
    },
  },
  {
    id: "material",
    position: { x: 300, y: 275 },
    type: "customNode",
    style: { backgroundColor: "#E8919D" },
    data: {
      label: "Material",
      reviews: [
        { name: "Positive", value: 1451 },
        { name: "Negative", value: 1839 },
        { name: "Comments", value: 1463 },
      ],
    },
  },
  {
    id: "production",
    position: { x: 300, y: 325 },
    type: "customNode",
    style: { backgroundColor: "#E8919D" },
    data: {
      label: "Production",
      reviews: [
        { name: "Positive", value: 18451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 11463 },
      ],
    },
  },
  {
    id: "online",
    position: { x: 300, y: 375 },
    type: "customNode",
    style: { backgroundColor: "#A684EB" },
    data: {
      label: "Online",
      reviews: [
        { name: "Positive", value: 1341 },
        { name: "Negative", value: 1139 },
        { name: "Comments", value: 1063 },
      ],
    },
  },
  {
    id: "dealership",
    position: { x: 300, y: 425 },
    type: "customNode",
    style: { backgroundColor: "#A684EB" },
    data: {
      label: "Dealership",
      reviews: [
        { name: "Positive", value: 34519 },
        { name: "Negative", value: 18392 },
        { name: "Comments", value: 14633 },
      ],
    },
  },
  {
    id: "b2c",
    position: { x: 500, y: -50 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "B2C",
      reviews: [
        { name: "Positive", value: 23451 },
        { name: "Negative", value: 21839 },
        { name: "Comments", value: 20463 },
      ],
    },
  },
  {
    id: "b2b",
    position: { x: 500, y: 0 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "B2B",
      reviews: [
        { name: "Positive", value: 23451 },
        { name: "Negative", value: 21839 },
        { name: "Comments", value: 12463 },
      ],
    },
  },
  {
    id: "online_2",
    position: { x: 700, y: -125 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Online",
      reviews: [
        { name: "Positive", value: 53451 },
        { name: "Negative", value: 51839 },
        { name: "Comments", value: 40463 },
      ],
    },
  },
  {
    id: "interview",
    position: { x: 700, y: -75 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Interview",
      reviews: [
        { name: "Positive", value: 53451 },
        { name: "Negative", value: 51839 },
        { name: "Comments", value: 50463 },
      ],
    },
  },
  {
    id: "public_data",
    position: { x: 700, y: -25 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Public Data",
      reviews: [
        { name: "Positive", value: 83451 },
        { name: "Negative", value: 81839 },
        { name: "Comments", value: 80463 },
      ],
    },
  },
  {
    id: "health",
    position: { x: 700, y: 25 },
    type: "customNode",
    style: { backgroundColor: "#2A4494", color: "white" },
    data: {
      label: "Health",
      reviews: [
        { name: "Positive", value: 93451 },
        { name: "Negative", value: 91839 },
        { name: "Comments", value: 90463 },
      ],
    },
  },
] satisfies Node[];

export const nodeTypes = {
  customNode: CustomNode,
} satisfies NodeTypes;
