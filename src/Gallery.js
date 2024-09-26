import React from "react";

function Gallery() {
  return (
    <div className="mt-0 p-2"style={{backgroundImage:"linear-gradient(#f7f6f5, #f5f2f0)",marginTop:"-10px"}} >
      <h2 className="text-start px-24 text-2xl font-bold leading-tight text-black my-1.5">
        Gallery
      </h2>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {/* {Array.from({ length: 8 }).map((_, i) => ( */}

        <div className="rounded-md border">
          <img
            src="Passenger-Lift-1024x692.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="pressing.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="lift.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="home-lift.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="img1.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="img2.jpeg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="automatic.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
        <div className="rounded-md border">
          <img
            src="Glass_lift.jpg"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
