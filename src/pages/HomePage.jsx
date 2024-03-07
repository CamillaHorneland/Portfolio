import React from 'react';
import { Link } from 'react-router-dom';
import Hi from "../components/home/HomeHi";
import Name from "../components/home/HomeName";
import Info from "../components/home/HomeInfoMe";
import ProfileImage from "../assets/Profileimage.jpg";

function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row justify-center mb-20 z-30">
      <div className='w-full sm:w-1/2 text-center sm:mt-0 mt-20 mb-20 sm:pt-0 pt-20'>
        <Hi />
        <Name />
        <Info />
		    <Link to="/projects" className="text-gray-500 py-3 px-10 mt-20 rounded bg-pink-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink-300 before:duration-500 before:ease-out hover:shadow-pink-500 mb-20">
          My work
        </Link>
      </div>
      <div className='w-full sm:w-1/2 flex items-center justify-center mb-10'>
        <img src={ProfileImage} alt="Profile image" className="h-64 m-10" />
      </div>
    </div>

  );
}

export default HomePage;

