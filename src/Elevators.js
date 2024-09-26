import React from 'react'

const Elevators = () => {
  return (
<div className="" style={{marginTop:"-10px",backgroundImage:"linear-gradient(#f5f2f0, #f7f6f5)"}}>
      <h2 className="text-start px-24 p-4 text-2xl font-bold leading-tight text-black ">
      Elevators
      </h2>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {/* {Array.from({ length: 4 }).map((_, i) => ( */}
        <div  className="rounded-md border">
          <img
            src="th.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4 rounded-none">
            <p className="mt-3 text-lg rounded-lg text-gray-600 text-center">
             Car Elevators
            </p>
          </div>
           {/* <div className="w-full">
      <video controls>
        
        <source className='md:h-[100px] lg:h-[100px]' src="liftvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> */}
        </div>
        <div  className="rounded-md border">
          <img
            src="Home.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4 rounded-none">
            <p className="mt-3 text-lg rounded-lg text-gray-600 text-center">
           Home Elevators
            </p>
          </div>
        </div>
        <div  className="rounded-md border">
          <img
            src="open_lift.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4 rounded-none">
            <p className="mt-3 text-lg rounded-lg text-gray-600 text-center">
            Passenger Elevators
            </p>
          </div>
        </div>
        <div  className="rounded-md border">
          <img
            src="PVE_7.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4 rounded-none">
            <p className="mt-3 text-lg rounded-lg text-gray-600 text-center">
              Lorem ipsum 
            </p>
          </div>
        </div>
      {/* ))} */}
    </div>
    </div>
  )
}
export default Elevators;