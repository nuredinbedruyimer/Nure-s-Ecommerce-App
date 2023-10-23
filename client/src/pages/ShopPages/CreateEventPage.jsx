import React from "react";
import CreateEvent from "../../components/Shop/CreateEvent";
import DashboardHeader from "../../components/Shop/Dashboard/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Dashboard/DashboardSideBar";

const CreateEventPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
