import { Node, NodeTypes} from "reactflow";
import BarChartNode from "./BarChartNode";

export const initialNodes: Node[] = [
  {
    id: "mind_map",
    type: "barChartNode",
    position: { x: 0, y: 200 },
    data: {
      label: "Process",
      reviews: [
        { name: "Positive", value: 14451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 9463 },
      ],
      bgColor: "#00CADC",
      textColor: "#ffffff",
    },
  },
  {
    id: "research",
    position: { x: 300, y: 0 },
    type: "barChartNode",
    data: {
      label: "Research",
      reviews: [
        { name: "Positive", value: 13451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 10463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "planning",
    position: { x: 300, y: 100 },
    type: "barChartNode",
    data: {
      label: "Planning",
      reviews: [
        { name: "Positive", value: 12451 },
        { name: "Negative", value: 10839 },
        { name: "Comments", value: 7463 },
      ],
      bgColor: "#82B3E8",
      textColor: "#000000",
    },
  },
  {
    id: "designing",
    position: { x: 300, y: 200 },
    type: "barChartNode",
    data: {
      label: "Designing",
      reviews: [
        { name: "Positive", value: 21451 },
        { name: "Negative", value: 15839 },
        { name: "Comments", value: 12463 },
      ],
      bgColor: "#E96343",
      textColor: "#000000",
    },
  },
  {
    id: "manufacturing",
    position: { x: 300, y: 300 },
    type: "barChartNode",
    data: {
      label: "Manufacturing",
      reviews: [
        { name: "Positive", value: 54451 },
        { name: "Negative", value: 53839 },
        { name: "Comments", value: 52463 },
      ],
      bgColor: "#E8919D",
      textColor: "#000000",
    },
  },
  {
    id: "sales_marketing",
    position: { x: 300, y: 400 },
    type: "barChartNode",
    data: {
      label: "Sales Marketing",
      reviews: [
        { name: "Positive", value: 3451 },
        { name: "Negative", value: 1839 },
        { name: "Comments", value: 463 },
      ],
      bgColor: "#A684EB",
      textColor: "#000000",
    },
  },
  {
    id: "external",
    position: { x: 600, y: -25 },
    type: "barChartNode",
    data: {
      label: "External",
      reviews: [
        { name: "Positive", value: 1345 },
        { name: "Negative", value: 1183 },
        { name: "Comments", value: 1046 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "internal",
    position: { x: 600, y: 25 },
    type: "barChartNode",
    data: {
      label: "Internal",
      reviews: [
        { name: "Positive", value: 134 },
        { name: "Negative", value: 118 },
        { name: "Comments", value: 104 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "prd",
    position: { x: 600, y: 75 },
    type: "barChartNode",
    data: {
      label: "PRD",
      reviews: [
        { name: "Positive", value: 24513 },
        { name: "Negative", value: 18392 },
        { name: "Comments", value: 10631 },
      ],
      bgColor: "#82B3E8",
      textColor: "#000000",
    },
  },
  {
    id: "specs",
    position: { x: 600, y: 125 },
    type: "barChartNode",
    data: {
      label: "Specs",
      reviews: [
        { name: "Positive", value: 12451 },
        { name: "Negative", value: 11139 },
        { name: "Comments", value: 10263 },
      ],
      bgColor: "#82B3E8",
      textColor: "#000000",
    },
  },
  {
    id: "hardware",
    position: { x: 600, y: 175 },
    type: "barChartNode",
    data: {
      label: "Hardware",
      reviews: [
        { name: "Positive", value: 13451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 10463 },
      ],
      bgColor: "#E96343",
      textColor: "#000000",
    },
  },
  {
    id: "software",
    position: { x: 600, y: 225 },
    type: "barChartNode",
    data: {
      label: "Software",
      reviews: [
        { name: "Positive", value: 1345 },
        { name: "Negative", value: 1139 },
        { name: "Comments", value: 1043 },
      ],
      bgColor: "#E96343",
      textColor: "#000000",
    },
  },
  {
    id: "material",
    position: { x: 600, y: 275 },
    type: "barChartNode",
    data: {
      label: "Material",
      reviews: [
        { name: "Positive", value: 1451 },
        { name: "Negative", value: 1839 },
        { name: "Comments", value: 1463 },
      ],
      bgColor: "#E8919D",
      textColor: "#000000",
    },
  },
  {
    id: "production",
    position: { x: 600, y: 325 },
    type: "barChartNode",
    data: {
      label: "Production",
      reviews: [
        { name: "Positive", value: 18451 },
        { name: "Negative", value: 11839 },
        { name: "Comments", value: 11463 },
      ],
      bgColor: "#E8919D",
      textColor: "#000000",
    },
  },
  {
    id: "online",
    position: { x: 600, y: 375 },
    type: "barChartNode",
    data: {
      label: "Online",
      reviews: [
        { name: "Positive", value: 1341 },
        { name: "Negative", value: 1139 },
        { name: "Comments", value: 1063 },
      ],
      bgColor: "#A684EB",
      textColor: "#000000",
    },
  },
  {
    id: "dealership",
    position: { x: 600, y: 425 },
    type: "barChartNode",
    data: {
      label: "Dealership",
      reviews: [
        { name: "Positive", value: 34519 },
        { name: "Negative", value: 18392 },
        { name: "Comments", value: 14633 },
      ],
      bgColor: "#A684EB",
      textColor: "#000000",
    },
  },
  {
    id: "b2c",
    position: { x: 900, y: -50 },
    type: "barChartNode",
    data: {
      label: "B2C",
      reviews: [
        { name: "Positive", value: 23451 },
        { name: "Negative", value: 21839 },
        { name: "Comments", value: 20463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "b2b",
    position: { x: 900, y: 0 },
    type: "barChartNode",
    data: {
      label: "B2B",
      reviews: [
        { name: "Positive", value: 23451 },
        { name: "Negative", value: 21839 },
        { name: "Comments", value: 12463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "online_2",
    position: { x: 1200, y: -125 },
    type: "barChartNode",
    data: {
      label: "Online",
      reviews: [
        { name: "Positive", value: 53451 },
        { name: "Negative", value: 51839 },
        { name: "Comments", value: 40463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "interview",
    position: { x: 1200, y: -75 },
    type: "barChartNode",
    data: {
      label: "Interview",
      reviews: [
        { name: "Positive", value: 53451 },
        { name: "Negative", value: 51839 },
        { name: "Comments", value: 50463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "public_data",
    position: { x: 1200, y: -25 },
    type: "barChartNode",
    data: {
      label: "Public Data",
      reviews: [
        { name: "Positive", value: 83451 },
        { name: "Negative", value: 81839 },
        { name: "Comments", value: 80463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
  {
    id: "health",
    position: { x: 1200, y: 25 },
    type: "barChartNode",
    data: {
      label: "Health",
      reviews: [
        { name: "Positive", value: 93451 },
        { name: "Negative", value: 91839 },
        { name: "Comments", value: 90463 },
      ],
      bgColor: "#2A4494",
      textColor: "#ffffff",
    },
  },
] satisfies Node[];

export const nodeTypes = {
  barChartNode: BarChartNode,
} satisfies NodeTypes;
