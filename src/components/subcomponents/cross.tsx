import React, { CSSProperties } from 'react'

export interface CrossProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const Cross: React.FC<CrossProps> = ({ isOpen, onClick }) => {
  const style: CSSProperties = isOpen ? { transform: 'rotate(45deg)' } : {}
  return <button className={'cross'} style={style} onClick={onClick}/>
}
