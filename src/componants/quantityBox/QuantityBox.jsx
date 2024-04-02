import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function QuantityBox(props) {
  const [inpVal, setInpVal] = useState(1);
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    setcartItems(props.cart);
  }, [props.cart]);

  const updateCart = (items) => {
    props.updateCart(items);
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
        <div className="arrows fl.ex flex-col items-center justify-center">
          <FaAngleUp
            onClick={() => {
              setInpVal(inpVal + 1);
              const _cart = props.cart.map((val, key) => {
                return key === parseInt(props.index)
                  ? { ...val, quantity: inpVal + 1 }
                  : { ...val };
              });
              updateCart(_cart);
            }}
          />
          <FaAngleDown />
          {/* onClick={decrement} */}
        </div>
      </div>
    </>
  );
}

export default QuantityBox;
