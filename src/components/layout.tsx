import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../scss/layout.scss'
import { Nav } from './nav'

export interface LayoutProps {
  hideFooter?: boolean;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter, hideNav }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={'layout'}>
        {!hideNav && <Nav/>}
        <main className={'main'}>{children}</main>
        {!hideFooter && <footer className={'footer'}>
          <p className={'footer__text'}>Designed - Developed - Written - by James Toohey</p>
        </footer>}
      </div>
  )
}

export default Layout
