import React from "react";
import { BlogData } from "../../data/BlogData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextBtn, PreviousBtn } from "../Elements/SliderButton";

const NextBlog = () => {
  let relatedBlog = [];
  const value = BlogData.length / 2;
  for (let i = 0; i < value; i++) {
    relatedBlog.push(BlogData[i]);
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          infinite: relatedBlog.length > 6,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
      <div className="related-posts">
        <h3 className="title">Related Posts</h3>
        {/* End .title */}
        <Slider {...settings}>
          {relatedBlog.map((list, i) => {
            return (
              <article className="entry entry-grid" key={i}>
                <figure className="entry-media">
                  <a href="/singleblog">
                    <img src={list.img1} alt="DescImage" />
                  </a>
                </figure>
                {/* End .entry-media */}
                <div className="entry-body pl-3">
                  <div className="entry-meta">{list.Date}</div>
                  {/* End .entry-meta */}
                  <h2 className="entry-title">
                    <a href="/singleblog">{list.title}</a>
                  </h2>
                  {/* End .entry-title */}
                  <div className="entry-cats">
                    in <a href="/singleblog">{list.category}</a>
                  </div>
                  {/* End .entry-cats */}
                </div>
                {/* End .entry-body */}
              </article>
            );
          })}

          {/* End .entry */}
        </Slider>
        {/* End .owl-carousel */}
      </div>
      {/* End .related-posts */}

      {/* <div className="comments">
        <h3 className="title">3 Comments</h3>
        <ul>
          <li>
            <div className="comment">
              <figure className="comment-media">
                <a href="#">
                  <img
                    src="assets/images/blog/comments/1.jpg"
                    alt="User name"
                  />
                </a>
              </figure>
              <div className="comment-body">
                <a href="#" className="comment-reply">
                  Reply
                </a>
                <div className="comment-user">
                  <h4>
                    <a href="#">Jimmy Pearson</a>
                  </h4>
                  <span className="comment-date">
                    November 9, 2018 at 2:19 pm
                  </span>
                </div>
                <div className="comment-content">
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.{" "}
                  </p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <div className="comment">
                  <figure className="comment-media">
                    <a href="#">
                      <img
                        src="assets/images/blog/comments/2.jpg"
                        alt="User name"
                      />
                    </a>
                  </figure>
                  <div className="comment-body">
                    <a href="#" className="comment-reply">
                      Reply
                    </a>
                    <div className="comment-user">
                      <h4>
                        <a href="#">Lena Knight</a>
                      </h4>
                      <span className="comment-date">
                        November 9, 2018 at 2:19 pm
                      </span>
                    </div>
                    <div className="comment-content">
                      <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="comment">
              <figure className="comment-media">
                <a href="#">
                  <img
                    src="assets/images/blog/comments/3.jpg"
                    alt="User name"
                  />
                </a>
              </figure>
              <div className="comment-body">
                <a href="#" className="comment-reply">
                  Reply
                </a>
                <div className="comment-user">
                  <h4>
                    <a href="#">Johnathan Castillo</a>
                  </h4>
                  <span className="comment-date">
                    November 9, 2018 at 2:19 pm
                  </span>
                </div>
                <div className="comment-content">
                  <p>
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                    pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
      {/* End comment part */}

      {/* <div className="reply">
        <div className="heading">
          <h3 className="title">Leave A Reply</h3>
          <p className="title-desc">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <form action="#">
          <label htmlFor="reply-message" className="sr-only">
            Comment
          </label>
          <textarea
            name="reply-message"
            id="reply-message"
            cols={30}
            rows={4}
            className="form-control"
            required
            placeholder="Comment *"
            defaultValue={""}
          />
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="reply-name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="reply-name"
                name="reply-name"
                required
                placeholder="Name *"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="reply-email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="reply-email"
                name="reply-email"
                required
                placeholder="Email *"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary-2">
            <span>POST COMMENT</span>
            <i className="icon-long-arrow-right" />
          </button>
        </form>
      </div> */}
      {/* End . comment reply */}
    </div>
  );
};

export default NextBlog;
