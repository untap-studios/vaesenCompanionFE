import { Link as MUILink } from "@mui/material";
import React from "react";
import { Link as BaseLink } from "react-router";

type NavLinkProps = {
  linkText: string;
  path: string;
};

const NavLink = (props: NavLinkProps) => {
  const { linkText, path } = props;

  return (
    <MUILink
      className="nav-link"
      component={BaseLink}
      to={path}
      color="#fff"
    >
      {linkText}
    </MUILink>
  );
};

export default NavLink;
