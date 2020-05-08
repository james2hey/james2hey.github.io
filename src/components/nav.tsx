import React from "react";
import { Link } from "gatsby";
import profileImage from '../assets/images/profile-picture.jpg';
import "../scss/_nav.scss";

export const Nav: React.FC = () => {
  return (
    <nav className={"nav"}>
      <div />
      {/*<img*/}
      {/*  src={profileImage} alt={`profile picture`}*/}
      {/*  className="nav__image" />*/}
        <div className={'nav__links'}>
          <Link className={"nav__links__link"} to={"/"}>Portfolio</Link>
          <Link className={"nav__links__link"} to="/blog">Blog</Link>
        </div>
    </nav>
  );
};
