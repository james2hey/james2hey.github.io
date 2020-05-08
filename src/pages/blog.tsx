import "../scss/templates/_blog-post.scss";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProfilePicture, ProfilePictureSize } from "../components/subcomponents/profile-picture";
import { BlogTitle } from "../components/blog/blog-title";
import { BlogFeed } from "../components/blog/blog-feed";

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
        <BlogTitle />
        <BlogFeed allMarkdownRemark={data.allMarkdownRemark}/>
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
