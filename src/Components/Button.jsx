import React from 'react';
import "../index.css";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';

const Button = ({ title = "Get Started" }) => {
  return (
    <div>
      <div className="min-w-40 max-w-44 relative overflow-hidde">
        <button  className="relative main_btn bg-zinc-100 px-4 py-2 text-black rounded-full transition-colors hover:bg-orange">

          <div className="flex btn1 ab justify-between items-center gap-x-3">
            <span className="text-sm font-regular">{title}</span>
            <MdOutlineSubdirectoryArrowRight />
          </div>

        </button>
        
      </div>
    </div>
  );
};

export default Button;
