import React from "react";
import styles from "../../styles/style";
import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const handleSubmit = (current) => {
    navigate(`/products?category=${current.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((data, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => handleSubmit(data)}
          >
            <img
              src={data.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
                borderRadius: "50%",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{data.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
