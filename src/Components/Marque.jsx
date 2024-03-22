import { motion } from "framer-motion";
import React from "react";


const Marque = ({ imagesUrl,direction }) => {

  return (
    <div className="flex w-full relative overflow-hidden">
 

      <motion.div initial={{x:direction === "left" ? 0: "-100%"}} animate={{x:direction === "left" ?"-100%" : 0}} transition={{ease:'linear',duration:28,repeat:Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {
          imagesUrl.map((image, index) => {
            return (
              <img key={index} src={image} alt="" />
            )
          })
        }
      </motion.div>
      <motion.div initial={{x:direction === "right" ?"-100%" : 0}} animate={{x:direction === "right" ?0:"-100%"}}transition={{ease:'linear',duration:28 ,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {
          imagesUrl.map((image, index) => {
            return (
              <img key={index} src={image} alt="" />
            )
          })
        }
      </motion.div>
     
    </div>
  );
};

export default Marque;
