import React from "react"
import { Link } from "gatsby"

import Layout from "../gatsby/layout"
import Image from "../gatsby/image"
import SEO from "../gatsby/seo"
import Portfolio from "../components/portfolio";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Portfolio" />
            <Portfolio />
        </Layout>
    );
};

export default IndexPage;
