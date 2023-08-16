import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="blog-posts">
        <div className="container">
          <h2 className="title text-center">From Our Blog</h2>
          {/* End .title-lg text-center */}
          <Slider {...settings}>
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="/singleblog">
                  <img
                    src="./assets/images/demos/demo-2/blog/post-1.jpg"
                    alt="blogImg"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="/singleblog">Nov 22, 2018</a>
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="/singleblog">Sed adipiscing ornare.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="/singleblog" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="/singleblog">
                  <img
                    src="./assets/images/demos/demo-2/blog/post-2.jpg"
                    alt="blogImg"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="/singleblog">Dec 12, 2018</a>
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="/singleblog">Fusce lacinia arcuet nulla.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="/singleblog" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="/singleblog">
                  <img
                    src="assets/images/demos/demo-2/blog/post-3.jpg"
                    alt="blogImg"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="/singleblog">Dec 19, 2018</a>
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="/singleblog">Quisque volutpat mattis eros.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="/singleblog" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
          </Slider>
          {/* End .owl-carousel */}
          <div className="more-container text-center mt-2">
            <a href="/blog" className="btn btn-outline-darker btn-more">
              <span>View more articles</span>
              <i className="icon-long-arrow-right" />
            </a>
          </div>
          {/* End .more-container */}
        </div>
        {/* End .container */}
      </div>
      {/* End .blog-posts */}
    </div>
  );
};

export default BlogPage;
