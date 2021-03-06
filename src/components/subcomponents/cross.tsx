import React, { CSSProperties } from 'react'
import '../../scss/subcomponents/_cross.scss'

export interface CrossProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const Cross: React.FC<CrossProps> = ({ isOpen, onClick }) => {
  const style: CSSProperties = isOpen ? { transform: 'rotate(45deg)' } : {}
  return <div className={'cross'} style={style} onClick={onClick}/>
}