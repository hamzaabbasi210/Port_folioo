import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";
import FooterBnner from "./componants/footer-banner/FooterBnner";
import Footer from "./componants/footer/Footer";
import ShopListing from "./pages/listing/Listing";
import App from "./App";
import { AppProvider } from "./context/productContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
