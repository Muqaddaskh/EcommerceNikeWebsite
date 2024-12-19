import React from 'react';
import Image from 'next/image';
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { RiMessage2Fill } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { MdEditLocation } from 'react-icons/md';

const Contactus = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mt-12">GET HELP</h1>

      {/* Search Section */}
      <div className="relative w-full max-w-lg mt-4">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full h-12 border rounded-sm bg-[#F5F5F5] pl-10"
        />
        <Image
          src="/search.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>

      <hr className="w-full my-6 border-gray-300" />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6">
        {/* Left Section */}
        <section className="flex-1 border-r-2 border-gray-300 px-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            <p className="text-base">
              We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>PayTM or local credit/debit cards</li>
              <li>Apple Pay</li>
            </ul>
            <p>
              <span className="underline">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member,{' '}
              <span className="underline">Join Us</span> today.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                JOIN US
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                SHOP NIKE
              </button>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mt-6">FAQs</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold">Does my card need international purchases enabled?</p>
                <p className="text-base">Yes, we recommend asking your bank to enable international purchases on your card.</p>
              </div>
              <div>
                <p className="text-lg font-bold">Can I pay for my order with multiple methods?</p>
                <p className="text-base">No, payment for Nike orders cannot be split between multiple payment methods.</p>
              </div>
              <div>
                <p className="text-lg font-bold">What payment method is accepted for SNKRS orders?</p>
                <p className="text-base">You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div>
                <p className="text-lg font-bold">Why don not I see Apple Pay as an option?</p>
                <p className="text-base">
                  To see Apple Pay as an option, ensure you are using a compatible Apple device, signed into iCloud, and using Safari.
                </p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-sm mt-4">Was this answer helpful?</p>
            <div className="flex gap-2">
              <BiSolidLike className="text-2xl cursor-pointer" />
              <BiSolidDislike className="text-2xl cursor-pointer" />
            </div>
            <div>
              <span className="text-base font-semibold text-gray-500 mt-4 block">RELATED</span>
              <p className="text-lg underline">WHAT ARE NIKE DELIVERY OPTIONS?</p>
              <p className="text-lg underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-full lg:w-[300px] flex flex-col items-center gap-8">
          <h2 className="text-2xl font-semibold">CONTACT US</h2>
          <div className="text-center">
            <FaMobileScreenButton className="text-6xl mx-auto" />
            <p className="text-lg mt-2">000 800 919 0566</p>
            <p className="text-sm text-gray-600">24/7 Support</p>
          </div>
          <div className="text-center">
            <RiMessage2Fill className="text-6xl mx-auto" />
            <p className="text-lg mt-2">Live Chat</p>
            <p className="text-sm text-gray-600">24/7 Support</p>
          </div>
          <div className="text-center">
            <IoMdMail className="text-6xl mx-auto" />
            <p className="text-lg mt-2">Email Us</p>
            <p className="text-sm text-gray-600">Response within 5 business days</p>
          </div>
          <div className="text-center">
            <MdEditLocation className="text-6xl mx-auto" />
            <p className="text-lg mt-2">Store Locator</p>
            <p className="text-sm text-gray-600">Find Nike retail stores near you</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
