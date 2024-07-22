import React, { useState } from 'react';
import BlogList from './BlogList';
import BlogForm from './BlogForm/BlogForm.js';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const addBlog = (blog) => {
    setBlogs([...blogs, { id: Date.now(), ...blog }]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const editBlog = (blog) => {
    setEditingBlog(blog);
  };

  return (
    <div>
      <h1>Blog App</h1>
      <BlogForm addBlog={addBlog} editingBlog={editingBlog} updateBlog={updateBlog} />
      <BlogList blogs={blogs} deleteBlog={deleteBlog} editBlog={editBlog} />
    </div>
  );
};

export default App;