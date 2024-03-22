import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/video/Silvr.webm"
import video2 from "../assets/video/Maniv-Compressed.mp4"
import video3 from "../assets/video/people-short.webm"
import video4 from "../assets/video/TTR project video 4_3_H.264.webm"
import video5 from "../assets/video/webflow-education-promo.mp4"
const Products = () => {

  const [position, setPosition] = useState(0);


  const dynamicallyPosition =(val)=>{
      setPosition(val * 20)
  }
  

 

  const data = [
    {
      name: "Artical",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      live: true,
      case: false,
    },
    {
      name: "Roman",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      live: true,
      case: false,
    },
    {
      name: "Axiwell",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      live: true,
      case: false,
    },
    {
      name: "Zinx",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      live: true,
      case: false,
    },
    {
      name: "Xenon",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      live: true,
      case: false,
    },
  ];

  return (
    <div>
      <div className="mt-[8vw] relative">
        {data.map((item, index) => {

          return (
            <Product
              moverFunc ={dynamicallyPosition}
              hasCase={item.case}
              live={item.live}
              name={item.name}
              para={item.para}
              index={index}
              key={index}
            />
          );
        })}
        <div className="w-full h-full absolute pointer-events-none top-0">
          <motion.div animate={{y:position+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  initial={{y:0,x:'-50%'}} className=" overflow-hidden window w-[25rem] absolute left-[43%]  h-[20rem]  ">
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}} animate={{y:-position+"rem"}}  className="window w-full  h-full">
                <video src={video1} autoPlay muted loop  className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full ">
            <video src={video2} autoPlay muted loop  className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full h-full">
            <video src={video3} autoPlay muted loop  className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-orange-800">
            <video src={video4} autoPlay muted loop  className="h-full w-full object-cover"></video>
            </motion.div>
            
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-sky-800">
            <video src={video5} autoPlay muted loop  className="h-full w-full object-cover"></video>
            </motion.div>
         
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
