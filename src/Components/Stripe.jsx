import React from "react";

const Stripe = ({img,number,key}) => {
  
  return (
    <>
      <div key={key} className="w-[25%] m-0 mt-10  flex justify-between items-center py-5 px-10 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600">
        <img src={img} alt="" />
        <span className="text-semibold text-white">{number}</span>
      </div>
    </>
  );
};

export default Stripe;
