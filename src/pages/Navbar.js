import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTheme, useThemeFilter } from "../context/ThemeProvider";
import TopNavbar from "../components/Navbar/TopNavbar";
import API from "../configuration/config";
import Footer from "./Footer";
import CenterNavbar from "../components/Navbar/CenterNavbar";
import BottomNavbar from "../components/Navbar/BottomNavbar";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  const { handleCategoryFilter } = useThemeFilter();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { setProductData } = useTheme();
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    API.get("/categories/product-count")
      .then((response) => {
        const data = response.data.data.categories;
        const mostCategory = data
          .sort((a, b) => b.products_count - a.products_count)
          .slice(0, 30);
        setCategory(mostCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/shop?q=${keyword}`);
      API.get("all-products", {
        params: {
          search: keyword,
        },
      })
        .then((response) => {
          setProductData(response.data.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/shop");
    }
  };
  return (
    <div>
      <header className="header header-2 header-intro-clearance">
        <div className="header-top">
          <TopNavbar />
        </div>
        {/* End .header-top */}
        <div className="header-middle">
          <CenterNavbar />
        </div>
        {/* End .header-middle */}
        <div className="header-bottom sticky-header">
          <BottomNavbar />
        </div>
        {/* End .header-bottom */}
      </header>{" "}
      {/* End .header */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <form className="mobile-search" onSubmit={searchHandler}>
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search product ..."
              required
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  {/* <li>
                    <a href="/blog">Blog</a>
                  </li> */}
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
              {/* End .mobile-nav */}
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  {category.map((item, index) => {
                    return (
                      <li className="item-lead" key={index}>
                        {item.status === 1 ? (
                          <a
                            onClick={() => handleCategoryFilter(item.id)}
                            href={"/category/" + item.id}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <></>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* End .mobile-cats-menu */}
              </nav>
              {/* End .mobile-cats-nav */}
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}
          <div className="social-icons">
            <a
              href="/"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a href="/" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a
              href="/"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a href="/" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
          {/* End .social-icons */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
      {/* End .modal */}
      {/* <Popup /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
