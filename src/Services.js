import React from 'react'

const Services = () => {
  return (
    <div className="mt-2 p-4" style={{backgroundImage:"linear-gradient(#f5f2eb, #f7f6f5, #f5f2f0)",marginTop:"-20px"}}>
      <h2 className="text-start p-4 px-24 text-2xl font-bold leading-tight text-black mt-2">
      Services
      </h2>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
      {/* {Array.from({ length: 4 }).map((_, i) => ( */}
        <div className="rounded-md ">
          <img
            src="approach.png"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Construction Consultants</h1>
            <p className="mt-3 text-sm text-gray-600">
            Our company has the best construction consultants that provide guidance throughout the construction process. 
            </p>
            {/* <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
        <div className="rounded-md border">
          <img
            src="Passenger-Lift-1024x692.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Elevator Consultants</h1>
            <p className="mt-3 text-sm text-gray-600">
            Our company has the best construction consultants that provide guidance throughout the construction process. 
            </p>
            {/* <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
        <div className="rounded-md border">
          <img
            src="th.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Elevator Repair & Services</h1>
            <p className="mt-3 text-sm text-gray-600">
            We provide elevator goods repair and other services related to it for it to function appropriately. 
            </p>
            {/* <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
        <div className="rounded-md border">
          <img
            src="ser.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Elevator Repair & Services</h1>
            <p className="mt-3 text-sm text-gray-600">
            With the help of trusted and skilled professionals, we offer the best repairing services for elevators.
            </p>
            {/* <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
       
      {/* ))} */}
    </div>
    </div>
  )
}
export default Services;