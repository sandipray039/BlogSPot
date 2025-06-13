import React, { useContext } from "react";
import { useParams } from "react-router-dom";  // correct import
import { BlogContext } from "../Context/BlogContext";

const OneBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogs, loading, error } = useContext(BlogContext);

  if (loading) return <div>Loading blog...</div>;
  if (error) return <div>Error: {error}</div>;

  // Find the blog by matching id (string comparison)
 const blog = blogs.find(blog => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found!</div>;
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
            src={blog.authorphoto || "/default-author-pic.jpg"} // fallback if authorPic missing
            alt={blog.author}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <p>
            <strong>{blog.author}</strong> • {blog.Published_date} • ⏳ {blog.reading_time}
          </p>
        </div>

        {/* Blog Content */}
        <p className="text-gray-800 leading-relaxed text-lg">{blog.content}</p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags && blog.tags.length > 0 ? (
            blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 text-sm font-semibold rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No tags available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
