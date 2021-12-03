import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

import React from "react";
import AccountInfoPage from "./pages/AccountInfoPage";
import HistoryInfoPage from "./pages/HistoryInfoPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog" component={Page404} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/account" component={AccountInfoPage} />
          <Route path="/history" component={HistoryInfoPage} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
