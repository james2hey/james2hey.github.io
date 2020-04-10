import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../scss/templates/_blog-post.scss";

interface BlogPostProps {
  markdownRemark: any;
}

const BlogPost: React.FC<PageProps<BlogPostProps>> = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="blog-post">
        <h1 className={'blog-post__heading'}>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Link to={'/blog'}>{`< Back`}</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
      query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default BlogPost;
