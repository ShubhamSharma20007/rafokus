import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 flex gap-32  mx-auto">
        <div className="basis-1/2">
          <h1 className="text-white text-[11rem] text-center font-semibold tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2  text-zinc-500 flex gap-4 items-center">
          <div className="basis-1/3">
           <h4 className="mb-4 text-zinc-500 capitalize">Social</h4>
           {
            ['Instagram','Twitter (x ?)','Linkedin'].map((ele,i)=><h5 key={i} className="block mt-5 capitalize">{ele}</h5>)
           }
          </div>
          <div className="basis-1/3 gap-4 ">
           <h4 className="mb-4 text-zinc-500 capitalize">Social</h4>
           {
            ['Instagram','Twitter (x ?)','Linkedin'].map((ele,i)=><h5 key={i} className="block mt-5 capitalize">{ele}</h5>)
           }
          </div>

          <div className="basis-1/2 ">
           <h4 className="mb-4 text-right text-zinc-500 capitalize">
        Refokus is a pioneering  digital agency driven by design and empowered by technology
           </h4>
           <img className="mt-4 float-right" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
