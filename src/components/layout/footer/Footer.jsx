import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col items-center text-grey-200  h-48 ">
      <div className="m-3 m-4">
        <Link to="/contact">Contact me</Link>
      </div>
      <div className=" m-3 m-5">
        &copy; {new Date().getFullYear()} Portfolio Camilla Horneland.
      </div>
    </div>
  );
}

export default Footer;
