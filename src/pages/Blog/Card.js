import React from "react";

export default function Card({ data }) {
  console.log(data, "data");
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="entry-item col-sm-6 col-lg-4" key={index}>
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <div
                  className="owl-carousel owl-simple owl-light owl-nav-inside"
                  data-toggle="owl"
                >
                  {console.log(item.img1, "item")}
                  <a href="single.html">
                    <img src={item.img1} alt="image desc" />
                  </a>
                  <a href="single.html">
                    <img src={item.img2} alt="image desc" />
                  </a>
                </div>
                {/* End .owl-carousel */}
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
                  in <a href="#">{item.category}</a>{" "}
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
        );
      })}
    </div>
  );
}
