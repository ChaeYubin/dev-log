import { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

const Link = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <a href={href.toString() || ""} {...props} target="_blank">
      {children}
    </a>
  );
};

export default Link;
