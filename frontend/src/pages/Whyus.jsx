import React from "react";
import { assets } from "../assets/assets";

const Whyus = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-12">
      <div className="bg-pink-100  max-h-full">
        {/*--------the heading------*/}
        <div className="flex flex-col mb-12 text-center">
          <h1 className="text-blue-600 text-4xl md:text-5xl font-bold py-4 mt-6">
            Why Choose Us
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Trusted expertise, cutting-edge technology, and a customer-first
            approach to drive your success.
          </h2>
        </div>

        {/*--------------the grid------------*/}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {/* Grid Item 1 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.webdev_img}
              alt="Technical Expertise"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Technical Expertise
              </p>
              <p className="text-center text-gray-600 mt-4">
                Building cutting-edge, high-performing web apps tailored to your
                business needs. Our solutions ensure seamless user experiences.
              </p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.mobile_img}
              alt="Business Centric Approach"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Business Centric Approach
              </p>
              <p className="text-center text-gray-600 mt-4">
                Crafting exceptional mobile experiences that revolutionize user
                engagement on the go. Our solutions deliver intuitive,
                high-performance results.
              </p>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.consultancy_img}
              alt="Process & Quality Assurance"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Process & Quality Assurance
              </p>
              <p className="text-center text-gray-600 mt-4">
                Strategic IT consulting services to guide businesses through the
                dynamic technology landscape. We provide expert insights and
                solutions to optimize.
              </p>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.software_img}
              alt="Support"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Support
              </p>
              <p className="text-center text-gray-600 mt-4">
                Enterprise-grade, bespoke solutions that perfectly align with
                your business needs and goals.
              </p>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.cloud_img}
              alt="Innovation"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Innovation
              </p>
              <p className="text-center text-gray-600 mt-4">
                Empower businesses to harness the full potential of cloud
                computing with solutions that ensure flexibility and
                scalability.
              </p>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              src={assets.engieering_img}
              alt="Scalability"
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-200 border border-gray-300"
            />
            <div className="pt-16">
              <p className="text-center text-2xl font-semibold text-blue-600">
                Scalability
              </p>
              <p className="text-center text-gray-600 mt-4">
                Robust data pipelines, ensuring the seamless collection,
                storage, and management of your data, no matter the scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
