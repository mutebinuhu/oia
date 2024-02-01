"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TextArea = ({ label, placeholder, value, onChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor="textarea" className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
        <textarea
          id="textarea"
          name="textarea"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };

  
  

       

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone:'' });
  const [errors, setErrors] = useState({ name: '', email: '',  phone:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      valid = false;
    }
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      valid = false;
    }

    // Proceed with form submission if valid
    if (valid) {
      // Handle form submission logic (e.g., API request)
      console.log('Form submitted:', formData);
      setFormData({
        name: '', email: '', phone:''
      })
    }
  };
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };


  return (
    <motion.div initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=''
    >
     <div className='text-md text-gray-500 mt-2 mx-2'>
            <p>Unlock your dream home with exclusive listings, personalized alerts, and expert market insights <br/> – sign up now</p>
        </div>
    <motion.form
      
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
       
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Phone:
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      

      <button
        type="submit"
        className="bg-[#006B8D] text-white px-4 py-2 rounded w-full hover:bg-[#3288a3] transition-colors duration-300"
      >
        Submit
      </button>
    </motion.form>
    </motion.div>
  );
};

export default Form;
