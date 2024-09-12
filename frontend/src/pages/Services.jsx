import React from "react";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="bg-pink-50 py-12 px-4 md:px-12 lg:px-24">
      {/*--------the heading------*/}
      <div className="flex flex-col mb-12 text-center">
        <h1 className="text-blue-600 text-4xl md:text-5xl font-bold py-4">
          Services
        </h1>
        <h2 className="text-gray-600 text-lg md:text-xl font-medium">
          Comprehensive business services designed to support growth <br />
          and enhance your competitive edge
        </h2>
      </div>

      {/*--------------the grid------------*/}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* Grid Item 1 */}
        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.webdev_img}
            alt="Icon 1"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              Web App Development
            </p>
            <p className="text-center text-gray-600">
              Building cutting-edge, high-performing web apps tailored to your
              business needs. Our solutions ensure seamless user experiences.
            </p>
          </div>
        </div>

        {/* Grid Item 2 */}
        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.mobile_img}
            alt="Icon 2"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              App Development
            </p>
            <p className="text-center text-gray-600">
              Crafting exceptional mobile experiences that revolutionize user
              engagement on the go. Our solutions deliver intuitive,
              high-performance experiences.
            </p>
          </div>
        </div>

        {/* Grid Item 3 */}
        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.consultancy_img}
            alt="Icon 3"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              IT Consulting
            </p>
            <p className="text-center text-gray-600">
              Strategic IT consulting services to guide businesses through the
              dynamic technology landscape. We provide expert insights and
              solutions to optimize performance.
            </p>
          </div>
        </div>

        {/* Lower grid items */}
        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.software_img}
            alt="Icon 4"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              Software Development
            </p>
            <p className="text-center text-gray-600">
              Enterprise-grade, bespoke solutions that perfectly align with your
              business needs and goals.
            </p>
          </div>
        </div>

        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.cloud_img}
            alt="Icon 5"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              Cloud Services
            </p>
            <p className="text-center text-gray-600">
              Empower businesses to harness the full potential of cloud
              computing with solutions that ensure flexibility and scalability.
            </p>
          </div>
        </div>

        <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={assets.engieering_img}
            alt="Icon 6"
            className="absolute top-4 left-4 w-10 h-10 rounded-full border border-gray-300 bg-gray-100"
          />
          <div className="pt-12">
            <p className="text-center text-2xl text-blue-600 font-semibold mb-2">
              Data Engineering
            </p>
            <p className="text-center text-gray-600">
              Robust data pipelines, ensuring seamless collection, storage, and
              management of your data, no matter the scale.
            </p>
          </div>
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

export default Services;
