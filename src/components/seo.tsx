import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOProps {
    description?: string;
    lang?: string;
    title: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, title }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);
    console.log(site);
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription
                },
                {
                    property: 'og:title',
                    content: title
                },
                {
                    property: 'og:description',
                    content: metaDescription
                },
                {
                    property: 'og:type',
                    content: 'website'
                }
            ].concat()}
        />
    );
};

export default SEO;
