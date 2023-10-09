import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import AllProduct from './AllProduct';
import ShowCatagory from './ShowCatagory';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
   
    <div className={`relative  ${isSidebarOpen ? 'h-screen overflow-hidden cursor-pointer' : ''}`}>
    
    <Header x={handleSidebarToggle} />
    <AllProduct />
    <ShowCatagory />
    {isSidebarOpen && (
      <>
      <div onClick={handleSidebarToggle}  className="md:translate-x-1/4 translate-x-11/12  absolute top-0  left-0  w-full  h-screen  bg-black bg-opacity-50 z-50 "></div>
      <SideBar x={handleSidebarToggle} />
      
      </>

    )}


 <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
 <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>


      <Footer />
    </div>
  );
}

export default Home;