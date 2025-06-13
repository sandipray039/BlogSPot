import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimation } from "../Utils/useGsapAnimation";
gsap.registerPlugin(ScrollTrigger);

const TextSection: React.FC = () => {

   const containerRef = useRef<HTMLDivElement>(null);
        useGsapAnimation(containerRef);

  return (
    <div  ref={containerRef} className="container-fluid py-5 bg-dark">
      <div
       
        className="text-center text-white px-3 px-md-5 py-5 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        <h2 className="fw-bold mb-4 text-warning display-5 stagger-item-2">
          Discover Ideas. Learn Something New.
        </h2>
        <p className="text-light fs-5 mb-3 stagger-item-2">
          Welcome to our blogging hub — a space dedicated to sharing insights,
          tutorials, trends, and thoughtful commentary across tech, lifestyle,
          creativity, and more.
        </p>
        <p className="text-secondary fs-6 stagger-item-2">
          Whether you're a curious learner, a developer, a designer, or someone
          who simply loves reading well-crafted articles — this is your place to
          explore, grow, and stay informed.
        </p>
      </div>
    </div>
  );
};

export default TextSection;
