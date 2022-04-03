import React, { CSSProperties, DetailedHTMLProps } from 'react'

export interface SectionProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Section: React.FC<SectionProps> = props => {
  const style: CSSProperties = { ...sectionStyle, ...props.style }
  return (
    <section {...props} style={style}>{props.children}</section>
  )
}

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '36px 0',
}
