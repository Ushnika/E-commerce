import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";
import MyAccount from "./pages/MyAccount";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ThemeProvider } from "./context/ThemeProvider";
import PrivateRoutes from "./pages/PrivateRoutes";
import Error from "./pages/Error";
import EditBillingDetails from "./pages/EditBillingDetails";

import "./Theme";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import NewPassword from "./pages/NewPassword";
import ResetPasswordThemeProvider from "./components/PasswordResetPage/ResetPasswordThemeProvider";
import RefundPolicy from "./pages/RefundPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ThemeProvider>
        <ResetPasswordThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/category/:id" element={<Shop />} />
                <Route path="/shop/:id" element={<Product />} />
                <Route path="/shop/:keyword" element={<Shop />} />
                <Route path="/faq" element={<Faq />} />
                {/* <Route path="/singleblog" element={<BlogDetails />} /> */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/editBilling" element={<EditBillingDetails />} />
                <Route
                  path="/user/forget-password"
                  element={<ResetPassword />}
                />
                <Route path="/user/verification" element={<Verification />} />
                <Route path="/user/reset-password" element={<NewPassword />} />
                <Route path="/refundpolicy" element={<RefundPolicy />} />
                <Route path="/returnpolicy" element={<ReturnPolicy />} />
                <Route element={<PrivateRoutes />}>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/myaccount" element={<MyAccount />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Route>
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </ResetPasswordThemeProvider>
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
