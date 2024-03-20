import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
const Button = ({title="Get Started"}) => {
  return (
    <div>
        <div className="min-w-40 max-w-44 flex justify-between items-center gap-x-3 bg-zinc-100 px-4 py-2 text-black rounded-full">
            <span className='text-md font-regular'>{title}</span>
            <MdOutlineSubdirectoryArrowRight />
        </div>
    </div>
  )
}

export default Button
