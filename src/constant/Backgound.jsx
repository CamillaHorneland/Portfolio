import React from "react";
import Background from "../assets/BackroundCircel.png";

const ImageBack = ({ big = true }) => {
  const overlayClass = big
    ? "h-full w-full absolute top-0 left-0 bg-white opacity-50"
    : "h-full w-full absolute top-0 left-0 bg-white opacity-50";

  return (
    <div className="">
      <img
        className="bg-cover bg-center"
        src={Background}
        alt="BackgroundCircels"
      />
      <div className={overlayClass}></div>
    </div>
  );
};

export default ImageBack;
