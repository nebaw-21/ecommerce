import img from '../Images/protien.jpg'
import img2 from '../Images/shoes.jpg'
import img3 from '../Images/shoes2.jpg'
import img4 from '../Images/Cloth.jpg'
import img5 from '../Images/dumbbel.jpg'
import img6 from '../Images/ad.jpg'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ShowCatagory()
 {
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        autoplay:true,
        arrow:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    
  return (
<div className="relative grid grid-cols-4 md:grid-cols-8 grid-rows-12 gap-3 mx-5">


<Slider {...settings} className='col-span-4 row-span-5 md:row-start-1 md:col-start-3 md:col-span-4 md:row-span-2 '>

<div className="relative h-56 md:h-96 sm:h-60 col-span-4 row-span-5 rounded-xl border shadow-lg cursor-pointer mt-4 ">
<img className='absolute w-full h-full object-cover rounded-xl hover:opacity-80 ' src={img4} />
<div className='absolute text-black font-black text-xl ml-4 mt-2'>Description </div>
</div>

<div className="relative h-56 md:h-96 sm:h-60 col-span-4 row-span-5 rounded-xl border shadow-lg cursor-pointer mt-4 ">
<img className='absolute w-full h-full object-cover rounded-xl hover:opacity-80 ' src={img} />
<div className='absolute text-black font-black text-xl ml-4 mt-2'>Description </div>
</div>

<div className="relative h-56 md:h-96 sm:h-60 col-span-4 row-span-5 rounded-xl border shadow-lg cursor-pointer mt-4 ">
<img className='absolute w-full h-full object-cover rounded-xl hover:opacity-80 ' src={img3} />
<div className='absolute text-black font-black text-xl ml-4 mt-2'>Description </div>
</div>

</Slider>



<div className=" col-span-2 h-48 md:h-96 rounded-xl md:row-start-1 md:col-start-1 md:col-span-2 md:row-span-2">

<img className=' w-full h-full object-cover rounded-t-lg hover:opacity-80 rounded-xl' src={img3} />
<div className='absolute ml-4 -mt-44 md:-mt-90 text-black underline decoration-gray-400  text-xl font-black'>Category Title</div>
<button className='absolute ml-4  -mt-34 md:-mt-80  bg-yellow-400 hover:bg-yellow-300
text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg'>Shop</button>

</div>

<div className=" col-span-2 row-span-4  h-96 md:-72  rounded-xl md:row-start-1 md:col-start-7 md:col-span-2 md:row-span-2">
<img className=' w-full h-full object-cover rounded-t-lg hover:opacity-80 rounded-xl ' src={img} />
<div className='absolute ml-4 -mt-90 text-black underline decoration-gray-400  text-xl font-black'>Category Title</div>
<button className='absolute ml-4 -mt-80  bg-yellow-400 hover:bg-yellow-300
text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg'>Shop</button>
</div>


<div className=" col-span-2  h-48 md:h-64    md:row-start-3 md:col-start-1 md:col-span-2 md:row-span-2">
<img className=' w-full h-full object-cover rounded-t-lg hover:opacity-80 rounded-xl ' src={img5} />
<div className='absolute ml-4 -mt-44 md:-mt-60 text-black underline decoration-gray-400  text-xl font-black'>Category Title</div>
<button className='absolute ml-4 -mt-34 md:-mt-48  bg-yellow-400 hover:bg-yellow-300
text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg'>Shop</button>
</div>

<div className=" col-span-4 row-span-2 h-52 sm:h-64 rounded-xl md:row-start-3 md:col-start-7 md:col-span-2 md:row-span-2">
<img className=' w-full h-full object-cover rounded-t-lg hover:opacity-80 rounded-xl ' src={img3} />
<div className='absolute ml-4 -mt-48 md:-mt-60 text-black underline decoration-gray-400  text-xl font-black'>Category Title</div>
<button className='absolute ml-4 -mt-38 md:-mt-48 bg-yellow-400 hover:bg-yellow-300
text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg'>Shop</button>
</div>


<div className=" col-span-4 row-span-2 h-56 sm:h-64  rounded-xl md:row-start-3 md:col-start-3 md:col-span-4 md:row-span-2">
<img className=' w-full h-full object-cover rounded-t-lg hover:opacity-80 rounded-xl' src={img2} />
<div className='absolute ml-4 -mt-52 md:-mt-60 text-black underline decoration-gray-400  text-xl font-black'>Category Title</div>
<button className='absolute ml-4 -mt-39 md:-mt-48 bg-yellow-400 hover:bg-yellow-300
text-lime-800  font-bold  px-4 py-0.5 rounded-3xl shadow-lg'>Shop</button>
</div>


</div>
   
  );
}

export default ShowCatagory;
