import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ReadySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ready-stagger", {
        x: -50,
        opacity: 0,
        duration: 1.7,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container-fluid d-flex flex-column justify-content-start align-items-start text-white"
      style={{
        backgroundImage: "url('/images/ready.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        padding: "4rem 2rem",
      }}
    >
      <div style={{ maxWidth: "760px" }}>
        <h2 className="display-3 fw-bold mb-4 ready-stagger">
          Are You Ready?
        </h2>
        <p className="fs-4 fw-semibold ready-stagger" style={{ lineHeight: "1.6" }}>
          Join a platform that fuels <span className="text-warning">curiosity</span> and inspires <span className="text-warning">creativity</span>.
          Whether you're a seasoned blogger or a fresh voice, your words matter here.
        </p>
        <p className="fs-5 text-light ready-stagger" style={{ lineHeight: "1.8" }}>
          Dive into articles, share your experiences, and become part of a community that values
          <span className="fw-semibold text-white"> ideas, innovation, and impact.</span>
        </p>
      </div>
      <div>
      <Link to="/signup"> <button className="btn btn-primary ready-stagger fs-10" style={{fontWeight:"500"}}>Regsiter Now</button> </Link> 
      </div>
    </div>
  );
};

export default ReadySection;
