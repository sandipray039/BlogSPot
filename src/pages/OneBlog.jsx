import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const OneBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const api = `http://localhost:5000/blogs/${id}`;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0]);
        } else {
          console.error("No blog found");
        }
      } catch (error) {
        console.error("Error fetching the blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center text-lg mt-10">Loading blog...</p>;
  }

  return (
    <div className="h-fit w-full flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 p-6 gap-6">
      {/* Right Side (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto lg:h-[52vh] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Left Side (Text Content) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        {/* Author Info */}
        <div className="flex items-center space-x-3 text-gray-600 text-sm mb-4">
          <img
            src={blog.authorPic}
            alt={blog.author}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <p>
            <strong>{blog.author}</strong> • {blog.published_date} • ⏳ {blog.reading_time}
          </p>
        </div>

        {/* Blog Content */}
        <p className="text-gray-800 leading-relaxed text-lg">{blog.content}</p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 text-sm font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
