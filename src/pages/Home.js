import React from "react";
import Advertisement from "./Home/Advertisement";
import Banner from "./Home/Banner";
import BlogPage from "./Home/BlogPage";
import Slider from "./Home/Slider";
import TabProducts from "./Home/TabProducts";
import TopProducts from "./Home/TopProducts";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <TabProducts />
      <Advertisement />
      <TopProducts />
      <BlogPage />
      <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
      </button>
    </div>
  );
}
