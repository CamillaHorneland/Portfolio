import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white h-38 flex flex-col items-center justify-center p-4 text-black">
      <div className="m-3 mb-4">
        <Link to="/contact">Contact me</Link>
      </div>
      <div className="text-right m-3 mb-5">
        &copy; {new Date().getFullYear()} Portfolio Camilla Horneland.
      </div>
    </div>
  );
}

export default Footer;
