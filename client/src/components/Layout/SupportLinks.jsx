import React from "react";
import { footerSupportLinks } from "../../static/FooterSupportLinks";
import { Link } from "react-router-dom";

const SupportLinks = () => {
  return (
    <div>
      <ul className="text-center sm:text-start">
        <h1 className="mb-1 font-semibold">Support</h1>
        {footerSupportLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportLinks;
