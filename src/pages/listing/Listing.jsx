import React, { useState, useEffect } from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import { BiCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import "./Listing.css";
import { Button } from "@mui/material";
import Product2 from "../../componants/product2/Product2";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function ShopListing(props) {
  const { Products } = useProductContext();
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [catProductsData, setCatProductsData] = useState([]);
  const { id } = useParams();

  var itemArr = [];
  useEffect(() => {
    Products.length !== 0 &&
      Products.map((val) => {
        if (props.single === true) {
          if (val.cat_name.toLowerCase() === id.toLowerCase()) {
            val.items.length !== 0 &&
              val.items.map((val) => {
                val.products.length !== 0 &&
                  val.products.map((val) => {
                    itemArr.push(val);
                  });
              });
          }
        } else if (props.single === false) {
          val.items.map((val) => {
            if (
              val.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              val.products.map((val) => {
                itemArr.push({ ...val });
              });
            }
          });
        } else {
          val.items.map((val) => {
            val.products.map((val) => {
              itemArr.push(val);
            });
          });
        }
      });
    const list2 = itemArr.filter(
      (item, index) => itemArr.indexOf(item) === index
    );
    setCatProductsData(list2);
  }, [id]);

  const filterByPrice = (minValue, maxValue) => {
    Products.map((val) => {
      if (val.cat_name.toLowerCase() === id.toLowerCase()) {
        val.items.map((val) => {
          val.products.map((val) => {
            let price = parseInt(val.price.toString().replace(/,/g, ""));
            console.log(price);
            if (minValue <= price && maxValue >= price) {
              itemArr.push(val);
            }
          });
        });
      } else {
        val.items.length !== 0 &&
          val.items.map((item_, index_) => {
            if (
              item_.cat_name.split(" ").join("-").toLowerCase() ==
              id.split(" ").join("-").toLowerCase()
            ) {
              item_.products.map((product) => {
                let price = parseInt(
                  product.price.toString().replace(/,/g, "")
                );
                if (minValue <= price && maxValue >= price) {
                  itemArr.push({
                    ...product,
                  });
                }
              });
            }
          });
      }
    });
    const list2 = itemArr.filter(
      (item, index) => itemArr.indexOf(item) === index
    );
    setCatProductsData(list2);
  };

  return (
    <>
      <div className="listing-container my-12">
        <div className="container-fluid">
          <div className="top-heading">
            <h1 className="text-5xl font-bold">
              {sessionStorage.getItem("cat")}
            </h1>
            <ul>
              <li>
                <NavLink to="/" style={{ color: "#3BB77D" }}>
                  home &nbsp;/{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/cat/${sessionStorage.getItem("cat")}`}
                  style={{ color: "#3BB77D" }}
                >
                  {sessionStorage.getItem("cat")}&nbsp;&nbsp;/
                </NavLink>
              </li>
              {props.single === false && (
                <li style={{ color: "#3BB77D" }}>{id}</li>
              )}
            </ul>
          </div>
          <div className="listing-content ">
            <div className="row">
              <div className="col-3 ">
                <Sidebar filterByPrice={filterByPrice} range={true} />
              </div>
              <div className="col-9 mt-4">
                <div className="top-strip flex justify-between">
                  <div className="result">
                    We found{" "}
                    <span className="text-success font-bold">
                      {catProductsData.length}
                    </span>{" "}
                    items for you!
                  </div>
                  <div className="filter-btn flex ">
                    <div className="tab relative">
                      <Button onClick={() => setPriceDropdown(!priceDropdown)}>
                        <BiCategory />
                        Show: 50
                      </Button>
                      {priceDropdown === true && (
                        <div className="account-dropdown z-50 bg-[#FFFFFf] w-[90%] h-[auto]  absolute top-[100%] shadow-md right-4 py-4 ">
                          <ul className="w-full ">
                            <li className="pb-2 pl-2  ">&nbsp;&nbsp;50</li>
                            <li className="pb-2 pl-2  ">&nbsp;&nbsp;100</li>
                            <li className="pb-2 pl-2  ">&nbsp;&nbsp;150</li>
                            <li className="pb-2 pl-2  ">&nbsp;&nbsp;200</li>
                            <li className="pb-2 pl-2  ">&nbsp;&nbsp;all</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="tab relative">
                      <Button
                        onClick={() => setCategoryDropdown(!categoryDropdown)}
                      >
                        <TbCategoryPlus />
                        Show: 50
                      </Button>
                      {categoryDropdown === true && (
                        <div className="account-dropdown z-50 bg-[#FFFFFf] w-[90%] h-[auto] text-sm  absolute top-[100%] shadow-md right-4 py-4 ">
                          <ul className="w-full ">
                            <li className="pb-2 pl-2  ">
                              &nbsp;&nbsp;price: low to high
                            </li>
                            <li className="pb-2 pl-2  ">
                              &nbsp;&nbsp;price: high to low
                            </li>
                            <li className="pb-2 pl-2  ">
                              &nbsp;&nbsp;release: date
                            </li>
                            <li className="pb-2 pl-2  ">
                              &nbsp;&nbsp;avg: ratting
                            </li>
                            <li className="pb-2 pl-2  ">
                              &nbsp;&nbsp;sign out
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="product-box mt-6">
                  {catProductsData.map((val) => {
                    return (
                      <div className="feature-product2  mr-6 ">
                        <Product2 value={val} />
                      </div>
                    );
                  })}

                  {/* {catProductsData.map((val) => {
                    return val.items.map((val) => {
                      return val.products.map((val) => {
                        return (
                          <div key={val.id} className="feature-product2  mr-6 ">
                            <Product2 value={catProductsData} />;
                          </div>
                        );
                      });
                    });
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopListing;
