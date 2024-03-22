import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      top: "53%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "46%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1621690260995-13b89b66bb3f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollY, scrollYProgress } = useScroll();



 scrollYProgress.on("change",(latest)=>{
  const scrollY = Math.floor(latest *100)
  function imageShow(arr){
    setImages(prev=>(
      prev.map((image,index)=>{
          return(
            {...image,isActive:arr.includes(index)}
          )
      })
    ))
  }

  switch(scrollY){
    case 1:
      imageShow([])
      break;
      case 2:
        imageShow([0,1])
        break;
        case 3:
          imageShow([0,1,2])
          break;
          case 4:
            imageShow([0,1,2,3])
            break;
            case 5:
              imageShow([0,1,2,3,4])
              break;
              
  }
 })

  return (
    <>
      <div className="w-full md:h-[100vh] h-screen bg-[#000000]">
        <div className="relative max-w-screen-lg m-auto h-full flex justify-center items-center"  >
          <h1 className=" text-[30vw]  md:text-[30vw] text-center text-white font-medium">
            Work
          </h1>
          <div className="absolute w-full h-full md:block   top-0 ">
            {images.map((image, index) => {
              return (
                image.isActive && (
                  <img
                    key={index}
                    className="absolute w-60 rounded-md -translate-x-[50%] -translate-y-[50%]"
                    style={{ top: image.top, left: image.left }}
                    src={image.url}
                    alt=""
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
