"use client";
import styled from "styled-components";
import { Category } from "./StackArray";
import { items } from "./StackArray";

// all div properties & added ones <"div"> &
// type LeftNavbarItem = ComponentProps<"div"> & {

export type LeftNavbarItem = {
  id: number;
  alias: string;
  title: string;
  icon?: string;
  endIcon?: React.ReactElement;
  children?: LeftNavbarItem[];
};

const SkeletonNavTitle = styled.div`
  color: #000000;
  font-family: Public Sans;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const NavbarStackItem = () => {
  return items.map((item) => <Category item={item} key={item.id} />);
};

export default NavbarStackItem;
