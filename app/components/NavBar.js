"use client"
import React , {useState}  from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SideNavbar from './SideNavbar';

const BigScreenNavigation = () =>{
    return(
<motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#006B8D] p-4 hidden md:block -mt-2"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">


        <Image src="/images/oia.png"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        quality={100}/>
        </div>
        <div className="">
        
         
         

         

         
        
        
          {/* Add more navigation items as needed */}
        </div>
      </div>
    </motion.nav>
    )
}


const NavBar = ({navBarState}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
    return (
        <>
         <div className="relative bg-gray-100">
      <SideNavbar isOpen={isNavbarOpen} onClose={toggleNavbar} />
      {/* Your main content goes here */}
    </div>
        <nav className='md:hidden'>
          
                <div className='p-2'>
                  <div className='text-4xl'></div>
                <div className='flex justify-between justify-center items-center'>
                <div>
                    <Image src="/images/oia.png"
                        alt="Picture of the author"
                        width={80}
                        height={80}
                        quality={100}/>
                </div>
                <div className='p-2 bg-primaryColor rounded'>
                <svg  onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-6 h-6'  viewBox="0 0 50 50">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                </svg>
                </div>
                </div>
                </div>
                <ul>

                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
        </nav>
        <BigScreenNavigation/>
        </>
    );
};

export default NavBar;