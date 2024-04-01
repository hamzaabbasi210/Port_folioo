import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function QuantityBox() {
  const [inpVal, setInpVal] = useState(0);
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
  return (
    <>
      <div className="quantity w-[6rem] flex border-[1.5px]  border-[#3BB77D]  rounded">
        <input
          type="number"
          className=" py-3 text-center w-[80%]"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <div className="arrows flex flex-col items-center justify-center">
          <FaAngleUp onClick={increment} />
          <FaAngleDown onClick={decrement} />
        </div>
      </div>
    </>
  );
}

export default QuantityBox;
