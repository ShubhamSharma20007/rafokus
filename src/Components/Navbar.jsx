import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <div className="border-b-[1px] px-5 md:px-5 lg:px-5 border-zinc-700 max-w-screen-lg mx-auto py-6 flex items-center justify-between">
        <div className="flex">
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className="links  gap-14 ml-20 hidden md:hidden xl:flex">
            {["Home", "Work", "Culture", "", "News"].map((ele, index) => {
              return (
                <a key={index} className="text-sm flex items-center gap-1 text-white" href="">
                  {ele.length === 0 ? <span key={index} className="w-[0.1px] h-8 bg-zinc-700"></span> : ""}
                  {index === 1 && (
                    <span key={index} style={{ boxShadow: '0 0 0.45rem #00FF19' }} className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                  {ele}
                </a>
              )
            })}
          </div>
        </div>
        <div className='hidden md:block'>
        <Button>sad</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar
