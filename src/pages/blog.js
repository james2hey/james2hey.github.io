import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../gatsby/layout";
import "../scss/_blog.scss"
import SEO from "../gatsby/seo";

export const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" />
      <div className={'blog'}>
        <h1>James Toohey - <span className={"highlight"}>Blog</span></h1>
        <h3>This is where I post about things I do to make my life easier working with software.</h3>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default Blog;
