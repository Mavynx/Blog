import React from 'react';

const BlogList = ({ blogs, deleteBlog, editBlog }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blog posts available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => editBlog(blog)}>Edit</button>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;