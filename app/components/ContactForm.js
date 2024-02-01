"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    country:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
   // console.log('Form submitted:', formData);
    setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        country:''
      })
    // You can send the form data to an API, store in state, etc.
  };

  return (
    <div className="bg-cover bg-center mt-12" id="contact"
    style={{ backgroundImage: 'url("https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner2.jpg")' }}>
        <p className=' bg-black bg-opacity-60 text-center text-white p-4'>
      Discover your dream home with our dedicated real estate team, offering personalized guidance and expert assistance throughout your exciting journey. Fill out the Contact Us form to get started on turning your dream home into a reality
      </p>
    <div
      className="flex  items-center justify-center min-h-screen"
    >
      
      <div className="bg-white p-8   w-2/5 rounded-md shadow-md mt-12 mb-12">
        <h2 className='text-3xl font-bold mb-4 text-center'>Lets Talk</h2>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-semibold">
              Country
            </label>
            <input
              type="tel"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#006B8D]  w-full hover:bg-[#3288a3] transition-colors duration-300 py-2 text-white px-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
