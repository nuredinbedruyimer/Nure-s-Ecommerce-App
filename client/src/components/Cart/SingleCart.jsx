import React, { useState } from "react";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import styles from "../../styles/style";
import { RxCross1 } from "react-icons/rx";

const SingleCart = ({ data }) => {
  const [value, setValue] = useState(1);
  const price = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="flex items-center w-full">
        <div>
          <div
            className={` bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue((value) => value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[8px] ">{value}</span>
          <div className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer">
            <HiOutlineMinus
              size={76}
              color="#7d879c"
              onClick={() => setValue(value === 1 ? 1 : value - 1)}
            />
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/5201598/pexels-photo-5201598.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-32 h-32 ml-2 mr-2 rounded-full"
        />
        <div className="pl-[5px] w-1/2">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            No_Item:{value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            Price per Item:{data.price}
          </h4>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            Total: ${data.price * value}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer ml-8 bg-slate-400 rounded-full" />
      </div>
    </div>
  );
};

export default SingleCart;
