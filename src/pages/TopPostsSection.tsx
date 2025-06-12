import React, { useRef } from "react";
import { useGsapAnimation } from "../Utils/useGsapAnimation";
import "./TopPostsSection.css";

const TopPostsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(sectionRef); 

  const posts = [
    {
      title: "Mastering React Hooks",
      excerpt: "Learn useEffect, useState and more...",
      date: "June 1, 2025",
      link: "/posts/react-hooks",
    },
    {
      title: "My .NET Journey",
      excerpt: "Backend from scratch to API mastery.",
      date: "May 25, 2025",
      link: "/posts/dotnet-journey",
    },
    {
      title: "Why I Blog",
      excerpt: "What pushed me to start sharing online.",
      date: "May 10, 2025",
      link: "/posts/why-blog",
    },
  ];

  return (
    <div ref={sectionRef} className="container my-5">
      <h2 className="text-center mb-4 stagger-item">Top Posts</h2>
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm stagger-item">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <small className="text-muted d-block mb-2">{post.date}</small>
                <a href={post.link} className="btn btn-primary btn-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPostsSection;
