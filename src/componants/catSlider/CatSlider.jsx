import React from "react";
import Slider from "react-slick";

import cat1 from "../../assets/201 (1).png";
import cat2 from "../../assets/202 (1).png";
import cat3 from "../../assets/203.png";
import cat4 from "../../assets/204.png";
import cat5 from "../../assets/205.png";
import cat6 from "../../assets/206.png";
import cat7 from "../../assets/207.png";
import cat8 from "../../assets/208 (1).png";
import cat9 from "../../assets/209 (1).png";
import cat10 from "../../assets/210 (1).png";
import "./CatSlider.css";
function CatSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "60px",
  };
  return (
    <>
      <div className="category-slider-container">
        <div className="container-fluid ">
          <h1 className="hd">feature category</h1>
          <div className="slide-items my-12 ">
            <Slider {...settings} className="">
              <div className="row  bg-[#fffceb]">
                <div className="col">
                  <img src={cat1} alt="" />
                  <h1>organic kiwi</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#ecffec]">
                <div className="col">
                  <img src={cat2} alt="" />
                  <h1>peach</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#feefea]">
                <div className="col">
                  <img src={cat3} alt="" />
                  <h1>red apple</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#fff3eb]">
                <div className="col">
                  <img src={cat4} alt="" />
                  <h1>snacks</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#fff3ff]">
                <div className="col">
                  <img src={cat5} alt="" />
                  <h1>vegetable</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#f2fce4]">
                <div className="col">
                  <img src={cat6} alt="" />
                  <h1>strawberry</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#feefea]">
                <div className="col">
                  <img src={cat7} alt="" />
                  <h1>black plum</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#fffceb]">
                <div className="col">
                  <img src={cat8} alt="" />
                  <h1>custard apple</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#feefea]">
                <div className="col">
                  <img src={cat9} alt="" />
                  <h1>coffe & tea</h1>
                  <p>14 items</p>
                </div>
              </div>
              <div className="row bg-[#ecffec]">
                <div className="col">
                  <img src={cat10} alt="" />
                  <h1>headphone</h1>
                  <p>14 items</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatSlider;
