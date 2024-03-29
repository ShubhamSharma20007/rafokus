import React from "react";
import Button from "./Button";

const Product = ({ name, para, live, hasCase,moverFunc,index }) => {
  return (
    <div>
      <div className="w-full py-5 md:px-5 text-white h-[20rem] " onMouseEnter={()=>moverFunc(index)}>
        <div className="max-w-screen-lg mx-auto flex justify-around md:justify-between  items-center ">
          <h1 className="text-4xl  font-regular">{name}</h1>
          <div className="dets w-1/3">
            <p className="mb-8 tracking-wide">{para}</p>
            <div className="flex items-center gap-7">
            {live && <Button />}
            {hasCase && <Button  title="Case Study"/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
