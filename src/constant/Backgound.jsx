import React from "react";
import Background from "../assets/BackgroundCircle.png";

const ImageBack = ({ big = true }) => {
  const overlayClass = big
    ? "inset-0 bg-white opacity-20"
    : "inset-0 bg-white opacity-50"; 

  return (
    <>
      <div
        className=" sm:h-[60vh] h-[90vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
      />
      <div className={overlayClass} />
    </>
  );
};

export default ImageBack;








