import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Header({ handleChange }) {
  return (
    <header className="bg-white dark:bg-dark dark:text-white absolute left-0 right-0 z-100">
      <nav className="container  mx-auto w-full px-5 py-4 flex justify-between items-center">
        <h1 className="font-bold  md:text-2xl  text-xl">
          <span className="text-blue-500">Notes</span>
          App
        </h1>

        <div className="flex justify-between items-center gap-x-4">
          
            <BsFillMoonStarsFill className='text-xl cursor-pointer' onClick={() => handleChange()} />
          
          <button className="text-sm md:text-base border-2 border-blue-500 px-5 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            sign in
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
