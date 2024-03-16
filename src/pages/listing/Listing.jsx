import React, { useState } from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import Product from "../../componants/product/Product";
import { BiCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";

import "./Listing.css";
import { Button } from "@mui/material";

function ShopListing() {
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  return (
    <>
      <div className="listing-container my-12">
        <div className="container-fluid">
          <div className="top-heading">
            <h1 className="text-5xl font-bold">Snack</h1>
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>snack</li>
            </ul>
          </div>
          <div className="listing-content ">
            <div className="row">
              <div className="col-3 ">
                <Sidebar />
              </div>
              <div className="col-9 mt-4">
                <div className="top-strip flex justify-between">
                  <div className="result">
                    We found <span className="text-success font-bold">29</span>{" "}
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
                <div className="product-box">
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product tag={"top"} />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
                  <div className="ite ">
                    <Product />
                  </div>
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
