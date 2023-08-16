import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../configuration/config";
import { useTheme } from "../../context/ThemeProvider";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { setProductData } = useTheme();

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
      <form onSubmit={searchHandler}>
        <div className="header-search-wrapper search-wrapper-wide">
          <label htmlFor="q" className="sr-only">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="q"
            id="q"
            placeholder="Search product ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            <i className="icon-search" />
          </button>
        </div>
        {/* End .header-search-wrapper */}
      </form>
    </div>
  );
};

export default Search;
