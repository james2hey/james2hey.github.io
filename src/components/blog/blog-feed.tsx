import React from 'react'
import '../../scss/blog/blog-feed.scss'
import { BlogFeedItem } from './blog-feed-item'

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
  const { edges: posts } = allMarkdownRemark
  return (
    <div className="blog-feed">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogFeedItem
              id={post.id}
              title={post.frontmatter.title}
              excerpt={post.excerpt}
              date={post.frontmatter.date}
              path={post.frontmatter.path}/>
          )
        })}
    </div>
  )
}
