import React from "react";
import {
  FaAddressBook,
  FaAlignLeft,
  FaHome,
  FaPercentage,
} from "react-icons/fa";

const AppHeader = (props) => {
  const {isSideBarOpen,setIsSideBarOpen} = props;
  return (
    <div className="bg-gray-800 text-white p-4 mt-0 h-16 w-full flex justify-center items-center">
      {/* <FaAlignLeft className="text-white  md:block hidden" onClick={()=>setIsSideBarOpen(!isSideBarOpen)}/> */}
      {/* <div className="flex items-center gap-2">
        <FaHome className="w-2" />
        <FaPercentage className="w-2" />
        <FaAddressBook className="w-2" />
      </div>
    </div> */}
    <p className="text-white italic font-bold text-xl font-serif">AI ASSITSANT BY MOHIT</p>
    </div>
  );
};

export default AppHeader;
