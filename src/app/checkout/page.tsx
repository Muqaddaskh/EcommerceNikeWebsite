import React from "react";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-8 mx-auto px-4 md:px-8 lg:px-32 mt-8">
        {/* Left Section */}
        <section className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">How would you like to get your order?</h1>
          <p className="text-base text-justify mb-4 leading-relaxed text-gray-700">
            Customs regulation for India require a copy of the recipient KYC. The address on the
            KYC needs to match the shipping address. Our courier will contact you via SMS/email to
            obtain a copy of your KYC.{" "}
            <span className="underline cursor-pointer text-blue-600">Learn More</span>
          </p>

          {/* Search Section */}
          <div className="relative w-full mt-4">
            <input
              type="text"
              placeholder="Deliver It"
              className="w-full h-16 border rounded-md pr-3 text-[#111111] border-gray-300 pl-10 shadow-sm"
            />
            <AiOutlineDeliveredProcedure className="absolute left-3 top-1/2 text-xl transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Name and Address */}
          <h1 className="text-2xl font-bold mt-8 mb-2">Enter your name and address:</h1>
          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 w-full rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 w-full rounded-md"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-gray-300 p-3 w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="border border-gray-300 p-3 w-full rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <select className="border border-gray-300 p-3 w-full rounded-md">
                  <option value="">State/Territory</option>
                  <option value="Sindh">Sindh</option>
                </select>
                <select className="border border-gray-300 p-3 w-full rounded-md">
                  <option value="">Select a Country</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
            </div>
          </form>

          <h1 className="text-2xl font-bold mt-8 mb-2">What is your contact information?</h1>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 p-3 w-full rounded-md mb-2"
            />
            <p className="text-gray-400 text-sm mb-2">
              A confirmation email will be sent after checkout.
            </p>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 w-full rounded-md mb-2"
            />
            <p className="text-gray-400 text-sm mb-2">
              A carrier might contact you to confirm delivery.
            </p>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gray-800 text-white my-6 py-3 rounded-full hover:bg-gray-700 transition">
            Continue
          </button>
          <div className="w-full border border-gray-200 rounded-lg">
      {/* Step 1 */}
      <div className="py-4 px-4 border-b border-gray-200">
        <span className="font-bold text-black">Delivery</span>
      </div>

      {/* Step 2 */}
      <div className="py-4 px-4 border-b border-gray-200">
        <span className="text-gray-400">Shipping</span>
      </div>

      {/* Step 3 */}
      <div className="py-4 px-4 border-b border-gray-200">
        <span className="text-gray-400">Billing</span>
      </div>

      {/* Step 4 */}
      <div className="py-4 px-4">
        <span className="text-gray-400">Payment</span>
      </div>
    </div>

        </section>

        {/* Right Section */}
        <section className="w-full md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h1 className="font-semibold text-xl mb-6">Order Summary</h1>
            <div className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Subtotal</span>
                <span className="text-sm font-medium text-gray-700">₹20,890.00</span>
              </div>
              {/* Shipping */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Delivery/Shipping</span>
                <span className="text-sm font-medium text-gray-700">Free</span>
              </div>
              {/* Total */}
              <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-lg font-semibold text-gray-800">₹20,890.00</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              (The total reflects the price of your order, including all duties and taxes.)
            </p>

            {/* Delivery Date */}
            <p className="font-bold mt-6 mb-4 text-gray-800">Arrives Mon, 27 Mar - Wed, 12 Apr</p>

            {/* Item 1 */}
            <div className="flex items-start mb-6">
              <Image
                src="/G1.png"
                width={90}
                height={120}
                alt="Nike Running Top"
                className="object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-gray-700">
                  Nike Dri-FIT ADV TechKnit Ultra Menn Short-Sleeve Running Top
                </h2>
                <p className="text-gray-500 text-sm">Qty 1</p>
                <p className="text-gray-500 text-sm mb-1">Size L</p>
                <p className="font-semibold">₹3,895.00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start">
              <Image
                src="/best2.png"
                width={90}
                height={120}
                alt="Nike Shoes"
                className="object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-gray-700">Nike Air Max 97 SE Men Shoes</h2>
                <p className="text-gray-500 text-sm">Qty 1</p>
                <p className="text-gray-500 text-sm mb-1">Size UK 8</p>
                <p className="font-semibold">₹16,995.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
