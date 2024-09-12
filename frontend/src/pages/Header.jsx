import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative w-full h-screen">
        <img
          src={assets.home_img}
          className="w-full h-full object-cover blur-sm"
          alt="Image with Text Overlay"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-blue-600 text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Business Software
          </h1>
          <h2 className="text-blue-600 text-3xl md:text-5xl font-semibold mb-6 drop-shadow-md">
            Solution And Services
          </h2>
          <h3 className="text-gray-700 text-lg md:text-xl mb-8 font-medium max-w-lg mx-auto">
            Software services and solutions to take your business to the next
            level
          </h3>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105">
              Know more
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 border border-blue-600 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-transform transform hover:scale-105">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
