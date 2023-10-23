import React from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import Wish from "./Wish";

const WishList = ({ setOpenWishList }) => {
  const sampleData = [
    {
      name: "One-Peice",
      descriptions: "Awesome",
      price: 456,
    },
    {
      name: "One-Peice=wano Arc",
      descriptions: "Awesome",
      price: 657,
    },
    {
      name: "One-Peice-Egg-Head_Island",
      descriptions: "Awesome",
      price: 456,
    },
    {
      name: "One-Peice=wano Arc",
      descriptions: "Awesome",
      price: 657,
    },
    {
      name: "One-Peice-Egg-Head_Island",
      descriptions: "Awesome",
      price: 456,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[auto] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="">
          <div className="flex w-full justify-end pt-5 pr-5 ">
            <RxCross1
              size={20}
              className="cursor-pointer bg-slate-300 rounded-full"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">
              {sampleData && sampleData.length} items
            </h5>
          </div>
          <div className="w-full border-t">
            {sampleData &&
              sampleData.map((data, index) => <Wish data={data} key={index} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
            >
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Now
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;
