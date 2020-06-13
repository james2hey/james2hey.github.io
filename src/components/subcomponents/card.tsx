import React from "react"
import "./../../scss/subcomponents/_card.scss"

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = props => {
  const { hover, className } = props
  const baseStyle = hover == null ? `card` : `card card-hoverable`
  const style = `${baseStyle} ${className}`
  return (
    <div {...props} className={style}>{props.children}</div>
  )
}
