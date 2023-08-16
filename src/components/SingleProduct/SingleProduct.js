import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../configuration/config";
import Loading from "../Elements/Loading";
import NextProducts from "./NextProducts";
import ProductDetails from "./ProductDetails";
import ProductQuestion from "./ProductQuestion";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [gallery, setGallery] = useState([]);
  const [image, setImage] = useState("");
  const [categoryWiseItem, setCategoryWiseItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSingleProduct = () => {
      setLoading(true);
      API.get("/product/" + id)
        .then((response) => {
          setLoading(false);
          setProduct(response.data.data.product);
          setImage(response.data.data.product.image);
          setGallery(response.data.data.product.gallery);
          console.log(response.data.data.product.category_id);
          console.log(response.data.data);
          getCategoryWiseProduct(response.data.data.product.category_id);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleSingleProduct();
  }, [product.category_id, id]);

  const getCategoryWiseProduct = (categoryID) => {
    API.get("/category/" + categoryID + "/products")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setCategoryWiseItem(response.data.data.products);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === 404) {
          console.log(data.message);
        }
      });
  };

  console.log(product);
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/shop">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <ProductDetails product={product} image={image} gallery={gallery} />
            <ProductQuestion product={product} />
            <h2 className="title text-center mb-4">You May Also Like</h2>
            <NextProducts categoryWiseItem={categoryWiseItem} />
            {/* End .title text-center */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
