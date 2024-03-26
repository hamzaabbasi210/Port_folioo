import { Button, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import "./SingleProduct.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Sidebar from "../../componants/sidebar/Sidebar";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import Slider from "react-slick";
import { useProductContext } from "../../context/productContext";

const Api = "http://localhost:3000/productData";
function SingleProduct() {
  const { getSingleProduct, singleProduct } = useProductContext();
  const { id } = useParams();

  const [curProduct, setCurProduct] = useState({});
  const [inpVal, setInpVal] = useState(0);
  const [first, setfirst] = useState(curProduct.brand);
  const [showImage, setShowImage] = useState([]);
  const [showInfo, setShowInfo] = useState(0);

  singleProduct.map((val) => {
    return val.items.map((val) => {
      return val.products.map((val) => {});
    });
  });

  useEffect(() => {
    alert();
    window.scrollTo(0, 0);
    singleProduct.map((val) => {
      return val.items.map((val) => {
        return val.products.map((val) => {
          if (parseInt(val.id) === parseInt(id)) {
            setCurProduct(val);
          }
        });
      });
    });
  }, [id]);

  useEffect(() => {
    // getSingleProduct(`${Api}?id=${id}`);
    // singleProduct.map((val) => {
    //   console.log(val);
    // });
  }, []);

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
    autoplay: true,
    autoplaySpeed: 1500,
  };
  // const helo = (det) => {
  //   console.log(det.target.src);
  //   setShowImage(det.target.src);
  // };
  const helo = (det) => {
    if (det && det.target && det.target.src) {
      console.log(det.target.src);
      setShowImage(det.target.src);
    } else {
      console.error("Invalid event or target in helo function:", det);
    }
  };
  // console.log(curProduct.productImages);

  return (
    <>
      <div className="single-product-container  mb-56">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">Vegetables & Tubers{curProduct.brand} </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  {curProduct.productName}{" "}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container-fluid mt-12">
            <div className="row ">
              <div className="col-9">
                <div className="row">
                  <div className="col-4">
                    <div className="img shadow-xl w-full h-[%] rounded-lg p-4  ">
                      <InnerImageZoom
                        zoomType="hover"
                        zoomScale={0.8}
                        // src="src/assets/product1.jpg"
                        // src={curProduct.catImg}
                        src={showImage}
                        width={1000}
                        height={1000}
                      />
                    </div>

                    <div className="img-slider bg-re-400 " onClick={helo}>
                      <Slider {...settings}>
                        {curProduct.productImages &&
                          curProduct.productImages.map((imageUrl, index) => (
                            <img
                              src={imageUrl}
                              key={index}
                              style={{
                                width: "100px",
                                height: "100px",
                                margin: "0px",
                              }}
                            />
                          ))}
                      </Slider>
                    </div>

                    {/* <div className="img-slider bg-re-400 " onClick={helo}>
                      <Slider {...settings}>
                        {curProduct.productImages.map((val) => {
                          <img src={val} alt="" />;
                        })}
                         {curProduct.productImages.map((imageUrl, index) => { 
                           console.log(imageUrl); 
                           return (
                             <img
                               src={imageUrl}
                               key={index}
                               style={{
                                 width: "100px",
                                 height: "100px",
                                 margin: "0px",
                               }}
                             />
                           );
                        })} 
                      </Slider>
                    </div>*/}
                  </div>

                  <div className="col-8 px-12">
                    <div className="product-info ">
                      <h1 className="h text-5xl font-semibold">
                        {curProduct.productName}
                      </h1>
                      <div className="ratting my-4 text-sm flex items-center gap-2">
                        <Rating
                          defaultValue={curProduct.rating}
                          precision={0.5}
                          style={{ fontSize: "1rem" }}
                        />
                        <span className="text-[#ccc]">(32 reviews){first}</span>
                      </div>
                      <div className="product-price flex items-center  gap-2">
                        <div className="sale-price text-[48px] font-semibold text-[#3BB77E]">
                          ${curProduct.price}
                        </div>
                        <div className="reg-price text-[px] text-[#ccc] font-bold">
                          <p className="text-[#FAAF00] text-[14px]">
                            {" "}
                            {curProduct.discount}% off
                          </p>
                          <p className="line-through text-[21px]">
                            ${curProduct.oldPrice}
                          </p>
                        </div>
                      </div>
                      <p className="py-4">{curProduct.description}</p>
                      <div className="size-weight flex my-4">
                        <p>size/weight</p>
                        <ul className="flex ml-2 gap- ">
                          {/* {curProduct.weight.map((val) => {
                            return (
                              <li>
                                <Button>{val}</Button>
                              </li>
                            );
                          })} */}
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
                            onChange={(e) => setInpVal(e.target.value)}
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
                <div className="row w-full  border mt-12 py-12">
                  <div className="col">
                    <div className="info-tabs flex gap-8 mb-12">
                      <div
                        className="discription"
                        onClick={() => setShowInfo(0)}
                      >
                        <Button>description</Button>
                      </div>
                      <div
                        className="additionl-description"
                        onClick={() => setShowInfo(1)}
                      >
                        <Button>additional info</Button>
                      </div>
                      <div className="vendor" onClick={() => setShowInfo(2)}>
                        <Button>vendor</Button>
                      </div>
                      <Button>reviews</Button>
                    </div>
                    {showInfo === 0 && (
                      <div className="discription-tab mt-4">
                        <p>
                          Uninhibited carnally hired played in whimpered dear
                          gorilla koala depending and much yikes off far quetzal
                          goodness and from for grimaced goodness unaccountably
                          and meadowlark near unblushingly crucial scallop
                          tightly neurotic hungrily some and dear furiously this
                          apart.
                        </p>
                        <p>
                          Spluttered narrowly yikes left moth in yikes bowed
                          this that grizzly much hello on spoon-fed that alas
                          rethought much decently richly and wow against the
                          frequent fluidly at formidable acceptably flapped
                          besides and much circa far over the bucolically hey
                          precarious goldfinch mastodon goodness gnashed a
                          jellyfish and one however because.
                        </p>
                        <ul className="product-more-infor mt-30">
                          <li>
                            <span>Type Of Packing</span> Bottle
                          </li>
                          <li>
                            <span>Color</span> Green, Pink, Powder Blue, Purple
                          </li>
                          <li>
                            <span>Quantity Per Case</span> 100ml
                          </li>
                          <li>
                            <span>Ethyl Alcohol</span> 70%
                          </li>
                          <li>
                            <span>Piece In One</span> Carton
                          </li>
                        </ul>
                        {/* <hr className="wp-block-separator is-style-dots"> */}
                        <p>
                          Laconic overheard dear woodchuck wow this outrageously
                          taut beaver hey hello far meadowlark imitatively
                          egregiously hugged that yikes minimally unanimous
                          pouted flirtatiously as beaver beheld above forward
                          energetic across this jeepers beneficently cockily
                          less a the raucously that magic upheld far so the this
                          where crud then below after jeez enchanting drunkenly
                          more much wow callously irrespective limpet.
                        </p>
                        <h4 className="mt-30">Packaging &amp; Delivery</h4>
                        {/* <hr className="wp-block-separator is-style-wide"> */}
                        <p className="mt-3">
                          Less lion goodness that euphemistically robin
                          expeditiously bluebird smugly scratched far while thus
                          cackled sheepishly rigid after due one assenting
                          regarding censorious while occasional or this more
                          crane went more as this less much amid overhung
                          anathematic because much held one exuberantly sheep
                          goodness so where rat wry well concomitantly.
                        </p>
                        <p>
                          Scallop or far crud plain remarkably far by thus far
                          iguana lewd precociously and and less rattlesnake
                          contrary caustic wow this near alas and next and pled
                          the yikes articulate about as less cackled dalmatian
                          in much less well jeering for the thanks blindly
                          sentimental whimpered less across objectively fanciful
                          grimaced wildly some wow and rose jeepers outgrew
                          lugubrious luridly irrationally attractively
                          dachshund.
                        </p>
                        <h4 className="mt-30">Suggested Use</h4>
                        <ul className="product-more-infor mt-30">
                          <li>Refrigeration not necessary.</li>
                          <li>Stir before serving</li>
                        </ul>
                        <h4 className="mt-30">Other Ingredients</h4>
                        <ul className="product-more-infor mt-30">
                          <li>Organic raw pecans, organic raw cashews.</li>
                          <li>
                            This butter was produced using a LTG (Low
                            Temperature Grinding) process
                          </li>
                          <li>
                            Made in machinery that processes tree nuts but does
                            not process peanuts, gluten, dairy or soy
                          </li>
                        </ul>
                        <h4 className="mt-30">Warnings</h4>
                        <ul className="product-more-infor mt-30">
                          <li>
                            Oil separation occurs naturally. May contain pieces
                            of shell.
                          </li>
                        </ul>
                      </div>
                    )}
                    {showInfo === 1 && (
                      <div className="additional-description">
                        <div
                          class="tab-pane fade active show"
                          id="Additional-info"
                        >
                          <table class="font-md">
                            <tbody>
                              <tr class="stand-up">
                                <th>Stand Up</th>
                                <td>
                                  <p>
                                    35″L x 24″W x 37-45″H(front to back wheel)
                                  </p>
                                </td>
                              </tr>
                              <tr class="folded-wo-wheels">
                                <th>Folded (w/o wheels)</th>
                                <td>
                                  <p>32.5″L x 18.5″W x 16.5″H</p>
                                </td>
                              </tr>
                              <tr class="folded-w-wheels">
                                <th>Folded (w/ wheels)</th>
                                <td>
                                  <p>32.5″L x 24″W x 18.5″H</p>
                                </td>
                              </tr>
                              <tr class="door-pass-through">
                                <th>Door Pass Through</th>
                                <td>
                                  <p>24</p>
                                </td>
                              </tr>
                              <tr class="frame">
                                <th>Frame</th>
                                <td>
                                  <p>Aluminum</p>
                                </td>
                              </tr>
                              <tr class="weight-wo-wheels">
                                <th>Weight (w/o wheels)</th>
                                <td>
                                  <p>20 LBS</p>
                                </td>
                              </tr>
                              <tr class="weight-capacity">
                                <th>Weight Capacity</th>
                                <td>
                                  <p>60 LBS</p>
                                </td>
                              </tr>
                              <tr class="width">
                                <th>Width</th>
                                <td>
                                  <p>24″</p>
                                </td>
                              </tr>
                              <tr class="handle-height-ground-to-handle">
                                <th>Handle height (ground to handle)</th>
                                <td>
                                  <p>37-45″</p>
                                </td>
                              </tr>
                              <tr class="wheels">
                                <th>Wheels</th>
                                <td>
                                  <p>12″ air / wide track slick tread</p>
                                </td>
                              </tr>
                              <tr class="seat-back-height">
                                <th>Seat back height</th>
                                <td>
                                  <p>21.5″</p>
                                </td>
                              </tr>
                              <tr class="head-room-inside-canopy">
                                <th>Head room (inside canopy)</th>
                                <td>
                                  <p>25″</p>
                                </td>
                              </tr>
                              <tr class="pa_color">
                                <th>Color</th>
                                <td>
                                  <p>Black, Blue, Red, White</p>
                                </td>
                              </tr>
                              <tr class="pa_size">
                                <th>Size</th>
                                <td>
                                  <p>M, S</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    {showInfo === 2 && (
                      <div className="vendor">
                        <div class="tab-pane fade active show" id="Vendor-info">
                          <div class="vendor-logo d-flex mb-30">
                            <img src="src\assets\vendor-18.svg" alt="" />
                            <div class="vendor-name ml-5">
                              <h6>
                                <a
                                  href="vendor-details-2.html"
                                  className="ml-5"
                                >
                                  Noodles Co.
                                </a>
                              </h6>
                              <div class="product-rate-cover text-end">
                                <div class="product-rate d-inline-block">
                                  <div
                                    class="product-rating flex ml-5"
                                    style={{ width: "90%" }}
                                  >
                                    <Rating
                                      style={{ fontSize: "1rem" }}
                                      defaultValue={3}
                                      readOnly
                                    />
                                  </div>
                                </div>
                                <span class="font-small  text-muted ">
                                  (32 reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <ul class="contact-infor my-16">
                            <li className="flex gap-3">
                              <img src="src\assets\icon-location.svg" alt="" />
                              <strong>Address: </strong>{" "}
                              <span>
                                5171 W Campbell Ave undefined Kent, Utah 53127
                                United States
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <img src="src\assets\icon-contact.svg" alt="" />
                              <strong>Contact Seller:</strong>
                              <span>(+91) - 540-025-553</span>
                            </li>
                          </ul>
                          <div class="d-flex mb-55">
                            <div class="mr-30">
                              <p class="text-brand font-xs">Rating</p>
                              <h4 class="mb-0">92%</h4>
                            </div>
                            <div class="mr-30">
                              <p class="text-brand font-xs">Ship on time</p>
                              <h4 class="mb-0">100%</h4>
                            </div>
                            <div>
                              <p class="text-brand font-xs">Chat response</p>
                              <h4 class="mb-0">89%</h4>
                            </div>
                          </div>
                          <p className="m-0">
                            Noodles &amp; Company is an American fast-casual
                            restaurant that offers international and American
                            noodle dishes and pasta in addition to soups and
                            salads. Noodles &amp; Company was founded in 1995 by
                            Aaron Kennedy and is headquartered in Broomfield,
                            Colorado. The company went public in 2013 and
                            recorded a $457 million revenue in 2017.In late
                            2018, there were 460 Noodles &amp; Company locations
                            across 29 states and Washington, D.C.
                          </p>
                        </div>
                      </div>
                    )}
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
