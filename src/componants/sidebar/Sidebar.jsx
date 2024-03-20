import React from "react";
import { categoryData } from "../categoryData";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import banner from "../../assets/banner4.jpg";
function Sidebar() {
  const [value, setValue] = React.useState([20, 307]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="sidebar-container ">
        <div className="container-fluid">
          <div className="box mb-8 ">
            <div className="cards shadow-xl rounded-lg max-h-[29rem] overflow-hidden px-4 mb-4 ">
              <div className="hd border-b-2 py-4">category</div>
              {categoryData.map((val, index) => {
                return (
                  <div
                    key={val.id}
                    className="cat-list flex items-center justify-between mt-4 mb-2 py-2 px-2 border rounded-md"
                  >
                    <div className="img">
                      <img src={val.img} alt="" className="w-7" />
                    </div>
                    <div className="title">{val.title}</div>
                    <div className="qty">{val.qty}</div>
                  </div>
                );
              })}
            </div>
            <div className="cards shadow-xl rounded-lg max-h-[rem] overflow-hidden px-4 ">
              <div className="hd border-b-2 py-4">Fill by price</div>
              <div className="range">
                <Box sx={{ width: 240 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="success"
                    min={0}
                    max={1000}
                    step={1}
                  />
                </Box>
              </div>
              <div className="range-price flex justify-between">
                <div className="from font-semibold">
                  from <strong className="text-success">${value[0]}</strong>
                </div>
                <div className="to-price  font-semibold">
                  to <strong className="text-success">${value[1]}</strong>
                </div>
              </div>
              <div className="filter my-4 ">
                <h2 className="font-bold mb-3">Item Condition</h2>
                <ul className="max-h-[200px] overflow-y-scroll overflow-hidden -ml-2">
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                </ul>
              </div>
              <div className="filter my-4 ">
                <h2 className="font-bold mb-2">color</h2>
                <ul className="max-h-[200px] overflow-y-scroll overflow-hidden -ml-2">
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> orange
                  </li>
                </ul>
              </div>
              <Button>
                <FiFilter />
                filter
              </Button>
            </div>
            <img src={banner} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
