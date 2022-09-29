import React from "react";

export default function BlogComment() {
  return (
    <div>
      <div className="related-posts">
        <h3 className="title">Related Posts</h3>
        {/* End .title */}
        <div
          className="owl-carousel owl-simple"
          data-toggle="owl"
          data-owl-options='{
                                        "nav": false, 
                                        "dots": true,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":1
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            }
                                        }
                                    }'
        >
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img
                  src="assets/images/blog/grid/3cols/post-1.jpg"
                  alt="image desc"
                />
              </a>
            </figure>
            {/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 22, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">2 Comments</a>
              </div>
              {/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Cras ornare tristique elit.</a>
              </h2>
              {/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
              </div>
              {/* End .entry-cats */}
            </div>
            {/* End .entry-body */}
          </article>
          {/* End .entry */}
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img
                  src="assets/images/blog/grid/3cols/post-2.jpg"
                  alt="image desc"
                />
              </a>
            </figure>
            {/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 21, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">0 Comments</a>
              </div>
              {/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Vivamus ntulla necante.</a>
              </h2>
              {/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Lifestyle</a>
              </div>
              {/* End .entry-cats */}
            </div>
            {/* End .entry-body */}
          </article>
          {/* End .entry */}
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img
                  src="assets/images/blog/grid/3cols/post-3.jpg"
                  alt="image desc"
                />
              </a>
            </figure>
            {/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 18, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">3 Comments</a>
              </div>
              {/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Utaliquam sollicitudin leo.</a>
              </h2>
              {/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Fashion</a>,<a href="#">Lifestyle</a>
              </div>
              {/* End .entry-cats */}
            </div>
            {/* End .entry-body */}
          </article>
          {/* End .entry */}
          <article className="entry entry-grid">
            <figure className="entry-media">
              <a href="single.html">
                <img
                  src="assets/images/blog/grid/3cols/post-4.jpg"
                  alt="image desc"
                />
              </a>
            </figure>
            {/* End .entry-media */}
            <div className="entry-body">
              <div className="entry-meta">
                <a href="#">Nov 15, 2018</a>
                <span className="meta-separator">|</span>
                <a href="#">4 Comments</a>
              </div>
              {/* End .entry-meta */}
              <h2 className="entry-title">
                <a href="single.html">Fusce pellentesque suscipit.</a>
              </h2>
              {/* End .entry-title */}
              <div className="entry-cats">
                in <a href="#">Travel</a>
              </div>
              {/* End .entry-cats */}
            </div>
            {/* End .entry-body */}
          </article>
          {/* End .entry */}
        </div>
        {/* End .owl-carousel */}
      </div>
      {/* End .related-posts */}
      <div className="comments">
        <h3 className="title">3 Comments</h3>
        {/* End .title */}
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
                {/* End .comment-user */}
                <div className="comment-content">
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.{" "}
                  </p>
                </div>
                {/* End .comment-content */}
              </div>
              {/* End .comment-body */}
            </div>
            {/* End .comment */}
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
                    {/* End .comment-user */}
                    <div className="comment-content">
                      <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                    </div>
                    {/* End .comment-content */}
                  </div>
                  {/* End .comment-body */}
                </div>
                {/* End .comment */}
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
                {/* End .comment-user */}
                <div className="comment-content">
                  <p>
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                    pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                </div>
                {/* End .comment-content */}
              </div>
              {/* End .comment-body */}
            </div>
            {/* End .comment */}
          </li>
        </ul>
      </div>
      {/* End .comments */}
      <div className="reply">
        <div className="heading">
          <h3 className="title">Leave A Reply</h3>
          {/* End .title */}
          <p className="title-desc">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        {/* End .heading */}
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
            {/* End .col-md-6 */}
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
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}
          <button type="submit" className="btn btn-outline-primary-2">
            <span>POST COMMENT</span>
            <i className="icon-long-arrow-right" />
          </button>
        </form>
      </div>
      {/* End .reply */}
    </div>
  );
}
