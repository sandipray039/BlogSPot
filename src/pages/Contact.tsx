import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/blog-theme-bg.jpg')" }}></div>
      
      {/* Page Header */}
      <div className="w-full max-w-5xl text-center py-10 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        <p className="text-lg mt-2 text-gray-300">We’d love to hear from you! Reach out to us with any queries.</p>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 bg-opacity-90 shadow-2xl rounded-lg p-8 relative ">
        {/* Contact Form */}
        <div className="animate-slide-in-left">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full p-3 border border-gray-600 rounded-lg h-32 bg-gray-700 text-white focus:ring focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300 animate-pulse">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info & Socials */}
        <div className="animate-slide-in-right flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">Email: contact@blogsite.com</p>
          <p className="text-gray-300 mb-6">Phone: +123 456 7890</p>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default Contact;
