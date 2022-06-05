import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Layout: React.FC = props => {
	useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return <div className='layout'>{props.children}</div>;
};

export default Layout;
