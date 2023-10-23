import React, { useState } from "react";
import DashboardHeader from "../../components/Shop/Dashboard/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Dashboard/DashboardSideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateProductForm from "../../components/Shop/CreateProductForm";

const CreateProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <CreateProductForm />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
