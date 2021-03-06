import '../scss/blog/_blog-post.scss'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { BlogFeed, BlogTitle } from '../components/blog'

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
