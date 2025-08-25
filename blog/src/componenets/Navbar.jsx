import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/QuickBlog-Assets/assets";


function Navbar() {
  const navigate=useNavigate();

  return (
    <div className=" flex justify-between items-center py-5 mx-8 sm:mx-10 xl:mx-32 cursor-pointer">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className=" w-30 sm:w-40 cursor-pointer " />
      <button onClick={()=>navigate('admin')} className="flex items-centergap-2 rounded-full text-sm cursor-pointer font-poppins bg-blue-500
      text-white px-10 py-2.5">
        Login
        <img src={assets.arrow} className="w-3" alt="arrow"></img>
      </button>
    </div>
  );
}

export default Navbar;
