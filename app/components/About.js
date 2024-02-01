"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Button= ({name}) =>{
    return(
        <button className='hover:text-white hover:bg-[#3288a3] mt-10 mx-7 text-3xl font-light transition-colors duration-300 py-2 border border-gray-900 px-2'>
            {name}
        </button>
    )
}
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto w-3/5  text-center mt-8 p-6 bg-white "
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Who we are</h2>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to OIA, where dreams find a place to call home. With a passion
        for connecting people with their perfect homes, we go beyond transactions, creating
        experiences that last a lifetime. Our dedicated team of real estate experts is
        committed to turning your property aspirations into reality. Join us on this exciting
        journey, and let's embark on a personalized and seamless home-finding experience together.
      </p>
      <p className="text-gray-700 text-lg">
        At OIA, it's not just about properties; it's about crafting stories and
        building futures.
      </p>
      <p className="text-gray-700 text-lg">
      Discover the difference with us today.
      </p>
      <div className=' text-center mt-8'>
      <Button name="Let's Buy"/>
      <Button name="Let's Sell"/>
      </div>
    </motion.div>
  );
};

export default AboutUs;
