import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import Image from "next/image";

// Dummy Array for my products
const products = [
  { id: 1, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product1.png" },
  { id: 2, logo: "Just In", Text1: "Nike Court Vision Low Next Nature", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 4 995.00", image: "/product2.png" },
  { id: 3, logo: "Just In", Text1: "Nike Air Force 1 PLT.AF.ORM", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 8 695.00", image: "/product3.png" },
  { id: 4, logo: "Just In", Text1: "Nike Air Force 1 React", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product1.png" },
  { id: 5, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product5.png" },
  { id: 6, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product6.png" },
  { id: 7, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product7.png" },
  { id: 8, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product8.png" },
  { id: 9, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product9.png" },
  { id: 10, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product10.png" },
  { id: 11, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product11.png" },
  { id: 12, logo: "Just In", Text1: "Nike Air Force 1 Mid '07", Text2: "Men's Shoes", Text3: "1 Colour", price: "MRP : ₹ 10 795.00", image: "/product12.png" },
];

function Product() {
  return (
    <div>
      {/* Sidebar and Product Section */}
      <main className="my-20 max-w-screen-2xl mx-auto flex gap-x-6 px-4 sm:px-6 lg:px-8">
        {/* Sidebar Section */}
        <section className="flex flex-col w-full sm:w-1/4">
          <h1 className="font-semibold text-sm md:text-2xl">New (500)</h1>
          <div className="font-medium text-xs lg:text-sm space-y-2 mt-6 flex flex-col">
            <Link href={""}>Shoes</Link>
            <Link href={""}>Sports Bras</Link>
            <Link href={""}>Tops & T-Shirts</Link>
            <Link href={""}>Hoodies & Sweatshirts</Link>
            <Link href={""}>Jackets</Link>
            <Link href={""}>Trousers & Tights</Link>
            <Link href={""}>Shorts</Link>
            <Link href={""}>Tracksuits</Link>
            <Link href={""}>Jumpsuits & Rompers</Link>
            <Link href={""}>Skirts & Dresses</Link>
            <Link href={""}>Socks</Link>
            <Link href={""}>Accessories & Equipment</Link>
          </div>
          <div className="mt-10">
            <hr />
            <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
              Gender
              <span>
                <IoIosArrowUp />
              </span>
            </h1>
            <div className="mt-2 text-xs lg:text-sm">
              <h1>Men</h1>
              <h1>Women</h1>
              <h1>Unisex</h1>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="flex items-center gap-2 font-semibold text-sm">
              Hide Filters
              <FiFilter size={14} />
            </h1>
            <h2 className="flex items-center gap-2 font-semibold text-sm">
              Sort By
              <RiArrowDropDownLine size={25} />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="p-4 border rounded-md">
                <a className="block relative h-56 rounded overflow-hidden">
                  <Image
                    alt={"Product Image"}
                    width={200}
                    height={400}
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-red-700 text-base tracking-widest title-font mb-1">
                    {product.logo}
                  </h3>
                  <h2 className="text-black title-font text-lg font-medium">
                    {product.Text1}
                  </h2>
                  <h2 className="text-gray-400 title-font text-sm font-medium">
                    {product.Text2}
                  </h2>
                  <h2 className="text-gray-400 title-font text-sm font-medium">
                    {product.Text3}
                  </h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
