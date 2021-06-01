import React from "react";
import MuiLink from "@material-ui/core/Link";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  children: React.ReactNode;
  to: string;
  color?: "primary" | "secondary";
}

const Link = React.forwardRef(function Link(props: Props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
