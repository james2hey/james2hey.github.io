import React from "react";
import { Link } from "gatsby";
import "../scss/_nav.scss";

export const Nav: React.FC = () => {
  return (
    <nav className={"nav"}>
        <div className={'nav__links'}>
          <Link className={"nav__links__link"} to={"/"}>Portfolio</Link>
          <Link className={"nav__links__link"} to="/blog">Blog</Link>
        </div>
      <div />
    </nav>
  );
};
