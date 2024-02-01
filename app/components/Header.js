"use client"
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion"
import Image from "next/image";



const Header = ({inquire}) => {

    const [showInquire, setShowInquire] = useState(false)

  return (
    <header className="text-white border-b-2 border-gray-100 bg-[#006B8D] p-3">
      <div className="">
        <ul className="flex justify-between items-center">
            <li className="border px-4 rounded py-3 hover:bg-[#3288a3] " onClick={()=>setShowInquire(true)}><a href="#contact">INQUIRE + </a></li>
            <li> 
                <Image src="/images/oia.png"
                        alt="Picture of the author"
                        className="w-48 h-24"
                        width={100}
                        height={100}
                        quality={100}/>
            </li>
            <li className="bg-white p-3">
            <svg   xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-6 h-6'  viewBox="0 0 50 50">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                </svg>
            </li>
        </ul>
        
      </div>
    </header>
  );
};
export default Header;
