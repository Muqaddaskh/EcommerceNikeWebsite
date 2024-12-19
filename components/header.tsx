"use client";

import Image from "next/image";
import React, { useState } from "react";
import topLogo from "../public/favicon.svg";
import logo from "../public/logo.svg";
import wishlistIcon from "../public/wishlist.svg";
import cartIcon from "../public/cart.svg";
import searchIcon from "../public/search.svg";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full h-9 bg-[#F5F5F5] flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <Image className="ml-2 md:ml-4" src={topLogo} alt="Top Logo" />

        {/* Top Navigation */}
        <ul className="hidden md:flex space-x-6 text-[11px] font-medium text-gray-700">
          <li>
            <Link href="/product" style={{ padding: "4px" }} className="text-base">
              Find a Store
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{ padding: "4px" }} className="text-base">
              Help
            </Link>
          </li>
          <li>
            <Link href="/Joinus" style={{ padding: "4px" }} className="text-base">
              Join Us
            </Link>
          </li>
          <li>
            <Link href="/Login" style={{ padding: "4px" }} className="text-base">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Header */}
      <div className="w-full h-16 bg-white flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <Image src={logo} alt="Nike Logo" className="h-8" />

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden flex items-center text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative md:flex md:space-x-6 text-gray-800 font-medium bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" style={{ padding: "4px" }}>
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/cards" style={{ padding: "4px" }}>
              Men
            </Link>
          </li>
          <li>
            <Link href="#" style={{ padding: "4px" }}>
              Women
            </Link>
          </li>
          <li>
            <Link href="#" style={{ padding: "4px" }}>
              Kids
            </Link>
          </li>
          <li>
            <Link href="/checkout" style={{ padding: "4px" }}>
              Sale
            </Link>
          </li>
          <li>
            <Link href="#" style={{ padding: "4px" }} className="text-lg font-semibold">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Box */}
          <div className="relative w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 border rounded-full bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Image
              src={searchIcon}
              alt="Search Icon"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="flex space-x-4">
            <Image src={wishlistIcon} alt="Wishlist Icon" className="w-6 h-6 cursor-pointer" />
            <Image src={cartIcon} alt="Cart Icon" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <div className="flex flex-col justify-center items-center mt-6 text-center px-4">
        <h3 className="font-extrabold text-lg">Hello Nike App</h3>
        <p className="text-sm text-gray-600">
          Download the app to access everything Nike. Get Your Great.
        </p>
      </div>
    </div>
  );
}
