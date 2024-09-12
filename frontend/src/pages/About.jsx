import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-12">
      {/*--------heading------------*/}
      <div className="flex flex-col mb-12 text-center">
        <h1 className="text-blue-600 text-4xl md:text-5xl font-bold py-4">
          About Imeleo
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Imeleo provides cutting-edge solutions and expert insights to drive
          your business success in the digital age.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg border border-gray-300">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={assets.blogpage_img}
            alt="Imeleo"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Are Increasing <span className="text-blue-600">Business</span>{" "}
            Success With <span className="text-blue-600">Technology</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Imeleo, we use technology to help businesses grow, work smarter,
            and get better results. Our goal is to make it easier for companies
            to succeed in today's digital world.
          </p>

          <div className="flex flex-col space-y-4">
            <p className="text-2xl font-semibold">Problem Solving</p>
            <p className="text-2xl font-semibold">Strategic Growth</p>
            <p className="text-2xl font-semibold">Enhanced Performance</p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 border border-blue-600 rounded hover:bg-blue-700 transition-colors">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
