import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 13000);
  };

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-black flex flex-col justify-center items-center text-center text-3xl font-bold">
        <h1 className="relative z-20">Contact Us</h1>
        <span className="relative  before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-32"></span>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Have any questions or inquiries? Reach out to us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 w-full"
              >
                Send Message
              </button>
            </div>

            {isSubmitted && (
              <div className="flex items-center justify-center ">
                <div className="text-center p-6 bg-white rounded-lg shadow-xl max-w-md w-full">
                  <h2 className="text-2xl font-bold text-green-600">
                    Message Sent!
                  </h2>
                  <p className="text-base text-gray-600 mt-2">
                    We’ve received your message. Our team will get back to you
                    shortly.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right side: Product Showcase (Interactive Image or Carousel) */}
        <div className="flex-1 space-y-6 lg:space-y-0 relative top-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/C4D12AQHC3fMFzfsDNQ/article-cover_image-shrink_720_1280/0/1594648514878?e=2147483647&v=beta&t=oo0KM2beqEP9QBUGgs-artuGdK2W6iBqQBedL2SKS4c"
              alt="Featured Product"
              className="w-full h-96 object-cover hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Need Help? Call Us!
              </h3>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <FaPhoneAlt className="text-2xl" />
                <span className="text-xl">+1 (234) 567-890</span>
              </div>
              <p className="text-gray-600 mt-4">
                You can also reach us by phone if you prefer speaking to a
                representative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
