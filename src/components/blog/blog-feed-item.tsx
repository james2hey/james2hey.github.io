import React from 'react'
import { Link } from 'gatsby'

export interface BlogFeedItemProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  path: string;
}

export const BlogFeedItem: React.FC<BlogFeedItemProps> = props => {
  const { id, title, excerpt, date, path } = props
  return (
    <div className="blog-feed-item" key={id}>
      <h1 className={'blog-feed-item__title'}>
        <Link to={path}>{title}</Link>
      </h1>
      <h3 className={'blog-feed-item__date'}>{date}</h3>
      <p>{excerpt}</p>
    </div>
  )
}
