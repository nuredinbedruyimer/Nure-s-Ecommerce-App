import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../static/NavItems";
import styles from "../../styles/style";

const NavBar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {NavItems &&
        NavItems.map((i, index) => (
          <div className="flex" key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-blue-500"
                  : "text-black 800px:text-[#fff]"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default NavBar;
