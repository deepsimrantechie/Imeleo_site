import React from "react";
import { assets } from "../assets/assets";

const Solution = () => {
  return (
    <div className="flex flex-col mb-12 px-4 md:px-12 lg:px-24">
      {/* ----------solution heading-------------- */}
      <div className="flex flex-col mb-12 text-center">
        <h1 className="text-blue-600 text-4xl md:text-5xl font-bold py-4">
          Solutions
        </h1>
        <h2 className="text-gray-600 text-lg md:text-xl font-medium">
          Innovative software solutions tailored to streamline your <br />
          business operations and maximize efficiency
        </h2>
      </div>

      {/*--------------grid ---------*/}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/*--------------upper grid ------------------------*/}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.marketing_img}
            alt="Description 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Content Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.employeee_img}
            alt="Description 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Employee Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.vehical_img}
            alt="Description 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Vehicle Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        {/*--------lower grid------------*/}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.lead_img}
            alt="Description 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Lead Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.inventry_img}
            alt="Description 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Inventory Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-auto border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.Hospital_img}
            alt="Description 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-blue-600 text-2xl font-semibold mb-2 text-center">
            Hospital Management
          </p>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetu
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-700 transition-colors duration-300">
          View more
        </button>
      </div>
    </div>
  );
};

export default Solution;
