import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
  const data = [
    {
      path: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 48,
    },
    {
      path: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 91,
    },
    {
      path: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 71,
    },
    {
      path: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 99,
    },
  ];
  return (
    <div>
    <div className="flex  items-center">
    {
        data.map((item,index)=>{
          return(
            <Stripe img={item.path} number={item.number}/>
          )
        })
      }
    </div>
    </div>
  )
}

export default Stripes
