import React from "react";
import BlogComment from "./BlogComment";
import BlogContent from "./BlogContent";
import RightSectionBlog from "./RightSectionBlog";

export default function Blogss() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Blog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Default With Sidebar
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div class="page-content">
        <div class="container another-container">
          <div class="row">
            <div class="col-lg-9">
              <article class="entry single-entry">
                <BlogContent />
              </article>
              <BlogComment />
            </div>
            <aside className="col-lg-3">
              <RightSectionBlog />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
