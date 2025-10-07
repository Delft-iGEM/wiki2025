"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional icon — you can replace or remove

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-opacity duration-300"
          style={{ backgroundColor: "#00A8E8" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#008CC2";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#00A8E8";
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
