import React  from "react";
import {Link} from 'react-router-dom';
import { Search} from 'lucide-react';
import blackcircle from '../assets/blackcircle.png'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="bg-white flex justify-end px-4 py-2">
        <Link to= '/signup' className="text-black font-medium">Sign up</Link>
      </div>
      <hr className="border-1" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 gap-4">
          <img src={blackcircle} alt="nike logo" className="w-10 lg:w-12" />
          <h4 className="font-mono">ThinkCode</h4>
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-6">
              <li className="hover:text-gray-600 cursor-pointer">HOME</li>
              <li className="hover:text-gray-600 cursor-pointer">SHOP</li>
              <li className="hover:text-gray-600 cursor-pointer">
                LATEST COLLECTION
              </li>
              <li className="hover:text-gray-600 cursor-pointer">
                LIMITED EDITION
              </li>
            </ul>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full lg:w-auto">
              <input
                type="search"
                className="border rounded-full pl-9 px-4 py-1 w-full"
                placeholder="What are you looking for"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <div className="flex space-x-4">
              <i className="ri-shopping-cart-line text-2xl cursor-pointer"></i>
              <i className="ri-user-3-line text-2xl cursor-pointer"></i>
              <i className="ri-heart-line text-2xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
