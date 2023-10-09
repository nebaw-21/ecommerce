import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserLarge } from "react-icons/fa6";
import { LuX } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import '../App.css';

const Header = ({x}) => {

  const itemCount= 8;

  return (
<>

<nav className="bg-gray-900 md:pt-6 w-full pt-3 pb-0 relative grid grid-cols-9 md:grid-cols-11 grid-rows-3  md:grid-rows-2  justify-center md:gap-0 ">

  {/* sidebar button*/}
<div className=' md:flex  md:row-start-2 md:col-start-1  md:bg-gray-700   md:py-2' >
<AiOutlineBars onClick={x} className='text-white hover:text-slate-200 text-3xl md:text-2xl ml-2 cursor-pointer'  />
<p className='text-white text-xl ml-2  -mt-1 invisible md:visible'>All</p>
</div>
  {/* end of sidebar button*/}


  {/* logo*/}
  <div className='  col-span-4 md:-mt-3 md:ml-4 md:row-start-1 md:col-start-1'> <a href="#" className="text-yellow-400 italic font-bold text-2xl   ">Awra</a></div>
 {/* end of logo*/}


{/*Account area */}
<div  className=' md:flex  col-span-2 md:justify-center md:-mt-2'>
<Link to="/login">
<div className="relative flex ">
<FaUserLarge className="text-yellow-500 text-lg mt-2"  />
<p className='text-white text-lg md:text-base ml-2'>sign in</p>
</div>
</Link>

</div>

{/*end of Account area */}

{/*cart area */}
<div className='flex ml-5 col-span-1 justify-center md:-mt-1 mt-2'>
 <div className="relative">
  <span className='flex'>
  <FaShoppingCart className="text-white text-2xl" />
   </span>
{itemCount > 0 && (
  <span className="absolute top-0 right-0 -mt-4  bg-yellow-500 text-white text-xs rounded-full px-2 py-0.5">
    {itemCount}
  </span>
)}
</div>
<p className='text-white ml-2 text-sm'>cart</p>

</div>
{/*end of cart area */}


 {/*search area */}
 <div className="flex items-center col-span-9 md:col-span-7 mx-2 md:row-start-1 md:col-start-2 -mt-6">
 <div className="flex items-center w-full">
   
  <input type="text" className=" pr-32 md:py-2 py-3 px-4 focus:outline-none rounded-l-lg w-full" placeholder="Search awra..." />
  
   <button className="bg-yellow-500 hover:bg-yellow-400 text-white md:py-3 py-4 px-4 rounded-r-lg">
     <CiSearch/>
   </button>
 </div>
</div>
       {/*end of search area */}
  

      {/*category list */}
      <div className='flex  bg-gray-700 w-full  space-x-8  col-span-9 md:col-span-10 pt-2 ' >
      <div className=' text-white text-sm flex space-x-8 ml-2  overflow-x-auto custom-scrollbar '>
      
      <p >catagory1</p>
      <p>catagory2</p>
      <p>catagory3</p>
      <p>catagory4</p>
      <p >catagory1</p>
      <p>catagory2</p>
      <p>catagory3</p>
      <p>catagory4</p>
      <p >catagory1</p>
      <p>catagory2</p>
      <p>catagory3</p>
      <p>catagory4</p>
      <p >catagory1</p>

      </div>
    
      </div>
        {/*End of category list */}

  
  </nav>

      </>

  );
};

export default Header;