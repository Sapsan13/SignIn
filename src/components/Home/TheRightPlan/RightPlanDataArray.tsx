import styled from "styled-components";
import { IconsItem, SubItem } from "./RightPlanMainContent";

export interface RightPlanData {
  id: string;
  icons: IconsItem;
  license: string;
  subscriptionType: SubItem;
  elements: (ItemLabel | ItemDivider)[];
  learnMore: string;
}

export type ItemLabel = {
  id: string;
  type: "label";
  label: string;
  done: boolean;
};

export type ItemDivider = {
  id: string;
  type: "divider";
  content: JSX.Element;
};

const DashLine = styled.div`
  align-items: center;
  justify-content: center;
  height: 2px;
  max-width: 304px;
  width: 100%;
  border-bottom: 1px dashed rgba(145, 158, 171, 0.2);
`;

export const RightPlanDataArray: RightPlanData[] = [
  {
    id: "0",
    license: "Licsense",
    subscriptionType: "Standart",
    icons: "One",
    elements: [
      { id: "01", type: "label", label: "One end products", done: true },
      { id: "02", type: "label", label: "12 months updates", done: true },
      { id: "03", type: "label", label: "6 months of support", done: true },
      { id: "04", type: "divider", content: <DashLine /> },
      { id: "05", type: "label", label: "JavaScript version", done: false },
      { id: "06", type: "label", label: "TypeScript version", done: false },
      { id: "07", type: "label", label: "Design Resources", done: false },
    ],
    learnMore: "LearnMore",
  },
  {
    id: "1",
    license: "Licsense",
    subscriptionType: "Standart Plus",
    icons: "Two",
    elements: [
      { id: "11", type: "label", label: "One end products", done: true },
      { id: "12", type: "label", label: "12 months updates", done: true },
      { id: "13", type: "label", label: "6 months of support", done: true },
      { id: "14", type: "divider", content: <DashLine /> },
      { id: "15", type: "label", label: "JavaScript version", done: true },
      { id: "16", type: "label", label: "TypeScript version", done: true },
      { id: "17", type: "label", label: "Design Resources", done: false },
    ],
    learnMore: "LearnMore",
  },
  {
    id: "2",
    license: "Licsense",
    subscriptionType: "Extended",
    icons: "Three",
    elements: [
      { id: "21", type: "label", label: "One end products", done: true },
      { id: "23", type: "label", label: "12 months updates", done: true },
      { id: "24", type: "label", label: "6 months of support", done: true },
      { id: "25", type: "divider", content: <DashLine /> },
      { id: "26", type: "label", label: "JavaScript version", done: true },
      { id: "27", type: "label", label: "TypeScript version", done: true },
      { id: "28", type: "label", label: "Design Resources", done: true },
      { id: "29", type: "label", label: "Commercial applications", done: true },
    ],
    learnMore: "LearnMore",
  },
];
