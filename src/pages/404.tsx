import React, { useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { navigate } from 'gatsby';

const NotFoundPage: React.FC = () => {
    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <Layout>
            <SEO title='404: Not found' />
            <h1>Redirecting</h1>
            <p>This page doesn&#39;t exist, redirecting home...</p>
        </Layout>
    );
};

export default NotFoundPage;
