import React, { useEffect, useState } from "react";
import API from "../../configuration/config";
import { useTheme } from "../../context/ThemeProvider";
import RangeSlider from "./RangeSlider";

const Filter = () => {
  const { productData, setProductData } = useTheme();
  const [categoryCount, setCategoryCount] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allbrand, setAllBrand] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [checkbox, setCheckbox] = useState([]);
  const [brandCheckbox, setBrandCheckbox] = useState([]);

  useEffect(() => {
    getCategoryCount();
    handleAll();
    getBrand();
  }, []);

  //show the category with count
  const getCategoryCount = () => {
    API.get("/categories/product-count")
      .then((response) => {
        const data = response.data.data.categories;
        const mostCategory = data.sort(
          (a, b) => b.products_count - a.products_count
        );
        setCategoryCount(mostCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //show all the brand
  const getBrand = () => {
    API.get("/all-brands?limit=50")
      .then((response) => {
        setAllBrand(response.data.data.brands);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //show all the product
  const handleAll = () => {
    API.get("/all-products?limit=30")
      .then((response) => {
        setAllProducts(response.data.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategoryFilter = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    // Update the selected categories list
    const updatedCategories = isChecked
      ? [...checkbox, category]
      : checkbox.filter((c) => c !== category);
    setCheckbox(updatedCategories);
    API.get(
      `/all-products?${updatedCategories
        .map((n, index) => `categories_ids[]=${n}`)
        .join("&")}&${brandCheckbox
        .map((n, index) => `brand_ids[]=${n}`)
        .join("&")}`
    )
      .then((response) => setProductData(response.data.data.products))
      .catch((error) => console.log(error));
  };

  const handleBrandFilter = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;

    // Update the selected categories list
    const updatedBrand = isChecked
      ? [...brandCheckbox, brand]
      : brandCheckbox.filter((c) => c !== brand);
    setBrandCheckbox(updatedBrand);

    // Make an API call to fetch products based on the selected categories and brands
    API.get(
      `/all-products?${checkbox
        .map((n, index) => `categories_ids[]=${n}`)
        .join("&")}&${updatedBrand
        .map((n, index) => `brand_ids[]=${n}`)
        .join("&")}`
    )
      .then((response) => setProductData(response.data.data.products))
      .catch((error) => console.log(error));
  };

  const handleClear = () => {
    setProductData(allProducts);
  };

  const handleRangeSlider = ({ min, max }) => {
    setMin(min);
    setMax(max);
    const filteredData = productData.filter(
      (item) => item.price > min && item.price < max
    );
    setProductData(filteredData);
  };

  console.log(min, max);

  return (
    <div>
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <span className="sidebar-filter-clear" onClick={handleClear}>
            Clean All
          </span>
        </div>
        {/* End .widget widget-clean */}
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-1"
              role="button"
              aria-expanded="true"
              aria-controls="widget-1"
            >
              Category
            </a>
          </h3>
          {/* End .widget-title */}
          <div className="collapse show" id="widget-1">
            <div className="widget-body">
              <div className="filter-items filter-items-count">
                {categoryCount.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.status === 1 ? (
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="mt-0 form-check-input custom-control-input "
                              type="checkbox"
                              value={item.id}
                              // checked={isChecked}
                              // onChange={() => handleCategoryFilter(item.id)}
                              // value={!!checkboxes[item]}
                              onChange={handleCategoryFilter}
                              id={item.updated_at}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={item.updated_at}
                            >
                              {item.name}
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">
                            {item.products_count}
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
                {/* End .filter-item */}
              </div>
              {/* End .filter-items */}
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-4"
              role="button"
              aria-expanded="true"
              aria-controls="widget-4"
            >
              Brand
            </a>
          </h3>
          {/* End .widget-title */}
          <div className="collapse show" id="widget-4">
            <div className="widget-body">
              <div className="filter-items">
                {allbrand.map((item, index) => {
                  return (
                    <div className="filter-item" key={index}>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="mt-0 form-check-input  custom-control-input"
                          type="checkbox"
                          value={item.id}
                          aria-label="Checkbox for following text input"
                          onChange={handleBrandFilter}
                          id={item.id}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                  );
                })}
                {/* End .filter-item */}
              </div>
              {/* End .filter-items */}
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-5"
              role="button"
              aria-expanded="true"
              aria-controls="widget-5"
            >
              Price
            </a>
          </h3>
          {/* End .widget-title */}
          <div className="collapse show" id="widget-5">
            <div className="widget-body">
              <div className="filter-price">
                <div className="filter-price-text">
                  Price Range:
                  <span id="filter-price-range" />
                </div>
                <RangeSlider
                  min={0}
                  max={1000000}
                  onChange={handleRangeSlider}
                />
                {/* End .filter-price-text */}
                {/* <div id="price-slider" /> */}
                {/* End #price-slider */}
              </div>
              {/* End .filter-price */}
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}
      </div>
      {/* End .sidebar sidebar-shop */}
    </div>
  );
};

export default Filter;
