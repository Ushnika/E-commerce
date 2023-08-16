import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import API from "../configuration/config";
import { toast } from "react-toastify";
import AuthURL from "../configuration/authUrl";
import Cookies from "js-cookie";

const ThemeContext = createContext();
const ThemeFilterContext = createContext();
const ThemeAuthContext = createContext();
const ThemeCartContext = createContext();
const ThemeAddCartContext = createContext();
const ThemeAddWishlistContext = createContext();
const ThemeAddLoginDetails = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeFilter = () => {
  return useContext(ThemeFilterContext);
};

export const useThemeAuth = () => {
  return useContext(ThemeAuthContext);
};

export const useThemeCart = () => {
  return useContext(ThemeCartContext);
};

export const useThemeAddCart = () => {
  return useContext(ThemeAddCartContext);
};

export const useThemeAddWishlist = () => {
  return useContext(ThemeAddWishlistContext);
};

export const useThemeAddLoginDetails = () => {
  return useContext(ThemeAddLoginDetails);
};

export const ThemeProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (Cookies.get("loginToken") != null) {
      getProfileDetails();
    }
  }, []);

  const handleCategoryFilter = useCallback(
    (id) => {
      setLoading(true);
      API.get("/category/" + id + "/products?limit=30")
        .then((response) => {
          setProductData(response.data.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [setProductData]
  );

  const handleAddToCart = (id, quantity) => {
    if (!clicked) {
      setClicked(false);
      const formData = new FormData();
      formData.append("product_id", id);
      formData.append("quantity", quantity);
      AuthURL.post("cart/add-product", formData)
        .then((response) => {
          // console.log(response.data.data.carts.quantity);
          setCartProduct(response.data.data.carts);
          // setQuantity(response.data.data.carts.quantity);
          toast.success("Product added to cart successfully");
        })
        .catch((error) => {
          const { status, data } = error.response;
          if (status === 404) {
            setLoading(false);
            toast.error(data.message);
          } else if (status === 401) {
            setShow(true);
            toast.error("Please login to add product to cart");
          }
        });
    }
  };

  const handleAddWishlist = (id) => {
    const formData = new FormData();
    formData.append("product_id", id);

    AuthURL.post("wishlist/wishlist-product", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setWishlistProduct(response.data.data.wishlists);
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        const { status, data } = error.response;
        if (status === 401) {
          setShow(true);
          toast.error("Please login to add product to wishlist");
        } else if (status === 404) {
          toast.error(data.message);
        }
      });
  };

  const getProfileDetails = () => {
    AuthURL.get("profile/data")
      .then((response) => {
        console.log(response.data.data.user);
        setDetails(response.data.data.user);
        setName(response.data.data.user.name);
        setEmail(response.data.data.user.email);
        const expires = new Date();
        // expires.setDate(expires.getDate() + 1);
        expires.setTime(expires.getTime() + 1 * 3600 * 1000);
        Cookies.set("name", response.data.data.user.name, {
          expires: expires,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ThemeContext.Provider value={{ productData, setProductData }}>
        <ThemeFilterContext.Provider
          value={{ handleCategoryFilter: handleCategoryFilter }}
        >
          <ThemeAuthContext.Provider value={{ show, setShow }}>
            <ThemeCartContext.Provider
              value={{ cartProduct, setCartProduct, error, setError, loading }}
            >
              <ThemeAddCartContext.Provider
                value={{
                  handleAddToCart: handleAddToCart,
                  quantity,
                  setQuantity,
                }}
              >
                <ThemeAddWishlistContext.Provider
                  value={{
                    handleAddWishlist: handleAddWishlist,
                    wishlistProduct,
                    setWishlistProduct,
                  }}
                >
                  <ThemeAddLoginDetails.Provider
                    value={{ name, setName, email, details, setDetails }}
                  >
                    {children}
                  </ThemeAddLoginDetails.Provider>
                </ThemeAddWishlistContext.Provider>
              </ThemeAddCartContext.Provider>
            </ThemeCartContext.Provider>
          </ThemeAuthContext.Provider>
        </ThemeFilterContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};
