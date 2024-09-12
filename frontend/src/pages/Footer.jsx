import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* First Division - About Imeleo */}
        <div className="mr-4 ">
          <h2 className="text-4xl font-bold mb-4 mr-4">Imeleo</h2>
          <p className="text-lg font-semibold mb-2">Business Software</p>
          <p className="text-lg">Solutions and Services</p>
        </div>

        {/* Second Division - Useful Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Why Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Third Division - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Web App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                IT Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Custom Software
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Cloud Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Data Engineering
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Division - Solutions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Content Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Employee Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Vehicle Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Lead Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Inventory Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Hospital Management
              </a>
            </li>
          </ul>
        </div>

        {/* Fifth Division - Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-lg">📞 +91 238809813029</li>
            <li className="text-lg">✉️ contact@imeleo.com</li>
            <li className="text-lg">🏢 123 Business Street</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-400 pt-6">
        <p className="text-sm">&copy; 2024 Imeleo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
