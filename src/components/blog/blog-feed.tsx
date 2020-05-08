import React from 'react';
import '../../scss/blog/_blog-feed.scss';
import { Link } from "gatsby";

export interface BlogFeedProps {
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

export const BlogFeed: React.FC<BlogFeedProps> = ({ allMarkdownRemark }) => {
  const { edges: posts } = allMarkdownRemark;
  return (
    <div className="blog-feed">
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
  )
};
