import React from "react";
import ShopGetAllEvent from "../../components/Shop/ShopGetAllEvent";
import DashboardHeader from "../../components/Shop/Dashboard/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Dashboard/DashboardSideBar";

const ShopGetAllEventPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={5} />
        </div>
        <div className="w-full justify-center flex">
          <ShopGetAllEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopGetAllEventPage;
