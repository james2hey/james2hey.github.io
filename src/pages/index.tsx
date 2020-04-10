import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio";

const IndexPage: React.FC = () => {
    return (
        <Layout hideFooter={true}>
            <SEO title="Portfolio" />
            <Portfolio />
        </Layout>
    );
};

export default IndexPage;
