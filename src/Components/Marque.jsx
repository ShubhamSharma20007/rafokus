import React from "react";

const Marque = ({ imagesUrl }) => {
  return (
    <div className="flex py-7 w-full  gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrl.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className=" w-[9vw] flex-shrink-0 " />
      ))}
       {imagesUrl.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="  w-[9vw] flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marque;
