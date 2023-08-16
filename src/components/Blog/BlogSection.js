import React, { useState } from "react";
import { BlogData } from "../../data/BlogData";

const BlogSection = () => {
  const [toggleOpen, setToggleOpen] = useState(1);
  const lifestyleBlog = [];
  const shoppingBlog = [];
  const fashionBlog = [];
  const travelBlog = [];
  const hobbiesBlog = [];

  newArray(BlogData);

  function newArray(products) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === "Lifestyle") lifestyleBlog.push(products[i]);
      if (products[i].category === "Shopping") shoppingBlog.push(products[i]);
      if (products[i].category === "Fashion") fashionBlog.push(products[i]);
      if (products[i].category === "Travel") travelBlog.push(products[i]);
      if (products[i].category === "Hobbies") hobbiesBlog.push(products[i]);
    }
  }

  const toggleTab = (index) => {
    setToggleOpen(index);
  };
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/blog">Blog</a>
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="container">
        <nav className="blog-nav">
          <ul className="menu-cat entry-filter justify-content-center">
            <li className={toggleOpen === 1 ? "active" : ""}>
              <a href="#" onClick={() => toggleTab(1)}>
                All Blog Posts <span>{BlogData.length}</span>
              </a>
            </li>
            <li className={toggleOpen === 2 ? "active" : ""}>
              <a href="#" onClick={() => toggleTab(2)}>
                Lifestyle <span>{lifestyleBlog.length}</span>
              </a>
            </li>
            <li className={toggleOpen === 3 ? "active" : ""}>
              <a href="#" data-filter=".shopping" onClick={() => toggleTab(3)}>
                Shopping <span>{shoppingBlog.length}</span>
              </a>
            </li>
            <li className={toggleOpen === 4 ? "active" : ""}>
              <a href="#" data-filter=".shopping" onClick={() => toggleTab(4)}>
                Fashion <span>{fashionBlog.length}</span>
              </a>
            </li>
            <li className={toggleOpen === 5 ? "active" : ""}>
              <a href="#" data-filter=".shopping" onClick={() => toggleTab(5)}>
                Travel <span>{travelBlog.length}</span>
              </a>
            </li>
            <li className={toggleOpen === 6 ? "active" : ""}>
              <a href="#" data-filter=".shopping" onClick={() => toggleTab(6)}>
                Hobbies <span>{hobbiesBlog.length}</span>
              </a>
            </li>
          </ul>
          {/* End .blog-menu */}
        </nav>
        {/* End .blog-nav */}
        {/* <div className="entry-container max-col-3" data-layout="fitRows">
          <Card data={blog} />
        </div> */}
        <div className="content-tabs">
          <div
            className={toggleOpen === 1 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {BlogData.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={toggleOpen === 2 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {lifestyleBlog.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.comments} Comments</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={toggleOpen === 3 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {shoppingBlog.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.comments} Comments</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={toggleOpen === 4 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {fashionBlog.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.comments} Comments</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={toggleOpen === 5 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {travelBlog.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.comments} Comments</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={toggleOpen === 6 ? "content  active-content" : "content"}
          >
            <div className="entry-container max-col-3" data-layout="fitRows">
              {hobbiesBlog.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="/singleblog">
                            <img src={item.img1} alt="image desc" />
                          </a>
                        </figure>
                        {/* End .entry-media */}
                        <div className="entry-body">
                          <div className="entry-meta">
                            <span className="entry-author">
                              by <a href="#">{item.author}</a>
                            </span>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.Date}</a>
                            <span className="meta-separator">|</span>
                            <a href="#">{item.comments} Comments</a>
                          </div>
                          {/* End .entry-meta */}
                          <h2 className="entry-title">
                            <a href="/singleblog">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="/singleblog" className="read-more">
                              Continue Reading
                            </a>
                          </div>
                          {/* End .entry-content */}
                        </div>
                        {/* End .entry-body */}
                      </article>
                      {/* End .entry */}
                    </div>
                    {/* End .entry-item */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* End .entry-container */}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link page-link-prev"
              href="#"
              aria-label="Previous"
              tabIndex="-1"
              aria-disabled="true"
            >
              <span aria-hidden="true">
                <i className="icon-long-arrow-left"></i>
              </span>
              Prev
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-next" href="#" aria-label="Next">
              Next{" "}
              <span aria-hidden="true">
                <i className="icon-long-arrow-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogSection;
