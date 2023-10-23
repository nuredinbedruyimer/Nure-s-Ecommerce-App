import React from "react";
import styles from "../../styles/style";
import { AiOutlineDelete } from "react-icons/ai";

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[1.5rem] text-[700] pb-2 text-slate-900 ">
          Payment Method
        </h1>
        <div className={`${styles.button} `}>
          <span>Add Now</span>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full h-20 rounded-[4px] flex items-center justify-between bg-white ">
        <div className="flex items-center ">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h5 className="pl-5 font-[700] italic">Nuredin Bedru</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h5 className="pl-6">12/32/3535</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-center pl-8">
          <AiOutlineDelete size={30} color="red" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
