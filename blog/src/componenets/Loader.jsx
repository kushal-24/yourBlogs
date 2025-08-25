import React from "react";
import { assets } from "../assets/QuickBlog-Assets/assets";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-white border-primary"></div>
      I<img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      ></img>
    </div>
  );
}

export default Loader;
