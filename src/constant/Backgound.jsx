import React from "react";
import Background from "../assets/BackroundCircel.png";

const ImageBack = ({ big = true }) => {
  const overlayClass = big
    ? " bg-white opacity-50"
    : " bg-white opacity-50";

  return (
    <>
      <div
        className="h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
      />
      <div className={overlayClass} />
    </>
  );
};

export default ImageBack;








