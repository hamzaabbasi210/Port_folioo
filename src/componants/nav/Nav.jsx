import { Button } from "@mui/material";
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";
import MegaMenu from "../mega-menu/MegeMenu";
import { categoryData } from "../categoryData";
import { useState, useEffect, useRef } from "react";
import { useProductContext } from "../../context/productContext";
import Dropdown from "../SelectDropdown/Dropdown";

function Nav() {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [catDropdownIndex, setCatDropdownIndex] = useState(null);

  const { Products } = useProductContext();

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        navRef.current.classList.add("fixed");
      } else {
        navRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div
        className="nav-container container-fluid relative border-t-2 border-b-2"
        ref={navRef}
      >
        <div className="row justify-content-start relative">
          <div className="col-3 category-btn borde p-0 flex items-center relative">
            <Button
              className=""
              onClick={() => setCategoryDropdown(!categoryDropdown)}
            >
              <BiCategory />
              <span className="">browse all categories</span>

              {categoryDropdown ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )}
            </Button>
            {categoryDropdown === true && (
              <div className="category-dropdown absolute top-[100%] w-full shadow-md  bg-[#FFFFFF] z-50 overflow-hidden">
                <div className="row gap- border border-[#3BB77D]">
                  {categoryData.map((val, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className="col-6 flex gap-2 my-4 border py-2 "
                        >
                          <img src={val.img} alt="" className="w-8" />
                          <p>{val.title}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="col-7 navigation-menu borde cursor flex items-center justify-cente   text-base text-black ">
            <Button>
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                home
              </NavLink>
            </Button>
            <ul className="flex ">
              {Products.map((val, index) => {
                return (
                  <>
                    <li
                      className=""
                      onMouseEnter={() => setCatDropdownIndex(index)}
                      onMouseLeave={() => setCatDropdownIndex(null)}
                    >
                      <Button key={index}>
                        <NavLink
                          exact="true"
                          to={`/cat/${val.cat_name.toLowerCase()}`}
                          className="link"
                          onClick={() =>
                            sessionStorage.setItem(
                              "cat",
                              val.cat_name.toLowerCase()
                            )
                          }
                        >
                          {val.cat_name}
                        </NavLink>
                      </Button>
                      {catDropdownIndex === index && (
                        <div className="cat-dropdown shadow-inner">
                          {val.items.map((val_, index) => {
                            return (
                              <>
                                <ul key={index}>
                                  <li className="cat-subcat-dropdown-list">
                                    <Button
                                      style={{
                                        fontWeight: "lighter",
                                        backgroundColor: "none",
                                      }}
                                    >
                                      <NavLink
                                        to={`/cat/${
                                          val.cat_name
                                        }/${val_.cat_name
                                          .toLowerCase()
                                          .replace(/\s/g, "-")}`}
                                        onClick={() =>
                                          sessionStorage.setItem(
                                            "cat",
                                            val.cat_name.toLowerCase()
                                          )
                                        }
                                      >
                                        {val_.cat_name}
                                      </NavLink>
                                    </Button>
                                  </li>
                                </ul>
                              </>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
            <Button>
              <NavLink
                exact="true"
                to="/listing"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                shop
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/vendor"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                vendors
              </NavLink>
            </Button>
            <MegaMenu />
            {/* <Button>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                blog
              </NavLink>
            </Button> */}
            {/* <Button>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                pages
              </NavLink>
            </Button> */}
            <Button>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#3BB77D]" : "text-black"
                }
              >
                contact
              </NavLink>
            </Button>
          </div>
          <div className="col-2 borde flex items-center justify-center gap-3">
            <FaHeadset className="text-4xl opacity-55" />
            <div className="content flex flex-col items-center justify-center leading-3">
              <h1 className="text-3xl font-bold text-[#3BB77D]">1900 - 888</h1>
              <p className="text-sm">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
