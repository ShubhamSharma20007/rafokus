import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({width,start,para , hover=false}) => {
  return (

    <motion.div whileHover={{backgroundColor:hover ? '#7443ff' :"#5555",padding:'20px'}} transition={{ease:[0.61, 1, 0.88, 1],duration:.2}} className={`gap-5 bg-zinc-800  transition-all  p-5 rounded-xl w-full md:mx-0 mx-5 my-2 md:${width} min-h-[28rem] flex flex-col justify-between`}>
      <div className="w-full">
      <div className=" text-white justify-between flex items-center">
       <p> One Handling</p>
       <FaArrowRightLong />
      </div>
      <h1 className='text-3xl font-medium text-white mt-[3vw]'>whatever headling.</h1>
      </div>
      <div className="w-full down text-white">
    {
      start &&
      (<>
      <h1 className='text-6xl font-bold tracking-tighter leading-none'>Start a project</h1>
    <button className='rounded-full py-2 px-5 border-[1px]  border-zinc-50 mt-[15vw] md:mt-[5vw]'>Contact Us</button>
      </>)
    }
     {
      para && 
      ( <p className='text-small font-medium mt-[2vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos ea? Rem consectetur adipisci deserunt debitis, nam sit quas magnam.</p>)
     }
      </div>
      </motion.div>

  )
}

export default Card
