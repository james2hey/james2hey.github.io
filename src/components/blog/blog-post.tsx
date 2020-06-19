import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import '../../scss/blog/_blog-post.scss'
import Layout from '../layout'
import SEO from '../seo'

interface BlogPostProps {
  markdownRemark: any;
}

/**
 * This is directly used by gatsby-node.js to resolve pages e.g.
 * `const BlogPost = path.resolve(`src/components/blog/blog-post.tsx`);`
 * @param data
 * @constructor
 */
const BlogPost: React.FC<PageProps<BlogPostProps>> = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout hideNav={true}>
      <SEO title={post.frontmatter.title}/>
      <div className="blog-post">
        <h1 className={'blog-post__heading'}>{post.frontmatter.title}</h1>
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Link to={'/blog'} className={'blog-post__back'}>{`< Back`}</Link>
    </Layout>
  )
}

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
`

export default BlogPost
