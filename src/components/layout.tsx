import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import "../scss/_layout.scss"

export interface LayoutProps {
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className={'layout'}>
        <main className={'main'}>{children}</main>
        {!hideFooter && <footer className={'footer'}>
          <p className={'footer__text'}>Designed - Developed - Written - by James Toohey</p>
        </footer>}
      </div>
    </>
  )
};

export default Layout
