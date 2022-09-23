import React from "react";

export default function AddressInfo() {
  const map = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.990065112725!2d85.31688537505973!3d27.671090881227805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c259c833d%3A0x66f809ed805dca4f!2sHandicraft%20Creation!5e0!3m2!1sne!2snp!4v1663839008526!5m2!1sne!2snp"
      width="600"
      height="450"
      style="border:0;"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  return (
    <div>
      <div className="container another-container">
        <div className="stores mb-4 mb-lg-5">
          <h2 className="title text-center mb-3">Our Stores</h2>
          {/* End .title text-center mb-2 */}
          <div className="row">
            <div className="col-lg-6">
              <div className="store">
                <div className="row">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src="assets/images/stores/img-1.jpg" alt="image" />
                    </figure>
                    {/* End .store-media */}
                  </div>
                  {/* End .col-xl-6 */}
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">Wall Street Plaza</h3>
                      {/* End .store-title */}
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div>
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      {/* End .store-subtitle */}
                      <div>Monday - Saturday 11am to 7pm</div>
                      <div>Sunday 11am to 6pm</div>
                      <a href="#" className="btn btn-link" target="_blank">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .store-content */}
                  </div>
                  {/* End .col-xl-6 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .store */}
            </div>
            {/* End .col-lg-6 */}
            <div className="col-lg-6">
              <div className="store">
                <div className="row">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src="assets/images/stores/img-2.jpg" alt="image" />
                    </figure>
                    {/* End .store-media */}
                  </div>
                  {/* End .col-xl-6 */}
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">One New York Plaza</h3>
                      {/* End .store-title */}
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div>
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      {/* End .store-subtitle */}
                      <div>Monday - Friday 9am to 8pm</div>
                      <div>Saturday - 9am to 2pm</div>
                      <div>Sunday - Closed</div>
                      <a href="#" className="btn btn-link" target="_blank">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .store-content */}
                  </div>
                  {/* End .col-xl-6 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .store */}
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .stores */}
      </div>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.990065112725!2d85.31688537505973!3d27.671090881227805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c259c833d%3A0x66f809ed805dca4f!2sHandicraft%20Creation!5e0!3m2!1sne!2snp!4v1663839008526!5m2!1sne!2snp"
          width={1520}
          height={500}
          style={{ border: 0 }}
          allowfullcreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* <!-- End #map --> */}
      {/* <div className="mb-4" /> */}
    </div>
  );
}
