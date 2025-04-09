import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden text-white bg-black">
      <Navbar />
      <div className="flex items-center justify-center flex-grow w-full">
        <div className="container items-center justify-center px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:text-left lg:gap-20 lg:items-center lg:px-[15%]">
            
            <div className="flex-1">
              <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                Hello<span className="text-amber-500">.</span>
                <br />
                I am
                
                Jefin 
              </h1>
            </div>

            <div className="flex-1 text-xl font-semibold text-amber-500">
              Full Stack Developer <br />
              ML Enthusiast <br />
              Future SDE 
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page