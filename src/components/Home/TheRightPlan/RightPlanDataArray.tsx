import styled from "styled-components";
import { IconsItem, SubItem } from "./RightPlanMain";

export interface RightPlanData {
  id: string;
  icons: IconsItem;
  license: string;
  subscriptionType: SubItem;
  elements: (ItemLabel | ItemDivider)[];
  learnMore: string;
}

export type ItemLabel = {
  type: "label";
  label: string;
  done: boolean;
};

export type ItemDivider = {
  type: "divider";
  content: JSX.Element;
};

const SkeletonDashLine = styled.div`
  align-items: center;
  justify-content: center;
  height: 2px;
  max-width: 304px;
  width: 100%;
  border-bottom: 1px dashed rgba(145, 158, 171, 0.2);
`;

export const RightPlanDataArray: RightPlanData[] = [
  {
    id: "1",
    license: "Licsense",
    subscriptionType: "Standart",
    icons: "One",
    elements: [
      { type: "label", label: "One end products", done: true },
      { type: "label", label: "12 months updates", done: true },
      { type: "label", label: "6 months of support", done: true },
      { type: "divider", content: <SkeletonDashLine /> },
      { type: "label", label: "JavaScript version", done: true },
      { type: "label", label: "TypeScript version", done: false },
      { type: "label", label: "Design Resources", done: false },
      { type: "label", label: "Commercial applications", done: false },
    ],
    learnMore: "LearnMore",
  },
  {
    id: "2",
    license: "Licsense",
    subscriptionType: "Standart Plus",
    icons: "Two",
    elements: [
      { type: "label", label: "One end products", done: true },
      { type: "label", label: "12 months updates", done: true },
      { type: "label", label: "6 months of support", done: true },
      { type: "divider", content: <SkeletonDashLine /> },
      { type: "label", label: "JavaScript version", done: true },
      { type: "label", label: "TypeScript version", done: true },
      { type: "label", label: "Design Resources", done: true },
      { type: "label", label: "Commercial applications", done: false },
    ],
    learnMore: "LearnMore",
  },
  {
    id: "3",
    license: "Licsense",
    subscriptionType: "Extended",
    icons: "Three",
    elements: [
      { type: "label", label: "One end products", done: true },
      { type: "label", label: "12 months updates", done: true },
      { type: "label", label: "6 months of support", done: true },
      { type: "divider", content: <SkeletonDashLine /> },
      { type: "label", label: "JavaScript version", done: true },
      { type: "label", label: "TypeScript version", done: true },
      { type: "label", label: "Design Resources", done: true },
      { type: "label", label: "Commercial applications", done: true },
    ],
    learnMore: "LearnMore",
  },
];
