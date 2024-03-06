import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col items-center h-48 ">
      <div className="m-3 m-5 text-gray-500">
        <Link to="/contact" className="hover:font-bold hover:cursor-pointer">
          Get in touch</Link>
      </div>
      <div className="m-3 m-5 text-center text-pink-300">
        &copy; {new Date().getFullYear()} Portfolio Camilla Horneland.
      </div>
    </div>
  );
}

export default Footer;
