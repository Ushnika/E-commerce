import React from "react";

export default function RightSectionBlog() {
  return (
    <div>
      <div className="sidebar">
        <div className="widget widget-search">
          <h3 className="widget-title">Search</h3>
          {/* End .widget-title */}
          <form action="#">
            <label htmlFor="ws" className="sr-only">
              Search in blog
            </label>
            <input
              type="search"
              className="form-control"
              name="ws"
              id="ws"
              placeholder="Search in blog"
              required
            />
            <button type="submit" className="btn">
              <i className="icon-search" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* End .widget */}
        <div className="widget widget-cats">
          <h3 className="widget-title">Categories</h3>
          {/* End .widget-title */}
          <ul>
            <li>
              <a href="#">
                Lifestyle<span>3</span>
              </a>
            </li>
            <li>
              <a href="#">
                Shopping<span>3</span>
              </a>
            </li>
            <li>
              <a href="#">
                Fashion<span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                Travel<span>3</span>
              </a>
            </li>
            <li>
              <a href="#">
                Hobbies<span>2</span>
              </a>
            </li>
          </ul>
        </div>
        {/* End .widget */}
        <div className="widget">
          <h3 className="widget-title">Popular Posts</h3>
          {/* End .widget-title */}
          <ul className="posts-list">
            <li>
              <figure>
                <a href="#">
                  <img src="assets/images/blog/sidebar/post-1.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 22, 2018</span>
                <h4>
                  <a href="#">Aliquam tincidunt mauris eurisus.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="assets/images/blog/sidebar/post-2.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 19, 2018</span>
                <h4>
                  <a href="#">Cras ornare tristique elit.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="assets/images/blog/sidebar/post-3.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 12, 2018</span>
                <h4>
                  <a href="#">Vivamus vestibulum ntulla nec ante.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="#">
                  <img src="assets/images/blog/sidebar/post-4.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 25, 2018</span>
                <h4>
                  <a href="#">Donec quis dui at dolor tempor interdum.</a>
                </h4>
              </div>
            </li>
          </ul>
          {/* End .posts-list */}
        </div>
        {/* End .widget */}
        <div className="widget widget-banner-sidebar">
          <div className="banner-sidebar-title">ad box 280 x 280</div>
          {/* End .ad-title */}
          <div className="banner-sidebar">
            <a href="#">
              <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
            </a>
          </div>
          {/* End .banner-ad */}
        </div>
        {/* End .widget */}
        <div className="widget">
          <h3 className="widget-title">Browse Tags</h3>
          {/* End .widget-title */}
          <div className="tagcloud">
            <a href="#">fashion</a>
            <a href="#">style</a>
            <a href="#">women</a>
            <a href="#">photography</a>
            <a href="#">travel</a>
            <a href="#">shopping</a>
            <a href="#">hobbies</a>
          </div>
          {/* End .tagcloud */}
        </div>
        {/* End .widget */}
        <div className="widget widget-text">
          <h3 className="widget-title">About Blog</h3>
          {/* End .widget-title */}
          <div className="widget-text-content">
            <p>
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, pulvinar nunc sapien ornare nisl.
            </p>
          </div>
          {/* End .widget-text-content */}
        </div>
        {/* End .widget */}
      </div>
      {/* End .sidebar sidebar-shop */}
    </div>
  );
}
