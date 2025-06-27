import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../Context/BlogContext';
import './Blogs.css';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  authorphoto: string;
  image: string;
  publishDate: string;
  readingTime: string;
  content: string;
  tags: string;
  userId: number;
}

const Blogs: React.FC = () => {
  const { blogs, loading, error } = useContext(BlogContext);
const [demoPosts] = useState<Blog[]>([
  {
    id: 99901,
    title: 'React vs Angular: Which One to Choose?',
    description: 'Comparison of two major frontend frameworks.',
    author: 'Sandip Ray',
    category: 'Frontend',
    authorphoto: 'https://randomuser.me/api/portraits/men/11.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1675895566940-45e3ce88f5e2?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '6 min',
    content: 'Choosing between React and Angular depends on your project’s needs and your team’s expertise...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99902,
    title: 'Understanding Dependency Injection in .NET Core',
    description: 'Clean architecture using DI pattern.',
    author: 'Sandip Ray',
    category: 'Backend',
    authorphoto: 'https://randomuser.me/api/portraits/men/12.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1673893476811-e8d1389870b3?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0',
    publishDate: new Date().toISOString(),
    readingTime: '5 min',
    content: 'Dependency Injection helps in maintaining loose coupling and enhances testability...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99903,
    title: 'CSS Grid vs Flexbox: When to Use What',
    description: 'Layout systems in modern frontend development.',
    author: 'Sandip Ray',
    category: 'Frontend',
    authorphoto: 'https://randomuser.me/api/portraits/women/15.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1677541583053-728bf02f60c1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '4 min',
    content: 'Flexbox is perfect for one-dimensional layouts, while CSS Grid excels in two-dimensional designs...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99904,
    title: 'Getting Started with Entity Framework Core',
    description: 'Intro to EF Core and data modeling.',
    author: 'Sandip Ray',
    category: 'Backend',
    authorphoto: 'https://randomuser.me/api/portraits/men/20.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1673893476844-440c8a3e65b4?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '7 min',
    content: 'Entity Framework Core is a modern object-database mapper for .NET developers...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99905,
    title: 'Top 10 VS Code Extensions for Developers',
    description: 'Boost your productivity with these tools.',
    author: 'Sandip Ray',
    category: 'Tools',
    authorphoto: 'https://randomuser.me/api/portraits/men/21.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1677624819317-cf4d32e8d8f3?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '5 min',
    content: 'Discover extensions that enhance coding, debugging, and formatting in Visual Studio Code...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99906,
    title: 'TypeScript Basics for Beginners',
    description: 'Learn the fundamentals of TypeScript.',
    author: 'Sandip Ray',
    category: 'Frontend',
    authorphoto: 'https://randomuser.me/api/portraits/women/18.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1678451600636-e43d8f1a206e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '8 min',
    content: 'TypeScript adds static typing to JavaScript, helping prevent runtime errors...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99907,
    title: 'How JWT Works in Web APIs',
    description: 'Authentication using JSON Web Tokens.',
    author: 'Sandip Ray',
    category: 'Backend',
    authorphoto: 'https://randomuser.me/api/portraits/men/14.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1674510285893-1d97c0876e29?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '6 min',
    content: 'JWTs provide a compact way to securely transmit information between parties...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99908,
    title: 'Hosting React Apps on Vercel',
    description: 'A quick deployment guide.',
    author: 'Sandip Ray',
    category: 'Deployment',
    authorphoto: 'https://randomuser.me/api/portraits/men/25.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1675713813493-c496ee099f2a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '4 min',
    content: 'Vercel makes deploying React apps simple and fast...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99909,
    title: 'Top GitHub Repositories to Learn from in 2024',
    description: 'Explore open source like a pro.',
    author: 'Sandip Ray',
    category: 'GitHub',
    authorphoto: 'https://randomuser.me/api/portraits/women/27.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1678116950639-cd457e71cb42?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '6 min',
    content: 'These repositories provide great examples of real-world coding practices...',
    tags: '[null]',
    userId: 1,
  },
  {
    id: 99910,
    title: 'Clean Code Principles Every Developer Should Know',
    description: 'Improve code readability and maintainability.',
    author: 'Sandip Ray',
    category: 'Best Practices',
    authorphoto: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://plus.unsplash.com/premium_photo-1678452037754-d420a324dbd9?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3',
    publishDate: new Date().toISOString(),
    readingTime: '7 min',
    content: 'Clean code is easy to read, understand, and change — and that’s crucial...',
    tags: '[null]',
    userId: 1,
  },

]);


  // Combine API + hardcoded posts
  const allBlogs = [...demoPosts, ...blogs];

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden" style={{ fontSize: '10vh' }}>Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="blog-container">
      <div className="head">
        <h1 className="text-5xl text-white">Latest Blogs</h1>
      </div>
      <div className="blog-list">
        {allBlogs.length > 0 ? (
          allBlogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card-link">
              <div className="blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.content ? blog.content.substring(0, 100) : "No content available"}...</p>
                  <p><strong>Category:</strong> {blog.category}</p>
                  <p><strong>Author:</strong> {blog.author}</p>
                  <p><strong>Published:</strong> {blog.publishDate}</p>
                  <p><strong>Reading Time:</strong> {blog.readingTime}</p>
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
