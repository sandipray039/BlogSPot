import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';  // Import Link for navigation
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading
  const [error, setError] = useState(null);  // State for handling errors
  const api = "http://localhost:5000/blogs";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="loading-message">Loading blogs...</p>;  // Simple loading message
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;  // Display error message if there is one
  }

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
                  <p>{blog.content.substring(0, 100)}...</p>
                  <p><strong>Category:</strong> {blog.category}</p>
                  <p><strong>Author:</strong> {blog.author}</p>
                  <p><strong>Published:</strong> {blog.published_date}</p>
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
