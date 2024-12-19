"use client"; // This tells Next.js it's a Client Component

import { useState } from "react";
import { SiNike } from "react-icons/si";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <SiNike className="text-6xl" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">YOUR ACCOUNT FOR EVERYTHING <br /> NIKE</h1>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center text-sm mt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-black border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-600">Keep Me Signed In</span>
          </label>
          <button type="button" className="text-gray-600 hover:underline my-4">
            Forgot Password?
          </button>
        </div>

        {/* Buttons */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          Sign In
        </button>

        {/* Privacy Policy and Terms of Use */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          By logging in, you agree to Nike{" "}
          <span className="text-gray-600 font-medium underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use.</span>
        </p>

        {/* Join Us Link */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          Not a member?{" "}
          <a href="/Joinus" className="text-black font-medium hover:underline">
            Join Us
          </a>
        </p>
      </div>
    </div>
  );
}
