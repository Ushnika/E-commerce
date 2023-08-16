import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../configuration/config";
import { useThemeFilter } from "../../context/ThemeProvider";

const BottomNavbar = () => {
  const { handleCategoryFilter } = useThemeFilter();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    API.get("/categories/product-count")
      .then((response) => {
        const data = response.data.data.categories;
        const mostCategory = data
          .sort((a, b) => b.products_count - a.products_count)
          .slice(0, 15);
        setCategory(mostCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="header-left">
          <div className="dropdown category-dropdown">
            <div
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
              title="Browse Categories"
            >
              Browse Categories
            </div>
            <div className="dropdown-menu">
              <nav className="side-nav">
                <ul className="menu-vertical sf-arrows">
                  {category.map((item, index) => {
                    return (
                      <li className="item-lead" key={index}>
                        {item.status === 1 ? (
                          <Link
                            onClick={() => handleCategoryFilter(item.id)}
                            to={"/category/" + item.id}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <></>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* End .menu-vertical */}
              </nav>
              {/* End .side-nav */}
            </div>
            {/* End .dropdown-menu */}
          </div>
          {/* End .category-dropdown */}
        </div>
        {/* End .header-left */}
        <div className="header-center ml-auto">
          <nav className="main-nav">
            <ul className="menu sf-arrows">
              <li className="megamenu-container">
                <a href="/" className="sf-with-ul">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="sf-with-ul">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="sf-with-ul">
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="/blog" className="sf-with-ul">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="/contact" className="sf-with-ul">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* End .menu */}
          </nav>
          {/* End .main-nav */}
        </div>
        {/* End .header-center */}
        <div className="header-right">
          <i className="la la-lightbulb-o" />
          <p>
            Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
          </p>
        </div>
      </div>
      {/* End .container */}
    </div>
  );
};

export default BottomNavbar;
