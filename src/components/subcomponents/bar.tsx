import React, { useEffect } from "react";
import "../../scss/subcomponents/_bar.scss"

export interface BarProps {
  level: number;
}

export const Bar: React.FC<BarProps & React.HTMLProps<HTMLElement>> = props => {
  const { level, style } = props;

  useEffect(() => {
    if (!document) return;
    document.documentElement.style.setProperty('--bar-level', `${percent}%`);
  }, []);

  if (level < 0 || level > 10) throw Error('Bar level must be between 0-10');
  const percent = level * 10;


  // style?.setProperty('--bar-level', `${percent}%`);
  // useEffect(() => {
  //   element.style.setProperty('--bar-level', `${percent}%`);
  // }, [level]);


  return (
    <div className={'bar'}>
      <div className={'bar_fill'} />
    </div>
  )
};
