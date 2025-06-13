// src/components/HeroSection.tsx
import React, { useRef } from "react";
import "./HeroSection.css";
import { useGsapAnimation } from "../Utils/useGsapAnimation";

const HeroSection: React.FC = () => {
     const containerRef = useRef<HTMLDivElement>(null);
       useGsapAnimation(containerRef);


  return (
    <div ref={containerRef} className="hero-container position-relative text-white">
      <video
        className="hero-video position-absolute w-100 h-100 object-fit-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>

      <div className="position-absolute top-50 start-50 translate-middle text-center px-3">
        <h1 className="display-4 fw-bold stagger-item">Welcome to Blog<span className="text-orange-500">Spot</span></h1>
        <p className="lead stagger-item">Thoughts. Stories. Ideas.</p>
        <a href="/blogs" className="btn btn-light btn-lg mt-3 stagger-item">Explore Posts</a>
      </div>
    </div>
  );
};

export default HeroSection;
