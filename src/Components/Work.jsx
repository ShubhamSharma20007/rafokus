import React from 'react'

const Work = () => {
    const images= [
        {url:"https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:'50%',left:'50%',isActive:true},
        {url:"https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",top:'53%',left:'48%',isActive:false},
        {url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:'47%',left:'52%',isActive:false},
        {url:"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:'51%',left:'49%',isActive:false},
        {url:"https://images.unsplash.com/photo-1621690260995-13b89b66bb3f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:'53%',left:'53%',isActive:false},

    ]
  return (
    <div>
      <div className="w-full">
        <div className="relative max-w-screen-lg mx-auto">
            <h1 className=' tracking-normal
             text-[30vw] text-center text-white font-medium'>Work</h1>
          <div className='h-52 w-44 absolute  '> 
          <div className="absolute top-0 w-full h-full">
            {
                images.map((image,index)=>{
                    return(
                        <img className=' absolute 2-60 rounded-lg'></img>
                    )
                })
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
