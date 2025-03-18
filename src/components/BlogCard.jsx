import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogId, title, description }) => {
  return (
    <div className="blog-box">
      <Link to={`/blog/${blogId}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
