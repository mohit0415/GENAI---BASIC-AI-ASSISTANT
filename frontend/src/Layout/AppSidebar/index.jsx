import React from "react";
import { FaAddressBook, FaHome, FaPhone } from "react-icons/fa";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
const AppSidebar = ({isSideBarOpen}) => {
    
    const navigate = useNavigate();
  const menuItems = [
    { name: "Home", icon: <FaHome/>, path: "/" },
    { name: "About", icon: <FaAddressBook/>, path: "/about" },
    { name: "Contact", icon: <FaPhone/>, path: "/contact" },
  ];
  return (
    <div>
      <Sidebar collapsed={isSideBarOpen} className="h-screen bg-amber-300" breakPoint="md">
        <Menu iconShape="square">
          {menuItems.map((item, index) => (
            <MenuItem icon={item.icon} key={index} onClick={()=>navigate(item.path)}>{item.name}</MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
