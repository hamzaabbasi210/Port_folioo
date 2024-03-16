import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import "./SingleProduct.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Sidebar from "../../componants/sidebar/Sidebar";
import productimg from "../../assets/product1.jpg";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import Slider from "react-slick";

function SingleProduct() {
  const [inpVal, setInpVal] = useState(0);
  const [showImage, setShowImage] = useState("src/assets/product1.jpg");

  const increment = () => {
    if (inpVal < 10) {
      setInpVal(inpVal + 1);
    }
    if (inpVal === 10) {
      alert("you can order once only 10 pieces");
    }
  };

  const decrement = () => {
    if (inpVal > 0) {
      setInpVal(inpVal - 1);
    }
  };

  const productImages = [
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-0-202308311426.jpg",
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-1-202308311426.jpg",
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-2-202308311426.jpg",
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-3-202308311426.jpg",
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-product-images-o491187309-p491187309-4-202308311426.jpg",
    "https://www.jiomart.com/images/product/original/491187309/good-life-whole-moong-500-g-legal-images-o491187309-p491187309-5-202308311427.jpg",
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1500,
    // centerMode: true,
    // centerPadding: "60px",
  };
  const helo = (det) => {
    console.log(det.target.src);
    setShowImage(det.target.src);
  };
  return (
    <>
      <div className="single-product-container  mb-56">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="#">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link href="#">Vegetables & Tubers </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Seeds Of Change Organic
                </li>
              </ol>
            </nav>
          </div>
          <div className="container-fluid mt-12">
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <div className="col-4">
                    <div className="img shadow-xl w-full h-[ rounded-lg p-4 ">
                      <InnerImageZoom
                        zoomType="hover"
                        zoomScale={0.8}
                        // src="src/assets/product1.jpg"
                        src={showImage}
                        width={1000}
                      />
                    </div>
                    <div className="img-slider bg-red-400 h-min" onClick={helo}>
                      <Slider {...settings}>
                        {productImages.map((imageUrl, index) => (
                          <img
                            key={index}
                            src={imageUrl}
                            alt={`Product Image ${index + 1}`} // Add alt text for accessibility
                            style={{
                              width: "100px",
                              height: "100px",
                              margin: "0px",
                            }} // Set the style for the image
                          />
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <div className="col-8 px-12">
                    <div className="product-info ">
                      <h1 className="h text-5xl font-semibold">
                        Seeds of Change Organic Quinoa, Brown
                      </h1>
                      <div className="ratting my-4 text-sm flex items-center gap-2">
                        <Rating
                          defaultValue={4.5}
                          precision={0.5}
                          style={{ fontSize: "1rem" }}
                        />
                        <span className="text-[#ccc]">(32 reviews)</span>
                      </div>
                      <div className="product-price flex items-center  gap-2">
                        <div className="sale-price text-[48px] font-semibold text-[#3BB77E]">
                          $38
                        </div>
                        <div className="reg-price text-[px] text-[#ccc] font-bold">
                          <p className="text-[#FAAF00] text-[14px]"> 26% off</p>
                          <p className="line-through text-[21px]">$52</p>
                        </div>
                      </div>
                      <p className="py-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam rem officia, corrupti reiciendis minima
                        nisi modi, quasi, odio minus dolore impedit fuga eum
                        eligendi.
                      </p>
                      <div className="size-weight flex my-4">
                        <p>size/weight</p>
                        <ul className="flex ml-2 gap- ">
                          <li>
                            <Button>50g</Button>{" "}
                          </li>
                          <li>
                            <Button>70g</Button>{" "}
                          </li>
                          <li>
                            <Button>90g</Button>{" "}
                          </li>
                          <li>
                            <Button>120g</Button>{" "}
                          </li>
                          <li>
                            <Button>150g</Button>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="add-to-cart flex items-center gap-4">
                        <div className="quantity w-[6rem] flex border rounded">
                          <input
                            type="number"
                            className=" py-2 text-center w-[80%]"
                            value={inpVal}
                          />
                          <div className="arrows flex flex-col items-center justify-center">
                            <FaAngleUp onClick={increment} />
                            <FaAngleDown onClick={decrement} />
                          </div>
                        </div>
                        <div className="add-to-cart-btn">
                          <Button>add to cart</Button>{" "}
                        </div>
                        <div className="boxess flex gap-2">
                          <Button>
                            {" "}
                            <img src={compare} alt="" />
                          </Button>
                          <Button>
                            <img src={heart} alt="" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
