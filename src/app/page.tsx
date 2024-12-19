import React from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <div>
      {/* Banner Image */}
      <Image
        src="/banner.png.jpg"
        alt="product-banner"
        width={1250}
        height={700}
        className="w-full h-auto mx-auto"
      />

      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-[15px] text-black tracking-widest font-bold title-font mb-1">
              First Look
            </h2>
            <h1 className="text-[56px] text-black font-bold title-font mb-4">
              Nike Air Max Pulse
            </h1>
            <p className="lg:w-2/3 mx-auto text-gray-700 leading-relaxed text-base font-normal">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
              <br />
              —designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Notify Me
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Shop Air Max
              </button>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="container mx-auto px-4 py-8">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Best of Air Max</h2>
            <div className="flex items-center space-x-2">
              <span className="text-base font-normal">Shop</span>
              <IoIosArrowBack className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
              <IoIosArrowForward className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="relative text-left border rounded-lg p-4 shadow-md">
              <Image
                src="/best1.png"
                alt="Nike Air Max Pulse Women's"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="text-lg font-medium mt-4">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Women Shoes</p>
              <p className="text-gray-700 font-bold absolute bottom-9 right-4">₹ 13,995</p>
            </div>

            {/* Product Card 2 */}
            <div className="relative text-left border rounded-lg p-4 shadow-md">
              <Image
                src="/best1.png"
                alt="Nike Air Max Pulse Men's"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="text-lg font-medium mt-4">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Men Shoes</p>
              <p className="text-gray-700 font-bold absolute bottom-9 right-4">₹ 13,995</p>
            </div>

            {/* Product Card 3 */}
            <div className="relative text-left border rounded-lg p-4 shadow-md">
              <Image
                src="/best2.png"
                alt="Nike Air Max 97 SE"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="text-lg font-medium mt-4">Nike Air Max 97 SE</h3>
              <p className="text-gray-500 text-sm">Men Shoes</p>
              <p className="text-gray-700 font-bold absolute bottom-9 right-4">₹ 16,995</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <h1 className="text-xl font-semibold ml-12">Featured</h1>
      <Image
        src="/banner2.png" 
        alt="product-banner"
        width={1250}
        height={700}
        className="w-full h-auto mx-auto my-5"
      />

      {/* Fourth Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-[56px] text-black font-bold title-font mb-4">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="lg:w-2/3 mx-auto text-gray-700 leading-relaxed text-base font-normal">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Find Your Shoe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Gear Up</h2>
          </div>

          {/* Men and Women Sections */}
          <div className="flex flex-col md:flex-row">
            {/* Men Section */}
            <div className="w-full md:w-1/2 pr-4 mb-8">
              <div className="mb-8 flex items-center space-x-5">
                <div className="flex items-center ml-auto">
                  <span className="text-base font-normal">Shop Men</span>
                  <IoIosArrowBack className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
                  <IoIosArrowForward className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
                </div>
              </div>

              {/* Men's Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="text-left">
                  <Image
                    src="/G1.png"
                    alt="Nike Dri-FIT ADV TechKnit Ultra"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h3 className="text-lg font-medium mt-2">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-gray-500 text-sm">Men Short-Sleeve Running Top</p>
                  <p className="text-gray-700 font-bold mt-1">₹ 3,895</p>
                </div>

                <div className="text-left">
                  <Image
                    src="/G2.png"
                    alt="Nike Dri-FIT Challenger"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h3 className="text-lg font-medium mt-2">Nike Dri-FIT Challenger</h3>
                  <p className="text-gray-500 text-sm">Men 18cm 2-in-1 Shorts</p>
                  <p className="text-gray-700 font-bold mt-1">₹ 2,495</p>
                </div>
              </div>
            </div>

            {/* Women Section */}
            <div className="w-full md:w-1/2 pl-4">
              <div className="mb-8 flex items-center justify-end space-x-5">
                <div className="flex items-center">
                  <span className="text-base font-normal">Shop Women</span>
                  <IoIosArrowBack className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
                  <IoIosArrowForward className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" />
                </div>
              </div>

              {/* Women's Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-left">
                  <Image
                    src="/G3.png"
                    alt="Nike Dri-FIT ADV Run Division"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h3 className="text-lg font-medium mt-2">Nike Dri-FIT ADV Run Division</h3>
                  <p className="text-gray-500 text-sm">Women Running Top</p>
                  <p className="text-gray-700 font-bold mt-1">₹ 4,295</p>
                </div>

                <div className="text-left">
                  <Image
                    src="/G4.png"
                    alt="Nike Air Max 97"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h3 className="text-lg font-medium mt-2">Nike Air Max 97</h3>
                  <p className="text-gray-500 text-sm">Womens Running Shoes</p>
                  <p className="text-gray-700 font-bold mt-1">₹ 14,495</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/**End Of 4th Section*/}
  {/**Start of 5th section */}
  <h2 className="text-2xl font-bold mb-2">Dont Miss</h2>
  {/**Main div of 5th section */}
   <div>
   <Image
                src="/banner3.png"
                alt="Nike Dri-FIT Challenger"
                width={1250}
                height={700}
                className="w-full h-auto object-cover rounded"
              />
   </div>
   {/**End of Fifth Section */}
   {/**Start of 6th Section  */}
    
          <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
           
            <h1 className="text-[56px] text-black font-bold title-font mb-4">
            FLIGHT ESSENTIALS
            </h1>
            <p className="lg:w-2/3 mx-auto text-gray-700 leading-relaxed text-base font-normal">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* Card Section */}
        
          {/* Section Title */}
         
            <h2 className="text-2xl font-bold mb-4 text-black">The Essentials</h2>
    
            <div className="flex items-center justify-between mb-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="relative text-left">
              <Image
                src="/G61.png"
                alt="Nike Air Max Pulse Women's"
                width={440}
                height={540}
                className="w-full h-auto object-cover rounded"
                
              />
               <button className="absolute bottom-4 left-9 transform -translate-x-0 bg-white  px-6 py-2 rounded-full  transition duration-800">
                  Men
             </button>
            </div>

            {/* Product Card 2 */}
            <div className="relative text-left">
              <Image
                src="/G62.png"
                alt="Nike Air Max Pulse Men's"
                width={440}
                height={540}
                className="w-full h-auto object-cover rounded"
              />
               <button className="absolute bottom-4 left-9 transform -translate-x-0 bg-white  px-6 py-2 rounded-full  transition duration-800">
                  Women
             </button>
              
            </div>

            {/* Product Card 3 */}
            <div className="relative text-left ">
              <Image
                src="/G63.png"
                alt="Nike Air Max 97 SE"
                width={440}
                height={540}
                className="w-full h-auto object-cover rounded"
              /> 
               <button className="absolute bottom-4 left-9 transform -translate-x-0 bg-white  px-6 py-2 rounded-full  transition duration-800">
                  Kids
             </button>
             
            </div>
          </div>
        </div>
      </section>
     {/**Ending Of sixth Section */}
      {/**Last Section of Home Page */}

      
  <div className="container px-5 py-24 mx-auto ml-60">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
         
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      {/**Icons Part */}
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-10">
          Icons
        </h2>
        <ul>
        <li className='my-5'>Air Force 1</li>
        <li className='my-5'>Huarache</li>
        <li className='my-5'>Air Max 90</li>
        <li className='my-5'>Air Max 95</li>  
        </ul>
      </div>
      {/**Shoes Part */}
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-10">
         Shoes
        </h2>
        <ul>
        <li className='my-5'>All Shoes</li>
        <li className='my-5'>Custom Shoes</li>
        <li className='my-5'>Jordan Shoes</li>
        <li className='my-5'>Runnig Shoes</li>  
        </ul>
      </div>
      {/**Clothing Part */}
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-10">
         Clothing
        </h2>
        <ul>
        <li className='my-5'>All Clothing</li>
        <li className='my-5'>Modest Clothing</li>
        <li className='my-5'>Hoodies & Pullovers</li>
        <li className='my-5'>Shirts & Tops</li>  
        </ul>
      </div>
      {/**Kids Part */}
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-10">
          Kids
        </h2>
        <ul>
        <li className='my-5'>Infant & Toddler Shoes</li>
        <li className='my-5'>Kids Shoes</li>
        <li className='my-5'>Kids Jordan Shoes</li>
        <li className='my-5'>Kids Basketball Shoes</li>  
        </ul>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
