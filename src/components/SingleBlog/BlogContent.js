import React from "react";

const BlogContent = () => {
  return (
    <div>
      <figure className="entry-media">
        <img src="assets/images/blog/single/1.jpg" alt="DescImg" />
      </figure>
      {/* End .entry-media */}
      <div className="entry-body">
        <div className="entry-meta">
          <span className="entry-author">by John Doe</span>
          <span className="meta-separator">|</span>
          Nov 22, 2018
          <span className="meta-separator">|</span>
        </div>
        {/* End .entry-meta */}
        <h2 className="entry-title">Cras ornare tristique elit.</h2>
        {/* End .entry-title */}
        <div className="entry-cats">
          in <span>Lifestyle</span>,<span>Shopping</span>
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
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <div className="pb-1" />
          {/* End .mb-1 */}
          <img
            src="assets/images/blog/single/2.jpg"
            alt="blogImg"
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
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.{" "}
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
          <img src="assets/images/blog/single/3.jpg" alt="blogImg" />
          <p>
            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
            justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
            eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est.
            Sed lectus. Praesentb elementum hendrerit tortor. Sed semper lorem
            at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
            arcu, dapibus eu, fermentum et, dapibus sed, urna.
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
      </div>
      {/* End .entry-body */}
      <div className="entry-author-details">
        <figure className="author-media">
          <img src="assets/images/blog/single/author.jpg" alt="User name" />
        </figure>
        {/* End .author-media */}
        <div className="author-body">
          <div className="author-header row no-gutters flex-column flex-md-row">
            <div className="col">
              <h4>John Doe</h4>
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
};

export default BlogContent;
