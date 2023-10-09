
import React, { useState } from 'react';
import { FaUserLarge } from "react-icons/fa6";
import { LuX } from "react-icons/lu";
import Footer from './Footer';

function SideBar({x}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
       <>
       <div className=" absolute top-0 mt-0 left-0 h-screen w-11/12 md:w-1/4 bg-slate-100  overflow-y-auto  ">
       
      {/*  Hello, sign in */}
       <div className='flex  '>
       <div className=' text-white w-full  h-12 bg-slate-800 flex justify-center items-center'>
       <FaUserLarge className='text-4x1'/>
        <p className='ml-2 text-lg font-bold'>Hello,</p>  
       <p className='text-lg font-bold'>sign in</p>
       </div>

       <div  onClick={x} className=' text-4xl text-yellow-400 cursor-pointer flex justify-end  bg-slate-800 border-collapse  '> <LuX  /> </div>
       </div>
       {/* end of Hello, sign in */}

       <div>
       <h1 className='text-xl font-bold ml-6 mt-4'>Shope By Department</h1>
       
     <ul className='text-base font-bold ml-6 mt-2 cursor-pointer space-y-4 '>
     <li>Cloth and shoe</li>
     <li>Food</li>
     <li>Cosmetics</li>
     <li>Electronics</li>
     <li>car</li>
    
     </ul>

       </div>
       
       </div>
        
   
       </>
      
     
    );
  }
  
  export default SideBar;
  