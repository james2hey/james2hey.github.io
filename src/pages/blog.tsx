import "../scss/templates/_blog-post.scss";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface BlogPageProps {
  allMarkdownRemark: {
    edges: [{
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          path: string;
        }
      }
    }]
  }
}


export const BlogPage: React.FC<PageProps<BlogPageProps>> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" />
      <div className={"blog-post"}>
        <h1>
          <Link to={'/'} className={'blog-post__heading--white'}>
            James Toohey</Link> - <span className={"highlight"}>Blog</span>
        </h1>
        <h4>A software engineer helping speed up and improve development experiences.</h4>
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

export default BlogPage;
