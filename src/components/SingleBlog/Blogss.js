import React from "react";
import BlogComment from "./NextBlog";
import BlogContent from "./BlogContent";
import RightSectionBlog from "./RightSectionBlog";

const Blogss = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Default With Sidebar
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <article className="entry single-entry">
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
};

export default Blogss;
