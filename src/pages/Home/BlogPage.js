import React from "react";

export default function BlogPage() {
  return (
    <div>
      <div className="blog-posts">
        <div className="container another-container">
          <h2 className="title text-center">From Our Blog</h2>
          {/* End .title-lg text-center */}
          <div
            className="owl-carousel owl-simple carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "600": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                }
                            }
                        }'
          >
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-1.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Nov 22, 2018</a>, 0 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Sed adipiscing ornare.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">
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
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-2.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Dec 12, 2018</a>, 0 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Fusce lacinia arcuet nulla.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">
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
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-3.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Dec 19, 2018</a>, 2 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Quisque volutpat mattis eros.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
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
          {/* End .owl-carousel */}
          <div className="more-container text-center mt-2">
            <a href="blog.html" className="btn btn-outline-darker btn-more">
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
}
