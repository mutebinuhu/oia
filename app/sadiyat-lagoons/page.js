"use client"
import React, {useState} from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import PropertyInfo from '../components/PropertyInfo';
import ContactForm from '../components/ContactForm';
import Form from '../components/Form';
import { FaWindowClose } from "react-icons/fa";


const Page = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='relative'>
             <Header/>
             <div className='absolute right-0 top-0 z-40 text-white'>
             {
                showForm &&
                <div className='relative h-screen md:w-screen  bg-gray-900 bg-opacity-80' style={{  
                    
                  }}>
                    <div className='absolute right-6' onClick={()=>setShowForm(false)}>
                    <div className='text-white text-3xl'><FaWindowClose /></div>
                    </div>
                    <p className='mx-12 text-center p-8'>
                    Take a moment to fill out the form below, and let's schedule a visit to explore homes that match your aspirations. Your dream home is just a few clicks away – share your details, and let's make it happen!
                    </p>
                    <Form showText={true} color="text-white "/>
                </div>
             }
             </div>
            
           {
           <div className='md:flex justify-between h-screen space-x-2  md:mx-2 relative'>
           <div className='md:w-2/5 '>
            <div className='flex items-center'>
            <h2 className='text-2xl md:mt-16'>
            Seize the moment to explore luxury at Saadiyat Lagoons—book a visit now to turn your dream home aspirations into a reality before exclusive opportunities vanish!
         </h2>
        
            </div>
            <div className='flex justify-between md:mt-12 '>
            <div onClick={()=>setShowForm(true)} className='bg-[#006B8D] text-center mt-4 hover:bg-[#3288a3] transition-colors w-48 duration-300 py-3 text-white px-4'>
                Request Tour
            </div>
            <div className='bg-[#006B8D] text-center mt-4 hover:bg-[#3288a3] transition-colors w-48 duration-300 py-3 text-white px-4'>
            <a href={`tel:${+97150205008}`}>Call Now</a>
            </div>
            </div>
            <div className='mt-4 fixed bottom-0 left-0 md:w-2/5 mx-2 '>
            <PropertyInfo bedrooms="3" bathrooms="2"  area="1000" location="sadiyat" price="1000"/>

            </div>
           
        </div>
              <div className='w-3/5'>
              <Gallery/>
              </div>
           </div>
           }
        </div>
    );
}

export default Page;
