import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";


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
      case: true,
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
      case: true,
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
          <motion.div animate={{y:position+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  initial={{y:0,x:'-50%'}} className="overflow-hidden window w-[25rem] absolute left-[43%]  h-[20rem] bg-sky-300 ">
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}} animate={{y:-position+"rem"}} tra className="window w-full  h-full bg-sky-800"></motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-sky-200"></motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-sky-800"></motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-orange-800"></motion.div>
            <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}  animate={{y:-position+"rem"}} className="window w-full  h-full bg-sky-800"></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
