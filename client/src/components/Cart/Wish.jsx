import React, { useState } from "react";

import { BsCartPlus } from "react-icons/bs";

const Wish = ({ data }) => {
  const [value, setValue] = useState(1);
  const price = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="flex items-center w-full justify-between">
        <img
          src="https://images.pexels.com/photos/5201598/pexels-photo-5201598.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-32 h-32 ml-2 mr-2 rounded-full"
        />
        <div className="pl-[5px] ">
          <h1>
            {data.name.length > 20
              ? data.name.substring(0, 20) + "..."
              : data.name}
          </h1>
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

        <BsCartPlus size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Wish;
