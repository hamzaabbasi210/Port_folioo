import { useEffect } from "react";
import React from "react";
import { useProductContext } from "../../context/productContext";
import Product2 from "../product2/Product2";
import { NavLink } from "react-router-dom";

// cosnst Api = "http://localhost:3000/productData";
function FeatureProduct() {
  // useEffect(() => {
  //   getSingleProduct(Api);
  // }, []);
  const {
    isLoading,
    featureProducts,
    isSingleLoading,
    getSingleProduct,
    singleProduct,
  } = useProductContext();
  // console.log(singleProduct);
  if (isLoading) {
    return <div>Loading...................</div>;
  }
  if (!featureProducts) {
    return null;
  }
  // console.log(singleProduct);
  return (
    <>
      <div className="feature-product-container py-8">
        <div className="container-fluid">
          <div className="feature-product2  ">
            {featureProducts.map((val) => {
              return val.map((val) => {
                return (
                  <div key={val.id}>
                    <Product2 tag={"hot"} value={val} />
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;
