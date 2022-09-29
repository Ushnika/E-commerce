import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";
import MyAccount from "./pages/MyAccount";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/product" element={<Product />} />
            <Route path="/singleblog" element={<BlogDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
