import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "../../configuration/config";

const SliderContainer = () => {
  const [sliderDetails, setSliderDetails] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  var settings = {
    // dots: true,
    // fade: true,
    // accessibility: true,
    // arrows: true,
    // lazyload: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const getSlider = () => {
    API.get("/all-sliders")
      .then((response) => {
        setSliderDetails(response.data.data.sliders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="intro-slider-container">
        <div>
          <Slider {...settings}>
            {sliderDetails.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage: `url(${item.image_url})`,
                    }}
                  >
                    <div className="container">
                      <h3 className="intro-subtitle">{item.tag}</h3>
                      {/* End .h3 intro-subtitle */}
                      <h1 className="intro-title">
                        {item.title}
                        <br />
                        <span className="text-primary">
                          <sup className="text-white font-weight-light">
                            {" "}
                            starting from
                          </sup>
                          <sup>Rs</sup>
                          {item.starting_price}
                        </span>
                      </h1>

                      <a href={item.button_link} className="btn btn-primary">
                        <span>{item.button_text}</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* End .intro-slide */}
        </div>
      </div>
      <div className="mb-3 mb-lg-5"></div>
      {/* <!-- End .mb-3 mb-lg-5 --> */}
    </>
  );
};

export default SliderContainer;
