"use client"

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: ' Amy Tinkler',
    review: "OIA properties just helped us purchase our new home this fall. We’ll definitely be using them again"
    
  },
  {
    id: 2,
    name: 'Dan Orman',
    review:"OIA  exceeded every possible expectation in helping me purchase a new construction townhome here in Abudhabi. In an uncertain and volatile housing market, Kelsey adeptly navigated me through every step of the process; whether it was finding the perfect location that met my needs as a buyer, referring me to local partners, routing contracts and legal documents, or providing thoughtful consultation on any question I may have had along the way.",
  },
  {
    id: 3,
    name: 'Alice Johnson',
    review:"OIA Properties is both passionate and knowledgeable about the quality of life and work in downtown Raleigh. Their devotion is evident in their work. I was extremely pleased with the advice, representation and follow through of the OIA team in the purchase and sale of my personal home."
  },
];

const Testimonials = () => {
  return (
    <>
    <h2 className="text-3xl font-bold mb-4 text-center  mt-10 ">CUSTOMER PRAISES</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-md shadow-md"
        >
          <p className="text-gray-600 mb-4">{testimonial.review}</p>
          <p className="font-semibold">{testimonial.name}</p>
        </motion.div>
      ))}
    </div>
    </>
  );
};

export default Testimonials;
