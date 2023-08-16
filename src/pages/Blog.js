import React from "react";
import BlogSection from "../components/Blog/BlogSection";

const Blog = () => {
  return (
    <div>
      <BlogSection />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Blog;
