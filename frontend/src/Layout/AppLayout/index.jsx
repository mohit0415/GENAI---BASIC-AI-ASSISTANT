import React, { useState } from "react";
import AppSidebar from "../AppSideBar";
import AppHeader from "../AppHeader";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [isSideBarOpen ,setIsSideBarOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-1">
        {/* <AppSidebar isSideBarOpen={isSideBarOpen}/> */}
        <div className="flex flex-col  mt-0 w-full">
          <AppHeader setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen}/>
          <div className=" overflow-y-auto">
            <Outlet/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppLayout;
