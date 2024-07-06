"use client";
import { Category } from "./StackArray";
import { items } from "./StackArray";

const NavbarStackItem = () => {
  return items.map((item) => <Category item={item} key={item.id} />);
};

export default NavbarStackItem;

export type NavbarItem = {
  id: number;
  alias: string;
  title: string;
  icon?: JSX.Element;
  endIcon?: JSX.Element;
  children?: NavbarItem[];
};
