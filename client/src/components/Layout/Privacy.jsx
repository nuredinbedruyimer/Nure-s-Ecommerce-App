import React from "react";

const Privacy = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-lg pb-8"
    >
      <span>© 2022 Nuredin Bedru. All Rights Reserved.</span>
      <span>Terms · Privacy Policy</span>
      <div className="sm:block flex items-center justify-center w-full">
        <img
          src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default Privacy;
