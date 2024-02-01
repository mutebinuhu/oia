"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Form from './Form';
import Explore from './Explore';
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '800px'
  }
  const slideImages = [
    {
      url: 'https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner1.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner2.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner3.jpg',
      caption: 'Slide 3'
    },
  ];
const Slider = () => {
  return (
    <div className='block md:flex  justify-between '>
      
  
    <div className="slide-container w-full  md:w-2/3">

    <Slide>

     {slideImages.map((slideImage, index)=> (
        <div key={index}>
            
          <div class="bg-indigo-300 relative">
            <div className='absolute md:top-24  w-3/5 p-4'>
            <p className='text-white md:text-3xl bg-black bg-opacity-60'>"Discover your dream home – start your journey with us today, where every click brings you one step closer to your perfect property!"</p>
            <div className='md:mt-10'>
            <Explore/>
            </div>

            </div>
             <img src={slideImage.url} class="object-cover  w-screen" />

         </div>

          </div>
      ))} 
    </Slide>

  </div>
  <div className='w-full md:w-1/3 md:mx-4 h-full'>
            <Form/>
            
        </div>
  </div>
  );
};

export default Slider;
