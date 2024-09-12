import React from "react";
import { assets } from "../assets/assets";

const Blogs = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-24">
      {/*--------blog heading --------*/}
      <div className="flex flex-col mb-12 text-center">
        <h1 className="text-blue-600 text-4xl md:text-5xl font-bold mb-6">
          Blogs
        </h1>
        <h2 className="text-gray-700 text-lg md:text-xl">
          Explore our blogs for expert tips, industry insights, and engaging{" "}
          <br />
          content on the latest trends. Stay informed and inspired.
        </h2>
      </div>
      {/*--------grid--------*/}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Grid Item 1 */}
        <div className="relative bg-pink-100 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.blog1_img}
            alt="Description 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm mb-4 hover:bg-gray-200">
            January 10, 2024
          </button>
          <p className="text-left text-blue-600 text-xl font-semibold mb-2">
            Why Data-Driven Decision Making is Key for Business Growth
          </p>
          <p className="text-left text-gray-600">
            Learn how leveraging software that offers real-time data insights
            can enhance strategic decisions, boost productivity, and drive
            sustainable growth.
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="relative bg-pink-100 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.blog2_img}
            alt="Description 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm mb-4 hover:bg-gray-200">
            September 1, 2024
          </button>
          <p className="text-left text-blue-600 text-xl font-semibold mb-2">
            Top 5 Business Services to Boost Customer Satisfaction
          </p>
          <p className="text-left text-gray-600">
            Explore essential services such as CRM, help desk solutions, and
            automated support systems that can enhance customer experiences and
            foster long-term loyalty.
          </p>
        </div>

        {/* Grid Item 3 */}
        <div className="relative bg-pink-100 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.blog3_img}
            alt="Description 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm mb-4 hover:bg-gray-200">
            January 10, 2024
          </button>
          <p className="text-left text-blue-600 text-xl font-semibold mb-2">
            Leveraging Software Solutions to Enhance Business Efficiency
          </p>
          <p className="text-left text-gray-600">
            Discover how modern software tools can streamline your operations,
            automate tasks, and improve workflow efficiency to help your
            business stay competitive.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
          View more
        </button>
      </div>
    </div>
  );
};

export default Blogs;
