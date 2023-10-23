import React from "react";
import AllProducts from "../../components/Shop/AllProducts";
import DashboardHeader from "../../components/Shop/Dashboard/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Dashboard/DashboardSideBar";

const ShopAllProductsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProductsPage;
