import React from "react";

const AddressInfo = () => {
  return (
    <div>
      <div className="container">
        {/* <div className="stores mb-4 mb-lg-5">
          <h2 className="title text-center mb-3">Our Stores</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="store">
                <div className="row">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src="assets/images/stores/img-1.jpg" alt="image" />
                    </figure>
                  </div>
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">Wall Street Plaza</h3>
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div>
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      <div>Monday - Saturday 11am to 7pm</div>
                      <div>Sunday 11am to 6pm</div>
                      <a href="#" className="btn btn-link" target="_blank">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="store">
                <div className="row">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src="assets/images/stores/img-2.jpg" alt="image" />
                    </figure>
                  </div>
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">One New York Plaza</h3>
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div>
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      <div>Monday - Friday 9am to 8pm</div>
                      <div>Saturday - 9am to 2pm</div>
                      <div>Sunday - Closed</div>
                      <a href="#" className="btn btn-link" target="_blank">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End .stores */}
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0107742970107!2d85.32447327767163!3d27.71595559746823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b586a6e0e5%3A0x35802479ddc4689c!2sBitsKraft%20Nepal!5e0!3m2!1sen!2snp!4v1690956441583!5m2!1sen!2snp"
            title="map"
            height="450"
            style={{ border: 0 }}
            className="mapFrame"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* <!-- End #map --> */}
      {/* <div className="mb-4" /> */}
    </div>
  );
};

export default AddressInfo;
