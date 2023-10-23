import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ShopInfo({ isOwner }) {
  const { isLoading, shop } = useSelector((state) => state.shop);
  console.log(shop);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/shop/shop-logout`,
      {
        withCredentials: true,
      }
    );
    window.location.reload(true);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`http://localhost:8000/${shop?.avatar}`}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-[1rem]"
              />
            </div>
            <h3 className="text-center py-2 text-[20px] italic font-extrabold">
              {shop?.name}
            </h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {shop?.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{shop?.address}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">{shop?.phonenumber}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000a6]">10</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className="text-[#000000b0]">5</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000b0] italic ">Date</h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div
                  className={`${styles.button} bg-[purple] !w-full !h-[42px] `}
                >
                  <span className="text-white italic">Edit Shop</span>
                </div>
              </Link>
              <div
                className={`${styles.button} bg-[purple] !w-full !h-[42px] `}
                onClick={handleLogout}
              >
                <span className="text-white italic">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ShopInfo;
