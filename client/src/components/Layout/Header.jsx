import React from "react";
import { useState } from "react";
import styles from "../../styles/style";
import { productData } from "../../static/ProductData";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { categoriesData } from "../../static/CategoriesData";
import NavBar from "./NavBar";
import DropDown from "./DropDown";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Cart from "../Cart/Cart";

import { useSelector } from "react-redux";
import WishList from "../Cart/WishList";

const Header = ({ activeHeading }) => {
  const { isAuth, user, loading } = useSelector((state) => state.user);
  const { isShop, shop } = useSelector((state) => state.shop);
  console.log("is Auth of Header", isAuth);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [open, setOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  console.log("User :", user?.avatar);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[4rem] 800px:my-[1.5rem] 800px:flex items-center justify-between border-2">
          <div>
            <Link to="/" className="">
              Logo Over Here
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#1a0e00] border-[2px] rounded-md focus:border-none focus:outline-none"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((data, index) => {
                    const dataName = data.name;
                    const productName = dataName.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${productName}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${data.image_Url[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px]  rounded-full mr-[10px]"
                          />
                          <h1>{data.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to={`${isShop ? "/dashboard" : "/shop-login"}`}>
              <h1 className="text-[#fff] flex items-center">
                Shop <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
        {/* Catagories Over Here */}
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between w-full ${
            styles.navbar
          } h-[70px]`}
        >
          <div
            className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
          >
            <div>
              <div className="relative h-[4rem] mt-[0.8rem] w-[17rem] hidden 1000px:block">
                <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                <button
                  className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                >
                  All Categories
                </button>
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <NavBar active={activeHeading} />
            </div>
            {/* Nav Bar End  */}
            <div className="flex">
              <div className={`${styles.noramlFlex}`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishList(true)}
                >
                  <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                  <span className="absolute right-0 top-0 rounded-full bg-blue-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    1
                  </span>
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  <AiOutlineShoppingCart
                    size={30}
                    color="rgb(255 255 255 / 83%)"
                    onClick={() => setOpenCart(true)}
                  />
                  <span className="absolute right-0 top-0 rounded-full bg-blue-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center"></span>
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  {isAuth ? (
                    <Link to="/profile">
                      <img
                        src={`${user?.avatar}`}
                        className="w-[35px] h-[35px] rounded-full"
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                    </Link>
                  )}
                </div>
              </div>

              {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

              {openWishList ? (
                <WishList setOpenWishList={setOpenWishList} />
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
        >
          <div className="w-full flex items-center justify-between">
            <div>
              <BiMenuAltLeft
                size={40}
                className="ml-4"
                onClick={() => setOpen(true)}
              />
            </div>
            <div>
              <Link to="/">
                <h1>Logo Here</h1>
              </Link>
            </div>
            <div>
              <div
                className="relative mr-[20px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  10
                </span>
              </div>
            </div>
          </div>
          {open && (
            <div
              className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
            >
              <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
                <div className="w-full justify-between flex pr-3">
                  <div>
                    <div className="relative mr-[15px]">
                      <AiOutlineHeart size={30} className="mt-5 ml-3" />
                      <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                        0
                      </span>
                    </div>
                  </div>
                  <RxCross1
                    size={30}
                    className="ml-4 mt-5"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="my-8 w-[92%] m-auto h-[40px relative]">
                  <input
                    type="search"
                    placeholder="Search Product..."
                    className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((data, index) => {
                        const dataName = data.name;
                        const productName = dataName.replace(/\s+/g, "-");
                        return (
                          <Link to={`/product/${productName}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={`${data.image_Url[0]?.url}`}
                                alt=""
                                className="w-[40px] h-[40px]  rounded-full mr-[10px]"
                              />
                              <h1>{data.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
                <NavBar active={activeHeading} />
                <div className={`${styles.button} ml-6`}>
                  <Link
                    to="/shop
                  "
                  >
                    <h1 className="text-[#fff] flex items-center">
                      Become Seller <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>
                <br />
                <br />
                <br />

                <div className="flex w-full justify-center">
                  {isAuth ? (
                    <div>
                      <Link to="/profile">
                        <img
                          src={`http://localhist:8000${user?.avatar}`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-[18px] pr-[10px] text-blue-800"
                      >
                        Login /
                      </Link>
                      <Link to="/sign-up" className="text-[18px] text-blue-800">
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
