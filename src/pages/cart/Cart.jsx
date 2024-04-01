import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaLongArrowAltRight } from "react-icons/fa";
import "./Cart.css";
import QuantityBox from "../../componants/quantityBox/QuantityBox";
import { useCartContext } from "../../context/cartContext";
function cart() {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <div className="cart-container">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  cart
                </li>
              </ol>
            </nav>
          </div>
          <div className="row mt-8 mb-56">
            <div className="hd">your cart</div>
            <p>There are 3 products in your cart</p>
            <div className="col-8">
              <div className="cart-left-container">
                <div className="cart-items">
                  <div className="cart-table">
                    <table className="table">
                      <thead className="bg-[#3BB77D] bg-black">
                        <tr className="bg-black">
                          <td className="">Product</td>
                          <td>Unit Price</td>
                          <td>Quantity</td>
                          <td>Subtotal</td>
                          <td>Remove</td>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((val) => {
                          // console.log(val.price);
                          return (
                            <tr>
                              <td>
                                <div className="table-items flex item-center gap-8">
                                  <div className="img border rounded">
                                    <img
                                      src={val.catImg}
                                      alt=""
                                      className="w-32 "
                                    />
                                  </div>
                                  <div className="table-info">
                                    <h4 className="text-lg">
                                      {val.productName}
                                    </h4>
                                    <Rating value={parseInt(val.rating)} />
                                  </div>
                                </div>
                              </td>
                              <td>$S{val.price}</td>
                              <td>
                                <QuantityBox qunatity={val.quantity} />
                              </td>
                              <td>$21.9</td>
                              <td>
                                <FaRegTrashAlt />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 h-max border p-4 rounded">
              <div className="cart-right-container">
                <div className="checkout-info border">
                  <div className="subtotle flex justify-between border p-2">
                    <h5 className="text-xl font-bold text-[#9e9999]">
                      subtotle
                    </h5>
                    <h5 className="text-2xl font-bold">$21.9</h5>
                  </div>
                  <div className="subtotle flex justify-between border p-2 my-4">
                    <h5 className="text-xl font-bold text-[#9e9999]">
                      shipping
                    </h5>
                    <h5 className="text-2xl font-bold">free</h5>
                  </div>
                  <div className="subtotle flex justify-between border p-2">
                    <h5 className="text-xl font-bold text-[#9e9999]">total</h5>
                    <h5 className="text-2xl font-bold">$21.9</h5>
                  </div>
                </div>
                <Button
                  style={{
                    backgroundColor: "#3BB77D",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  proced to checkout{" "}
                  <FaLongArrowAltRight
                    style={{ marginLeft: "10px", fontSize: "20px" }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cart;
