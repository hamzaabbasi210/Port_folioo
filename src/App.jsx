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
import Contact from "./pages/contact us/Contact";
import Blog from "./pages/blog/Blog";
import Pagess from "./pages/Pagess/Pagess";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<ShopListing />} />
        <Route path="/cat/:id/:id" element={<ShopListing />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="pages" element={<Pagess />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <FooterBnner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
