import { useState } from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";
import FooterBnner from "./componants/footer-banner/FooterBnner";
import Footer from "./componants/footer/Footer";
import ShopListing from "./pages/listing/Listing";
import About from "./pages/about-page/About";
import SingleProduct from "./pages/single-Product-Page/SingleProduct";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listing" element={<ShopListing />} />
        <Route path="about" element={<About />} />
        <Route path="singleProduct" element={<SingleProduct />} />
      </Routes>
      <FooterBnner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
