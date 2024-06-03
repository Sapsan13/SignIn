import {
  NextJS,
  TS,
  JS,
  Figma,
  ArrowRight24,
  XPECTUK,
  Galachka,
} from "@/components/Images";
import styled from "styled-components";
import { RightPlanData } from "./RightPlanDataArray";
import StandartExtendedSwitch from "./StandartExtendedSwitch";

const RightPlanMain = ({ items, stateIndex }: RightPlanMainProps) => {
  // const [inNdex, setIndex] = useState(0);
  {
    console.log(stateIndex);
  }
  return (
    <SkeletonPlanWrapper>
      {items.map((item, index) => (
        <SkeletonPlanMainWrapper
          key={item.id}
          stateIndex={stateIndex}
          index={index}
        >
          <SkeletonLicenseSubs>
            <SkeletonLicense>{item.license}</SkeletonLicense>
            <SkeletonSubs title={item.subscriptionType}>
              {item.subscriptionType}
            </SkeletonSubs>
          </SkeletonLicenseSubs>
          <SkeletonIconsBlock>
            <SkeletonItem>{IconMapping[item.icons]}</SkeletonItem>
          </SkeletonIconsBlock>
          <SkeletonItemsBlock>
            {item.elements.map((subItem) => {
              if (subItem.type === "label") {
                return (
                  <SkeletonTextRow key={subItem.id}>
                    <SkeletonTextVX>
                      {subItem.done ? <Galachka /> : <XPECTUK />}
                    </SkeletonTextVX>
                    <SkeletonItemText key={subItem.id} isDone={subItem.done}>
                      {subItem.label}
                    </SkeletonItemText>
                  </SkeletonTextRow>
                );
              }
              if (subItem.type === "divider") {
                return (
                  <SkeletonItem key={subItem.id}>
                    {subItem.content}
                  </SkeletonItem>
                );
              }
            })}
          </SkeletonItemsBlock>
          <SkeletonLearnWrapper>
            <SkeletonLearnMore>
              Learn More <ArrowRight24 />
            </SkeletonLearnMore>
          </SkeletonLearnWrapper>
        </SkeletonPlanMainWrapper>
      ))}
    </SkeletonPlanWrapper>
  );
};
export default RightPlanMain;

const subItems = ["Standart", "Standart Plus", "Extended"] as const;
export type SubItem = (typeof subItems)[number];
const colorMapping: Record<SubItem, string> = {
  Standart: "rgba(0, 167, 111, 1)",
  "Standart Plus": "rgba(255, 171, 0, 1)",
  Extended: "rgba(255, 86, 48, 1)",
};

const iconItems = ["One", "Two", "Three", "Four"] as const;
export type IconsItem = (typeof iconItems)[number];
const IconMapping: Record<IconsItem, JSX.Element> = {
  One: <Figma />,
  Two: (
    <>
      <Figma /> <JS />
    </>
  ),
  Three: (
    <>
      <Figma /> <JS /> <TS />
    </>
  ),
  Four: (
    <>
      <Figma /> <JS /> <TS /> <NextJS />
    </>
  ),
};

const SkeletonPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 120px 0 120px;
`;

const SkeletonPlanMainWrapper = styled.div<{
  stateIndex: number;
  index: number;
}>`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 80px 80px 40px 40px;
  gap: 40px;
  border: 1px dashed rgba(145, 158, 171, 0.2);
  border-left: none;
  border-left: 1px dashed rgba(145, 158, 171, 0.2);
  @media (max-width: 600px) {
    display: ${(props) => (props.stateIndex === props.index ? "flex" : "none")};
  }
`;

const SkeletonLicenseSubs = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 304px; */
  width: 100%;
  gap: 40px;
`;

const SkeletonLicense = styled.div`
  display: flex;
  font-family: Public Sans;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  top: 0;
  color: rgba(145, 158, 171, 1);
`;

const SkeletonSubs = styled.div<{ title: SubItem }>`
  display: flex;
  flex-direction: row;
  position: relative;
  /* max-width: 304px; */
  width: 100%;
  font-family: Public Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: rgba(33, 43, 54, 1);
  bottom: 0;
  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 8px;
    bottom: 5px;
    left: 0;
    opacity: 0.48;
    background-color: ${(props) => colorMapping[props.title]};
  }
`;

const SkeletonIconsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* max-width: 304px; */
  width: 100%;
  gap: 20px;
`;

const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  /* max-width: 304px; */
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  gap: 16px;
  text-align: left;
`;

const SkeletonItemText = styled.div<{ isDone: boolean }>`
  display: flex;
  align-items: center;
  font-family: Public Sans;
  font-size: 14px;
  font-weight: 400;
  gap: 16px;
  text-align: left;
  text-decoration: ${(props) =>
    props.isDone === true ? "none" : "line-through"};
  text-decoration-color: rgba(145, 158, 171, 1);
  color: ${(props) =>
    props.isDone === true ? "#000" : " rgba(145, 158, 171, 1)"};
`;

const SkeletonTextRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 6px;
  padding-left: 18px;
`;

const SkeletonTextVX = styled.div`
  display: flex;
  position: absolute;
  bottom: 4px;
  left: -2px;
`;

const SkeletonItemsBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const SkeletonLearnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const SkeletonLearnMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  font-family: Public Sans;
  font-size: 13px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  width: fit-content;
  white-space: nowrap;
  right: 0;
  gap: 8px;
  color: rgba(33, 43, 54, 1);
`;

export interface RightPlanMainProps {
  items: RightPlanData[];
  // icons: IconsItem;
  stateIndex: number;
}
