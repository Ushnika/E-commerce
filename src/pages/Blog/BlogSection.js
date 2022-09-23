import React from "react";

export default function BlogSection() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container another-container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Blog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Grid 3 Columns
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="container another-container">
        <nav className="blog-nav">
          <ul className="menu-cat entry-filter justify-content-center">
            <li className="active">
              <a href="#" data-filter="*">
                All Blog Posts<span>9</span>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".lifestyle">
                Lifestyle<span>3</span>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".shopping">
                Shopping<span>1</span>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".fashion">
                Fashion<span>2</span>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".travel">
                Travel<span>4</span>
              </a>
            </li>
            <li>
              <a href="#" data-filter=".hobbies">
                Hobbies<span>2</span>
              </a>
            </li>
          </ul>
          {/* End .blog-menu */}
        </nav>
        {/* End .blog-nav */}
        <div className="entry-container max-col-3" data-layout="fitRows">
          <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
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
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
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
                <div className="entry-content">
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh.
                    Suspendisse potenti. Sed egestas vulputate ...
                  </p>
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
          <div className="entry-item lifestyle col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media entry-video">
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
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 21, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">0 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Lifestyle</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Morbi purus libero, faucibus commodo quis, gravida id, est.
                    Vestibulumvolutpat, lacus a ultrices sagittis, mi neque
                    euismod dui ...
                  </p>
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
          <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <div
                  className="owl-carousel owl-simple owl-light owl-nav-inside"
                  data-toggle="owl"
                >
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-3.jpg"
                      alt="image desc"
                    />
                  </a>
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-4.jpg"
                      alt="image desc"
                    />
                  </a>
                </div>
                {/* End .owl-carousel */}
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
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
                <div className="entry-content">
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh.
                    Suspendisse potenti. Sed egestas ...{" "}
                  </p>
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
          <div className="entry-item travel col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
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
                  <span className="entry-author">
                    by <a href="#">Jane Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
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
                <div className="entry-content">
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat. Aliquam
                    erat volutpat ...{" "}
                  </p>
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
          <div className="entry-item travel hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/blog/grid/3cols/post-5.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 11, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">2 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Aenean dignissim pellente squefelis.</a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Travel</a>,<a href="#">Hobbies</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
                    porttitor, facilisis luctus, metus. Phasellus ultrices nulla
                    quis nibh. Quisque lectus ...{" "}
                  </p>
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
          <div className="entry-item hobbies col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/blog/grid/3cols/post-6.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 10, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">4 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Quisque volutpat mattiseros.</a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Hobbies</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus. Phasellus ultrices nulla quis nibh. Quisque
                    lectus. Donec consectetuer ...{" "}
                  </p>
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
          <div className="entry-item travel col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <div
                  className="owl-carousel owl-simple owl-light owl-nav-inside"
                  data-toggle="owl"
                >
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-7.jpg"
                      alt="image desc"
                    />
                  </a>
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-6.jpg"
                      alt="image desc"
                    />
                  </a>
                </div>
                {/* End .owl-carousel */}
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 11, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">3 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Utaliquam sollicitudin leo.</a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Travel</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat. Aliquam
                    erat volutpat ...{" "}
                  </p>
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
          <div className="entry-item fashion col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/blog/grid/3cols/post-8.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 08, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">0 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Quisque a lectus. </a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Fashion</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
                    porttitor, facilisis luctus, metus. Phasellus ultrices nulla
                    quis nibh. Quisque lectus ...{" "}
                  </p>
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
          <div className="entry-item travel col-sm-6 col-lg-4">
            <article className="entry entry-grid text-center">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/blog/grid/3cols/post-9.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body">
                <div className="entry-meta">
                  <span className="entry-author">
                    by <a href="#">John Doe</a>
                  </span>
                  <span className="meta-separator">|</span>
                  <a href="#">Nov 07, 2018</a>
                  <span className="meta-separator">|</span>
                  <a href="#">5 Comments</a>
                </div>
                {/* End .entry-meta */}
                <h2 className="entry-title">
                  <a href="single.html">Fusce lacinia arcu etnulla.</a>
                </h2>
                {/* End .entry-title */}
                <div className="entry-cats">
                  in <a href="#">Travel</a>
                </div>
                {/* End .entry-cats */}
                <div className="entry-content">
                  <p>
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus. Phasellus ultrices nulla quis nibh. Quisque
                    lectus. Donec consectetuer ...
                  </p>
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
        {/* End .entry-container */}
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a
              class="page-link page-link-prev"
              href="#"
              aria-label="Previous"
              tabindex="-1"
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
