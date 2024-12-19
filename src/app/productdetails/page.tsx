import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

export default function SignUP() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-16 px-4 py-8">
        {/* Image Section */}
        <div className="flex justify-center lg:w-2/3 w-full">
          <Image
            className="rounded-lg"
            src="/product3.png"
            alt="Product Details"
            width={800}
            height={600}
          />
        </div>

        {/* Login Form Section */}
        <div className="flex flex-col bg-white p-6 w-full max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 ml-4 text-center lg:text-left">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
          <div className="text-center mx-auto max-w-3xl p-4">
            <p className="text-lg leading-relaxed text-justify">
              Turn style on its head with this crafted take on the
              Air Jordan 1 Mid. Its inside-out-inspired
              construction, including unique layering and
              exposed foam accents, ups the ante on this
              timeless Jordan Brand silhouette. Details like the
              deco stitching on the Swoosh add coveted
              appeal, while the unexpected shading, rich
              mixture of materials, and aged midsole aesthetic
              give this release an artisan finish.
            </p>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 ml-4">
            ₹ 8 695.00
          </h1>

          {/* Add To Cart Button */}
          <button
            type="submit"
            className="w-44 h-12 ml-2 bg-black text-white py-3 rounded-full hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <FaCartShopping className="text-xl" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
