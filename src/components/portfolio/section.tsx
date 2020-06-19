import React, { CSSProperties, DetailedHTMLProps } from 'react'

export interface SectionProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Section: React.FC<SectionProps> = props => {
  const style: CSSProperties = { ...sectionStyle, ...props.style }
  return (
    <div {...props} style={style}>{props.children}</div>
  )
}

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '36px 0',
}
