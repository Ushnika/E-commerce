import React from "react";
import Banner from "../components/Home/Banner";
// import BlogPage from "../components/Home/BlogPage";
import Slider from "../components/Home/SliderContainer";
import TabProducts from "../components/Home/TabProducts";
import TopProducts from "../components/Home/TopProducts";
import Service from "../components/Home/Service";

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <TabProducts />
      {/* <Advertisement /> */}
      <TopProducts />
      {/* <BlogPage /> */}
      <Service />
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
};

export default Home;
