import Link from "next/link";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Content Wrapper */}
          <div className="flex-1">
            {/* 1st Delivery Section */}
            <div className="bg-gray-100 p-4 rounded-md">
              <span className="font-medium text-gray-800 text-sm">Free Delivery</span>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-gray-600">
                  Applies to orders of ₹14,000.00 or more.
                </span>
                <Link href="#" className="text-sm text-black underline font-medium">
                  View details
                </Link>
              </div>
            </div>

            {/* Products Section */}
            <div className="space-y-6 mt-6">
              <ProductCard />
              <ProductCard />
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-[350px] h-72 justify-center bg-gray-50 p-6 rounded-lg shadow-lg">
            <h1 className="font-inter font-semibold text-xl mb-6">Summary</h1>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Subtotal</span>
                <span className="text-sm font-medium text-gray-700">₹20,890.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Estimated Delivery & Handling
                </span>
                <span className="text-sm font-medium text-gray-700">Free</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-lg font-semibold text-gray-800">₹20,890.00</span>
              </div>
            </div>
            <button className="mt-6 w-full px-4 py-2 bg-black text-white text-sm rounded-3xl hover:bg-gray-800 transition duration-300">
              Member Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// ProductCard Component
function ProductCard() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-200 p-4 rounded-lg shadow gap-4">
      {/* Product Image */}
      <div className="w-full sm:w-[150px]">
        <Image
          src="/G1.png"
          alt="Product Image"
          width={150}
          height={150}
          className="rounded-md object-cover w-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h1 className="font-semibold text-base">Nike Dri-FIT ADV TechKnit Ultra</h1>
          <span className="text-sm text-gray-700">MRP: ₹3,895.00</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">Mens Short-Sleeve Running Top</p>
        <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>

        <div className="flex mt-4 gap-6">
          <div>
            <span className="text-sm text-gray-600">Size: </span>
            <span className="font-medium text-sm">L</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Quantity: </span>
            <span className="font-medium text-sm">1</span>
          </div>
        </div>

        <div className="flex mt-4 gap-3">
          <CiHeart className="text-3xl cursor-pointer text-gray-700 hover:text-black" />
          <MdDeleteOutline className="text-3xl cursor-pointer text-gray-700 hover:text-black" />
        </div>
      </div>
    </div>
  );
}
