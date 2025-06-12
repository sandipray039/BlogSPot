import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // fixed import
import { fetchBlogs } from '../authapi/ApiService';
import './Blogs.css';
import { BlogContext, BlogProvider } from '../Context/BlogContext';


const Blogs: React.FC = () => {
  const {blogs,loading,error}=useContext(BlogContext);
  if (loading) return (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
    <div className="spinner-border text-primary"  role="status">
      <span className="visually-hidden" style={{fontSize:'10vh'}}>Loading...</span>
    </div>
  </div>
);

  return (
    <div className="blog-container">
      <div className="head">
        <h1 className="text-5xl text-white">Latest Blogs</h1>
      </div>
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card-link">
              <div className="blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.content ? blog.content.substring(0, 100) : "No content available"}...</p>
                  <p><strong>Category:</strong> {blog.category}</p>
                  <p><strong>Author:</strong> {blog.author}</p>
                  <p><strong>Published:</strong> {blog.Published_date}</p>
                  <p><strong>Reading Time:</strong> {blog.reading_time}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
