import React from 'react';
import '../../scss/portfolio/_skills.scss';
import { Link } from "gatsby";

export const Skills: React.FC = () => {
    return (
        <div className="Skills" id={"skills"}>
          <h3>This Portfolio is a Work In Progress!</h3>
          <p>The rest will be filled in soon. In the meantime, check out my <Link to={'/blog'}>blog</Link> or <Link to={'/playground'}>playground</Link>.</p>
          <br/><br/><br/>
        </div>
    );
};
