import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">About Our Blog</h2>
          <p className="text-gray-400 mt-2 text-sm max-w-sm">
            Our blog is dedicated to sharing insights, stories, and valuable information across various topics. Stay tuned for more updates!
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-3 bg-blue-800 rounded-full hover:bg-blue-900 transition">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-400 mt-2 text-sm">Email: contact@blogsite.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} BlogSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
