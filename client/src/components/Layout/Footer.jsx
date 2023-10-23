import React from "react";
import Socials from "./Socials";
import ProductLinks from "./ProductLinks";
import ProductCompanyLinks from "./ProductCompanyLinks";
import SupportLinks from "./SupportLinks";
import Privacy from "./Privacy";

const Footer = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="md:flex z-20 md:justify-between md:items-center sm:px-12 px-4 bg-slate-800 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">
            Follow Us
            <br /> For More Service and Offer
          </span>
        </h1>
        <div>
          <input
            type="email"
            placeholder="Enter Your Name"
            required
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-3 rounded px-2 focus:outline-none"
          />
          <button className="border border-sky-500 hover:bg-gray-600 duration-300 px-5 py-2.5  text-whie md:w-auto w-full rounded">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <Socials />
        <ProductLinks />
        <ProductCompanyLinks />
        <SupportLinks />
      </div>
      <Privacy />
    </div>
  );
};

export default Footer;
