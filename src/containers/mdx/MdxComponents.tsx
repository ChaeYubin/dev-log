import { Callout } from "./Callout";
import Link from "./Link";
import Image from "./Image";
import { MDXComponents } from "mdx/types";

export const MdxComponents: MDXComponents = {
  a: Link as any,
  img: Image as any,
  Callout,
};
