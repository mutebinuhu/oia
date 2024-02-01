"use client"
import React from 'react';
import { motion } from 'framer-motion';

const urls = [
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner1.jpg",
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner2.jpg",
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner3.jpg"
]

const Gallery = () => {
  const images = Array.from({ length: 2 }, (_, index) => ({
    id: index + 1,
    src: `https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner${index+1}.jpg`,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className='md:flex justify-between h-screen space-x-4 mx-4'>
        <div className=''>
        <div className='w-full mt-3 mb-3'>
      <motion.img  whileHover={{ scale: 1.05 }} className="w-full rounded-lg h-72 bg-cover object-cover" src={`https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner3.jpg`}  alt="saadiyat"  />
      </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {images.map((image) => (
        <motion.div
          key={image.id}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-lg shadow-md hover:shadow-lg"
        >
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </motion.div>
      ))}
      
    </div>
   
        </div>
    </div>
  );
};

export default Gallery;
