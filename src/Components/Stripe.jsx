import React from "react";

const Stripe = ({img,number,index}) => {
  
  return (
    <>
      <div  className="w-full md:w-[25%] m-0 mt-10  flex justify-between items-center py-5 px-10 border md:border-t-[1px] md:border-b-[1px] md:border-r-[1px] border-zinc-600">
        <img src={img} alt="" />
        <span className="text-semibold text-white">{number}</span>
      </div>
    </>
  );
};

export default Stripe;
