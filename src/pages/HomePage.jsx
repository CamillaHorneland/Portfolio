import React from 'react';
import { Link } from 'react-router-dom';
import Hi from "../components/home/HomeHi";
import Name from "../components/home/HomeName";
import Info from "../components/home/HomeInfoMe";
import ProfileImage from "../assets/Profileimage.jpg";

function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div className='w-full sm:w-1/2 text-center mb-4 sm:mb-0'>
        <Hi />
        <Name />
        <Info />
		<Link to="/projects" className="bg-pink-200 text-grey-500 py-3 px-10 rounded hover:bg-purple-200 hover:text-gray-800 mt-4 inline-block">
          My work
        </Link>
      </div>
      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <img src={ProfileImage} alt="Profile image" className="h-72 m-10 " />
      </div>
    </div>
  );
}

export default HomePage;

