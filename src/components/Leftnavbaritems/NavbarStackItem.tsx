"use client";
import { Category } from "./StackArray";
import { items } from "./StackArray";

const NavbarStackItem = () => {
  return items.map((item) => <Category item={item} key={item.id} />);
};

export default NavbarStackItem;

export type LeftNavbarItem = {
  id: number;
  alias: string;
  title: string;
  icon?: string;
  endIcon?: () => React.ReactNode;
  children?: LeftNavbarItem[];
};
