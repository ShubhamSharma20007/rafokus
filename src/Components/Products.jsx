import React from 'react'
import Product from './Product'

const Products = () => {
    const data=[
        {name :'Artical', para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",live:true,case:true},
        {name :'Roman', para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." ,live:true,case:false},
        {name :'Axiwell', para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." ,live:true,case:false},
        {name :'Zinx', para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." ,live:true,case:true},
        {name :'Xenon', para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." ,live:true,case:false},

    ]
  return (
    <div>
     <div className="mt-[8vw]">
       
     {
        data.map((item,index)=>{
          return <Product hasCase={item.case} live={item.live}  name={item.name} para={item.para}  key={index}  />  
        })
     }
     </div>
    </div>
  )
}

export default Products
