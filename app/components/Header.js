import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white border-b-2 border-gray-100 bg-[#006B8D] p-3">
      <div className="flex justify-between">
        <div className="">
          <div class="">
            <span className=""></span>
          </div>
         
          <div className="flex space-x-3 text-primaryColor ">
          <div className="text-sm">
          <li  className="fas fa-mobile  fa-2x"></li>
          </div>
            <a href="tel:+971502050089">
            <div className="text-xs font-bold text-primaryColor rounded-lg px-2">
            +971502050089
            </div>
            </a>
          </div>
          
        </div>

        <div class="">
          <ul className="flex">
           
            <div>
          

              <Link href="#" className="inline">
              
                  <i className="mx-2 text-primaryColor  text-sm fab fa-facebook-f"></i>
                
              </Link >

              <Link  href="#" className="inline">
                  <i className="mx-2 text-primaryColor  text-sm fab fa-twitter"></i>
              </Link >
              <Link href="#"  className="inline">
                  <i class="mx-2 text-primaryColor  text-sm fab fa-instagram"></i>
              </Link >
              
              {/** <!--<li><a href="#"><i class="fab fa-vimeo-v"></i></a></li> */}
              < Link  href="#" className="inline">
                  <i class=" mx-2 text-primaryColor  text-sm  fab fa-linkedin"></i>
              </Link >
              <Link href="#" className="inline">
                  <i class=" mx-2  text-primaryColor  text-sm  fab fa-youtube"></i>
              </Link >
              <Link href="#" className="inline">
                  <i class=" mx-2  text-primaryColor  text-sm  fab fa-tiktok"></i>
              </Link >
              
            </div>
           
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
