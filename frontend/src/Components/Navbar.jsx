import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-3xl font-bold">Imeleo</a>

          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <img
                src={assets.threeline_img}
                alt=""
                className="h-10 w-10 mr-2"
              />
            </button>
          </div>

          <ul
            className={`flex-col lg:flex lg:flex-row lg:space-x-8 ${
              isOpen ? "flex" : "hidden"
            } absolute lg:static bg-blue-600 lg:bg-transparent lg:flex lg:space-x-8  mt-2 lg:mt-0 p-4 lg:p-0 w-full lg:w-auto top-full lg:top-auto left-0`}
          >
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Solution
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Why us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Blogs
              </a>
            </li>
          </ul>

          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-800"></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
