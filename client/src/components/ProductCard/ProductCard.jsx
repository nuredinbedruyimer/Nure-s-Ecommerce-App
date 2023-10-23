import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/style";
import ProductCardDetails from "./ProductCardDetails";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(true);
  const [open, setOpen] = useState(false);
  const d_name = data.name;
  const data_name = d_name.replace(/\s+/g, "-");

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${data_name}`}>
          <img
            src={`${data.image_Url[0].url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${data_name}`}>
          <h4>
            {data.name.length > 40
              ? data.name.slice(0, 40) + "...."
              : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#FFD700"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#FFD700"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#FFD700"
              size={20}
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer "
              color="#FFD700"
              size={20}
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer "
              color="#FFD700"
              size={20}
            />
          </div>
          <div className="py-2 flex justify-between items-center">
            <div className="flex italic py-2">
              <h5>{data.price === 0 ? data.price : data.discount_price}</h5>
              <h4 className={`${styles.price}`}>
                {data.price ? data.price : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.total_sell} sold
            </span>
          </div>
        </Link>
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductCardDetails setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
