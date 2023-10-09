import img from '../Images/protien.jpg'
import img2 from '../Images/shoes.jpg'
import img3 from '../Images/shoes2.jpg'
import img4 from '../Images/Cloth.jpg'
import img5 from '../Images/dumbbel.jpg'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function AllProduct() {
    var settings = {
        dots: true,
       
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 764,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },


          {
            breakpoint: 600,
            settings: {
                autoplay:false,
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                autoplay:false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (

      <div className=" mx-4 my-4  ">

      <Slider {...settings } >
    
    <div className=" rounded-lg border shadow-lg cursor-pointer" >
    <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img} />
    <div className='flex justify-center font-semibold '> weigh protein Powder </div>
    <div className=' flex justify-center font-bold'>$6,500 birr </div>
    <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
     text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
     </div>
   

     <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
    <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img2} />
    <div className='flex justify-center font-semibold '> Adidas new brand </div>
    <div className=' flex justify-center font-bold'>$4,500 birr </div>
    <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
     text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
     </div>

     <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
     <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img3} />
     <div className='flex justify-center font-semibold '> Adidas new brand </div>
     <div className=' flex justify-center font-bold'>$4,500 birr </div>
     <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
      text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
      </div>

      <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
      <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img} />
      <div className='flex justify-center font-semibold '> Adidas new brand </div>
      <div className=' flex justify-center font-bold'>$4,500 birr </div>
      <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
       text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
       </div>
  
       <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
       <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img5} />
       <div className='flex justify-center font-semibold '> Adidas new brand </div>
       <div className=' flex justify-center font-bold'>$4,500 birr </div>
       <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
        text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
        </div>

        <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
        <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img2} />
        <div className='flex justify-center font-semibold '> Adidas new brand </div>
        <div className=' flex justify-center font-bold'>$4,500 birr </div>
        <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
         text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
         </div>
    
         <div className="w-1/2  sm:w-1/3 rounded-lg border shadow-lg cursor-pointer" >
         <img className=' w-full h-48 object-cover rounded-t-lg hover:opacity-80 ' src={img4} />
         <div className='flex justify-center font-semibold '> Adidas new brand </div>
         <div className=' flex justify-center font-bold'>$4,500 birr </div>
         <div className=' flex justify-center '><button className=' flex bg-yellow-400 hover:bg-yellow-300
          text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg' > <p className='text-xl -mt-1 mr-1'>+</p> Add </button></div>
          </div>

      </Slider>
    </div>

  );
}

export default AllProduct;