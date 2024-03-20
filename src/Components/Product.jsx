import React from 'react'
import Button from './Button'

const Product = ({name,para}) => {
  return (
    <div>
        <div className="w-full py-5 text-white">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center ">
                <h1 className='text-4xl  font-regular'>{name}</h1>
                <div className='dets w-1/3'>
                  <p className='mb-8 tracking-wide'>{para}</p>
                 <div>
        
                <Button/>
              
                 </div>
                </div>

            </div>
        </div>
 
    </div>
  )
}

export default Product
