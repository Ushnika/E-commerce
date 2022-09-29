import React from "react";

export default function BlogContent() {
  return (
    <div>
      <figure className="entry-media">
        <img src="assets/images/blog/single/1.jpg" alt="image desc" />
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
        <h2 className="entry-title">Cras ornare tristique elit.</h2>
        {/* End .entry-title */}
        <div className="entry-cats">
          in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
        </div>
        {/* End .entry-cats */}
        <div className="entry-content editor-content">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a <a href="#">ultrices sagittis</a>, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
            arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div className="pb-1" />
          {/* End .mb-1 */}
          <img
            src="assets/images/blog/single/2.jpg"
            alt="image"
            className="float-left"
          />
          <h3>Quisque volutpat mattiseros. </h3>
          <ul>
            <li>
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
              justo. Suspendisse potenti.{" "}
            </li>
            <li>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est.{" "}
            </li>
            <li>
              Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem
              at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </li>
          </ul>
          <div className="pb-1 clearfix" />
          {/* End .clearfix */}
          <p>
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula <a href="#">sollicitudin laoreet</a> viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
            justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
            eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est.
            Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
            felis.{" "}
          </p>
          <blockquote>
            <p>
              “ Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. ”
            </p>
          </blockquote>
          <p>
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
            pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi
            interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
            ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus.{" "}
          </p>
          <div className="pb-1" />
          {/* End .pb-1 */}
          <h3>Morbi interdum mollis sapien.</h3>
          <img src="assets/images/blog/single/3.jpg" alt="image" />
          <p>
            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
            justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
            eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est.
            Sed lectus. Praesent <a href="#">elementum hendrerit</a> tortor. Sed
            semper lorem at felis. Vestibulum volutpat, lacus a ultrices
            sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
            Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl. Suspendisse mauris. Fusce accumsan
            mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.
            Integer adipiscing risus a sem. Nullam quis massa sit amet nibh
            viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non,
            congue vel, arcu.{" "}
          </p>
        </div>
        {/* End .entry-content */}
        <div className="entry-footer row no-gutters flex-column flex-md-row">
          <div className="col-md">
            <div className="entry-tags">
              <span>Tags:</span> <a href="#">photography</a>{" "}
              <a href="#">style</a>
            </div>
            {/* End .entry-tags */}
          </div>
          {/* End .col */}
          <div className="col-md-auto mt-2 mt-md-0">
            <div className="social-icons social-icons-color">
              <span className="social-label">Share this post:</span>
              <a
                href="#"
                className="social-icon social-facebook"
                title="Facebook"
                target="_blank"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon social-twitter"
                title="Twitter"
                target="_blank"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon social-pinterest"
                title="Pinterest"
                target="_blank"
              >
                <i className="icon-pinterest" />
              </a>
              <a
                href="#"
                className="social-icon social-linkedin"
                title="Linkedin"
                target="_blank"
              >
                <i className="icon-linkedin" />
              </a>
            </div>
            {/* End .soial-icons */}
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .entry-footer row no-gutters */}
      </div>
      {/* End .entry-body */}
      <div className="entry-author-details">
        <figure className="author-media">
          <a href="#">
            <img src="assets/images/blog/single/author.jpg" alt="User name" />
          </a>
        </figure>
        {/* End .author-media */}
        <div className="author-body">
          <div className="author-header row no-gutters flex-column flex-md-row">
            <div className="col">
              <h4>
                <a href="#">John Doe</a>
              </h4>
            </div>
            {/* End .col */}
            <div className="col-auto mt-1 mt-md-0">
              <a href="#" className="author-link">
                View all posts by John Doe{" "}
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="author-content">
            <p>
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.{" "}
            </p>
          </div>
          {/* End .author-content */}
        </div>
        {/* End .author-body */}
      </div>
      {/* End .entry-author-details*/}
      {/* End .entry */}
    </div>
  );
}
