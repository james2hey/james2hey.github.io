import React from 'react';
import { Link } from "gatsby";
import "../../scss/subcomponents/_nav.scss"

const separator = '  |  ';
const sections = ['#about', '#skills', '#experience', '#project', '#contact', '/blog'];

export const Nav: React.FC = () => {
    return (
        <nav className={'nav'}>
          <h6>
            <Link className={'nav-link'} to={"#about"}>About</Link>{separator}
            <Link className={'nav-link'} to={"#skills"}>Skills</Link>{separator}
            <Link className={'nav-link'} to={"#experience"}>Experience</Link>{separator}
            <Link className={'nav-link'} to={"#project"}>Projects</Link>{separator}
            <Link className={'nav-link'} to={"#contact"}>Contact</Link>{separator}
            <Link className={'nav-link'} to="/blog">Blog</Link>
          </h6>
        </nav>
    );
};
