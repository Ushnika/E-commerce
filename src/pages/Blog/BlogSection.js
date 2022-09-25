import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../Data/BlogData";
import Card from "./Card";

export default function BlogSection() {
  const [blog, setBlog] = useState(BlogData);
  const [toggleOpen, setToggleOpen] = useState(1);
  const lifestyleBlog = [];
  const shoppingBlog = [];
  const fashionBlog = [];
  const travelBlog = [];
  const hobbiesBlog = [];

  var products = newArray(BlogData);

  function newArray(products) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === "Lifestyle") lifestyleBlog.push(products[i]);
      if (products[i].category === "Shopping") shoppingBlog.push(products[i]);
      if (products[i].category === "Fashion") fashionBlog.push(products[i]);
      if (products[i].category === "Travel") travelBlog.push(products[i]);
      if (products[i].category === "Hobbies") hobbiesBlog.push(products[i]);
    }
  }
  console.log(lifestyleBlog);

  // const categories = [...new Set(BlogData.map((Val) => Val.category))];

  // const filterItem = (curcat) => {
  //   console.log(curcat);
  //   const newBlog = BlogData.filter((newVal) => {
  //     return newVal.category === curcat;
  //     // comparing category for displaying data
  //   });
  //   setBlog(newBlog);
  //   console.log(blog, "abc");
  // };

  const toggleTab = (index) => {
    setToggleOpen(index);
  };
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container another-container">
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
      <div className="container another-container">
        <nav className="blog-nav">
          <ul className="menu-cat entry-filter justify-content-center">
            <li className="">
              <a
                href="#"
                onClick={() => toggleTab(1)}
                className={toggleOpen === 1 ? "tabs active-tabs" : "tabs"}
              >
                All Blog Posts <span>{BlogData.length}</span>
              </a>
            </li>
            {/* {categories.map((Val, id) => {
              return (
                <li>
                  <a href="#" key={id} onClick={() => filterItem(Val)}>
                    {Val}
                  </a>
                </li>
              );
            })} */}
            <li>
              <a
                href="#"
                onClick={() => toggleTab(2)}
                className={toggleOpen === 2 ? "tabs active-tabs" : "tabs"}
              >
                Lifestyle <span>{lifestyleBlog.length}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".shopping"
                onClick={() => toggleTab(3)}
                className={toggleOpen === 3 ? "tabs active-tabs" : "tabs"}
              >
                Shopping <span>{shoppingBlog.length}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".shopping"
                onClick={() => toggleTab(4)}
                className={toggleOpen === 4 ? "tabs active-tabs" : "tabs"}
              >
                Fashion <span>{fashionBlog.length}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".shopping"
                onClick={() => toggleTab(5)}
                className={toggleOpen === 5 ? "tabs active-tabs" : "tabs"}
              >
                Travel <span>{travelBlog.length}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".shopping"
                onClick={() => toggleTab(6)}
                className={toggleOpen === 6 ? "tabs active-tabs" : "tabs"}
              >
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
              {BlogData.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
              {lifestyleBlog.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
              {shoppingBlog.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
              {fashionBlog.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
              {travelBlog.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
              {hobbiesBlog.map((item) => {
                return (
                  <div>
                    <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                      <article className="entry entry-grid text-center">
                        <figure className="entry-media">
                          <a href="single.html">
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
                            <a href="single.html">{item.title}</a>
                          </h2>
                          {/* End .entry-title */}
                          <div className="entry-cats">
                            in <a href="#">{item.category}</a>
                          </div>
                          {/* End .entry-cats */}
                          <div className="entry-content">
                            <p>{item.concept}</p>
                            <a href="single.html" className="read-more">
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
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a
              class="page-link page-link-prev"
              href="#"
              aria-label="Previous"
              tabIndex="-1"
              aria-disabled="true"
            >
              <span aria-hidden="true">
                <i class="icon-long-arrow-left"></i>
              </span>
              Prev
            </a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link page-link-next" href="#" aria-label="Next">
              Next{" "}
              <span aria-hidden="true">
                <i class="icon-long-arrow-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
