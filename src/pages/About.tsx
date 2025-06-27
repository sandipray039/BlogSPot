import React, { useState } from "react";
import "./About.css";

const About = () => {
  const authors = [
    {
      name: "Sandip Ray",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Full Stack Developer",
    },
    {
      name: "Jane Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYR0TAT4xCZgg-7cvDs2gH02sMGHAIbFDYQ&s",
      bio: "Lifestyle Blogger",
    },
    {
      name: "Alice Johnson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBVEWdPEBojYL5bv-XCZFlZwaTBCeUPSb9w&s",
      bio: "Health & Wellness",
    },
    {
      name: "Bob Martin",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWI4YWIwMWUtNzA1YS00OGY1LWI3NmUtZDU3Yjg0NTZkNTQxXkEyXkFqcGc@._V1_.jpg",
      bio: "Business Guru",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About the Blog Project</h1>
        <p>
          A full-stack blog platform where admin users can publish and manage blog posts, and visitors can explore insightful content.
        </p>
      </div>

      <div className="about-content">
        <section className="overview">
          <h2>Project Overview</h2>
          <p>
            This blog platform is built using React.js for the frontend and ASP.NET Core Web API for the backend. It includes secure admin login, blog management (create, update, delete), and a public interface to browse posts. Blog data is managed in a SQL Server database, and uploaded images are stored and served through the backend using relative paths converted into full URLs.
          </p>
        </section>

        <section className="technologies">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Frontend:</strong> React.js (TypeScript), React Context API, Axios, Bootstrap 5</li>
            <li><strong>Backend:</strong> ASP.NET Core Web API with Repository-Service Pattern</li>
            <li><strong>Database:</strong> SQL Server using Entity Framework Core</li>
            <li><strong>Security:</strong> Password encryption using BCrypt</li>
            <li><strong>Image Upload:</strong> Images uploaded from React and served from backend with path mapping</li>
          </ul>
        </section>

        <section className="authors">
          <h2>Featured Authors</h2>
          <div className="author-marquee">
            <div className="author-list scroll-duplicate">
              {authors.concat(authors).map((author, index) => (
                <div key={index} className="author-card">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h3>{author.name}</h3>
                    <p>{author.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
