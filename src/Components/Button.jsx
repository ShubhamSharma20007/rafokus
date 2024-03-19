import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
const Button = () => {
  return (
    <div>
        <div className="min-w-40 flex justify-between items-center gap-x-3 bg-zinc-100 px-4 py-2 text-black rounded-full">
            <span className='text-md font-regular'>Get Started</span>
            <MdOutlineSubdirectoryArrowRight />
        </div>
    </div>
  )
}

export default Button
