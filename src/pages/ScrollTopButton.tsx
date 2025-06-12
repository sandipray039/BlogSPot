// components/ScrollTopButton.tsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        backgroundColor: "#f97316", // Tailwind orange-500
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "0.8rem 1rem",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        display: visible ? "block" : "none",
        transition: "opacity 0.3s ease-in-out"
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;
