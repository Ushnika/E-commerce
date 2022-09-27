import React from "react";
import BlogSection from "./Blog/BlogSection";

export default function Blog() {
  return (
    <div>
      <BlogSection />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
