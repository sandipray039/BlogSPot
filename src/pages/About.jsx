import React from "react";
import "./About.css";

const About = () => {
  const authors = [
    {
      name: "John Doe",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Tech Enthusiast",
    },
    {
      name: "John Doe",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Tech Enthusiast",
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
      name: "John Doe",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Tech Enthusiast",
    },
    {
      name: "Bob Martin",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWI4YWIwMWUtNzA1YS00OGY1LWI3NmUtZDU3Yjg0NTZkNTQxXkEyXkFqcGc@._V1_.jpg",
      bio: "Business Guru",
    },
    {
      name: "John Doe",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Tech Enthusiast",
    },
    {
      name: "Alice Johnson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBVEWdPEBojYL5bv-XCZFlZwaTBCeUPSb9w&s",
      bio: "Health & Wellness",
    },
    {
      name: "John Doe",
      image:
        "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg",
      bio: "Tech Enthusiast",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About the Blog Project</h1>
        <p>
          Welcome to our blog platform, where ideas are shared and explored.
        </p>
      </div>

      <div className="about-content">
        <section className="overview">
          <h2>Project Overview</h2>
          <p>
            This project is a blog platform built using React.js and powered by
            an external API. The goal is to provide users with the latest blog
            content in an easy-to-navigate format. The app fetches data from an
            API, displaying articles in various categories, including tech,
            lifestyle, and more.
          </p>
        </section>

        <section className="technologies">
          <h2>Technologies Used</h2>
          <ul>
            <li>Frontend: React.js</li>
            <li>API: External API for fetching blog posts</li>
            <li>Styling: Tailwind CSS and custom CSS</li>
          </ul>
        </section>

        <section className="authors">
          <h2>Featured Authors</h2>
          <div className="author-marquee">
            <div className="author-list scroll-duplicate">
              {authors.map((author, index) => (
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
              {/* Duplicate the author list for infinite scroll effect */}
              {authors.map((author, index) => (
                <div key={index + authors.length} className="author-card">
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
