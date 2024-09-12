import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      {/*--------heading section with white background------------*/}
      <div className="bg-white py-10">
        <h1 className="text-center text-blue-600 text-4xl md:text-5xl font-bold py-4">
          Contact Us
        </h1>
        <h2 className="text-center text-lg md:text-xl text-gray-700 leading-relaxed">
          Reach out to discuss how we can transform your business with tailored
          solutions and expert support.
        </h2>
      </div>

      {/*---------main content with blue background--------*/}
      <div className="bg-blue-500 py-16">
        {/* Container */}
        <div className="container mx-auto flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex-shrink-0 mb-8 md:mb-0">
            <img
              src={assets.contactus_img}
              alt="Business Support"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              We help you grow your business faster & easier.
            </h2>
            <p className="text-lg text-black mb-6">
              Partner with us to simplify the path to your success. We'll help
              you reach your business goals faster and easier than ever.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-black text-lg">
              <p>📞 +91 238809813029</p>
              <p>✉️ contact@gmail.com</p>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <button className="bg-white text-blue-500 px-6 py-3 font-semibold border border-blue-600 rounded-lg hover:bg-gray-100 transition duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
