import React from "react";
import { useProductContext } from "../../context/productContext";
import Product2 from "../product2/Product2";

function FeatureProduct() {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>Loading...................</div>;
  }
  if (!featureProducts) {
    return null;
  }
  //   console.log(featureProducts);
  // console.log(featureProducts);
  return (
    <>
      <div className="feature-product-container py-8">
        <div className="container-fluid">
          <div className="feature-product2  ">
            {featureProducts.map((val) => {
              return val.map((val) => {
                return (
                  <>
                    <Product2 tag={"hot"} value={val} />
                  </>
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
