import "./App.css";
import Navbar from "./pages/Navbar";
import Popup from "./pages/Popup";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
