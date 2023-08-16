import React from "react";

const RightSectionBlog = () => {
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
              {/* <a href="."> */}
              Lifestyle<span>3</span>
              {/* </a> */}
            </li>
            <li>
              Shopping<span>3</span>
            </li>
            <li>
              Fashion<span>1</span>
            </li>
            <li>
              Travel<span>3</span>
            </li>
            <li>
              Hobbies<span>2</span>
            </li>
          </ul>
        </div>
        {/* End .widget */}
        <div className="widget">
          <h3 className="widget-title">Recent Posts</h3>
          {/* End .widget-title */}
          <ul className="posts-list">
            <li>
              <figure>
                <a href="/singleblog">
                  <img src="assets/images/blog/sidebar/post-1.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 22, 2018</span>
                <h4>
                  <a href="/singleblog">Aliquam tincidunt mauris eurisus.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="/singleblog">
                  <img src="assets/images/blog/sidebar/post-2.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 19, 2018</span>
                <h4>
                  <a href="/singleblog">Cras ornare tristique elit.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="/singleblog">
                  <img src="assets/images/blog/sidebar/post-3.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 12, 2018</span>
                <h4>
                  <a href="/singleblog">Vivamus vestibulum ntulla nec ante.</a>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <a href="/singleblog">
                  <img src="assets/images/blog/sidebar/post-4.jpg" alt="post" />
                </a>
              </figure>
              <div>
                <span>Nov 25, 2018</span>
                <h4>
                  <a href="/singleblog">
                    Donec quis dui at dolor tempor interdum.
                  </a>
                </h4>
              </div>
            </li>
          </ul>
          {/* End .posts-list */}
        </div>
        {/* End .widget */}
        {/* <div className="widget widget-banner-sidebar">
          <div className="banner-sidebar-title">ad box 280 x 280</div>
          <div className="banner-sidebar">
            <a href="#">
              <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
            </a>
          </div>
        </div> */}
        {/* End .banner widget */}
        {/* <div className="widget">
          <h3 className="widget-title">Browse Tags</h3>
          <div className="tagcloud">
            <a href="#">fashion</a>
            <a href="#">style</a>
            <a href="#">women</a>
            <a href="#">photography</a>
            <a href="#">travel</a>
            <a href="#">shopping</a>
            <a href="#">hobbies</a>
          </div>
        </div> */}
        {/* End . browse tag widget */}
        {/* <div className="widget widget-text">
          <h3 className="widget-title">About Blog</h3>
          <div className="widget-text-content">
            <p>
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, pulvinar nunc sapien ornare nisl.
            </p>
          </div>
        </div> */}
        {/* End . about widget */}
      </div>
      {/* End .sidebar sidebar-shop */}
    </div>
  );
};

export default RightSectionBlog;
