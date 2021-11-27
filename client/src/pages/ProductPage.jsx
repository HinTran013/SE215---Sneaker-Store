import React, { useState } from "react";
import backgroundImageTop from "../assets/images/productDetail/detail-product-bg.jpg";
import BackgroundWithPath from "../components/Products/BackgroundWithPath";
import ProductsMainPart from "../components/Products/ProductsMainPart";
import FloatingFilter from "../components/Products/FloatingFilter";
import SideBar from "../components/Products/SideBar";

const ProductPage = () => {
  // check when to show mobile sidebar
  const [showMobileSideBar, setShowMobileSideBar] = React.useState(false);
  // check if user scroll to bottom of the page to hide floating filter
  // const [isScrollToBot, setIsScrollToBot] = React.useState(false);

  // toggle mobile sidebar
  const toggleMobileSideBar = () => {
    return setShowMobileSideBar(!showMobileSideBar);
  };

  
  
  // //if user scroll to bottom -> hide floating filter on small device (avoid overlay pagination section)
  // function hideFloatingFilter(e) {
  //   const bottom =
  //     e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom) {
  //     setIsScrollToBot(true);
  //   }
  // }

  return (
    <div style={{ position: "relative" }}>
      {/* Image on the top of page with page title */}
      <BackgroundWithPath
        img={backgroundImageTop}
        pathText="Home/ Products"
        title="Men's shoes"
      />
 
      {/* Show products and side bar */}
      <ProductsMainPart
        showMobileSideBar={showMobileSideBar}
        toggleMobileSideBar={toggleMobileSideBar}
      />
     

      {/* floating mobile side menu button */}

      <FloatingFilter click={toggleMobileSideBar} isShow={showMobileSideBar} />
      
    </div>
  );
};

export default ProductPage;
