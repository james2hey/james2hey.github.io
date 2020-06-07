import React, { CSSProperties } from "react"
import '../../scss/subcomponents/_cross.scss';

export interface CrossProps {
  isOpen: boolean;
}

export const Cross: React.FC<CrossProps> = ({ isOpen }) => {
  const style: CSSProperties = isOpen ? { transform: 'rotate(45deg)' } : {}
  return <div className={'cross'} style={style} />;
}