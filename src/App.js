import "./App.css";
import Navbar from "./pages/Navbar";
import Popup from "./pages/Popup";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Popup />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Aboutus" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
