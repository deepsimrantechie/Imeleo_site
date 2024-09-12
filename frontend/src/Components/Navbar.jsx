import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-blue-600 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-white text-xl font-bold">
            Imeleo
          </a>

          <ul class="flex space-x-8">
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                Solution
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                Carrers
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                Why us
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                Blogs
              </a>
            </li>
          </ul>

          <div class="relative">
            <input
              type="text"
              placeholder="Search..."
              class="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="absolute right-2 top-2 text-gray-600 hover:text-gray-800"></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
