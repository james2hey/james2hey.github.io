import React from "react"
import { Link } from "gatsby"

import Layout from "../gatsby/layout"
import Image from "../gatsby/image"
import SEO from "../gatsby/seo"
import App from "../components/app";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <App />
        </Layout>
    );
};

export default IndexPage;
