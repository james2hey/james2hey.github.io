import React from 'react'

import Layout from '../gatsby/layout'
import SEO from '../gatsby/seo'

const NotFoundPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="404: Not found"/>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    )
};

export default NotFoundPage;
