import React, { useState } from "react";
import { blogCategories } from "../assets/QuickBlog-Assets/assets";
import { Link, NavLink } from "react-router-dom";

function BlogList() {

    const[menu,setMenu]=useState("")

  return (
    <div>
      <div
        className="flex justify-center gap-4 sm:gap-8 my-10
        relative">
            {blogCategories.map((category)=>(
                <div key={category} className="relative">
                    <button onClick={()=>setMenu(category)}
                    className={` cursor-pointer text-gray-500 ${menu===category && 'text-blue-950 px-4 pt-0.5'}`}>
                        {category}
                        {menu===category &&(
                            <div className=" absolute left-0 right-0 top-0 h-7 z-[-1] 
                            bg-primary rounded-full"></div>
                        )}
                        
                    </button>{/** */}
                </div>
            ))}
        </div>
      <div>
        {/*--- blog cards --*/}
      </div>
    </div>
  );
}

export default BlogList;
