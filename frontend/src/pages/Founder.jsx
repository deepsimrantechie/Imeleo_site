import React from "react";
import { assets } from "../assets/assets";

const Founder = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-12">
      <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg border border-gray-300 space-y-6 md:space-y-0 md:space-x-6">
        {/*------------left side -----*/}
        <div className="w-full md:w-1/2 pr-0 md:pr-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Meet Our Founder
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              With decades of industry experience, Mayank is a highly skilled
              software developer, solution architect, and technology
              entrepreneur. He specializes in building modular and scalable
              cross-platform software solutions.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Over the years, he has worked with numerous businesses, helping
              them overcome complex business challenges by building innovative
              technology solutions.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Admired by clients, developers, and designers alike, his
              entrepreneurial vision drives Imeleo, empowering businesses with
              cutting-edge technology solutions, thus fueling growth and
              innovation.
            </p>
          </div>
        </div>

        {/*-----------------right side--------------*/}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative">
            <img
              src={assets.founder_img}
              alt="Founder Mayank Mahajan"
              className="w-full h-auto max-h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-4 rounded-tr-lg rounded-bl-lg">
              <p className="text-3xl md:text-4xl text-blue-600 font-bold">
                Mayank Mahajan
              </p>
              <p className="text-gray-600 text-sm">Founder, Imeleo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
