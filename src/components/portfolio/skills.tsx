import React from 'react';
import '../../scss/portfolio/_skills.scss';
import c from '../../assets/images/c.svg';
import java from '../../assets/images/java.svg';
import kotlin from '../../assets/images/kotlin.svg';
import node from '../../assets/images/node.svg';
import python from '../../assets/images/python.svg';
import react from '../../assets/images/react.svg';
import reactNative from '../../assets/images/react-native.svg';
import sql from '../../assets/images/sql.svg';
import { TechItem } from "../subcomponents/tech-item";
import { Link } from "gatsby";

export const Skills: React.FC = () => {
    return (
        <div className="Skills" id={"skills"}>
          <h3>This Portfolio is a Work In Progress!</h3>
          <p>The rest will be filled in soon. In the meantime, check out my <Link to={'/blog'}>blog</Link> or <Link to={'/playground'}>playground</Link>.</p>
          <br/><br/><br/>
          <h3>Personal Tech Stack</h3>
            <div className="Tech-container">
                <TechItem
                  image={react}
                  name={'React'}
                />
                <TechItem
                  image={kotlin}
                  name={'Kotlin'}
                />
                <TechItem
                  image={java}
                  name={'Java'}
                />
                <TechItem
                  image={reactNative}
                  name={'React Native'}
                />
                <TechItem
                  image={python}
                  name={'Python'}
                />
                <TechItem
                  image={node}
                  name={'Node'}
                />
                <TechItem
                  image={c}
                  name={'C++'}
                />
                <TechItem
                  image={sql}
                  name={'SQL'}
                />
            </div>
          <br/><br/><br/><br/><br/><br/>
        </div>
    );
};
