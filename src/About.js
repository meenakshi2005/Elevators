import React from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    // About 1 - Tailwind CSS Brain Component
    <div className=" w-full">
      <div className=" w-full">
        <div className="carousel-item h-screen active mb-2 text-center align-center ">
          <img
            src="Lift (1).jpg"
            className="w-full h-screen object-cover filter brightness-50"
          
            alt="First slide"
          />
         
          {/* <div className="absolute inset-x-[2%] bottom-5  py-5 text-center text-white md:block"> */}
          <div
            className="
  absolute 
  bottom-0 
  left-0 
  text-black 
  w-full 
  text-center 
  align-center
  h-4/5          
  md:h-3/4    
  lg:h-4/6
"
          >
            <p className="text-3xl leading-loose text-white font-bold  ">
              About Sychology Elevators
            </p>

            <p
              className="text-xl p-1  lg:mt-6 mb-12 px-20 text-justify lg:leading-normal  w-full  text-white  "

            >
              Sychology Elevators introduces the world’s leading home elevators
              and stairlifts to the Indian market, focusing on superior mobility
              solutions. Their products aim to enhance accessibility, especially
              for the elderly and those with mobility challenges, ensuring
              comfort and convenience at home. With a commitment to quality and
              safety, they offer cutting-edge designs that meet international
              standards. Sychology Elevators is dedicated to improving home
              transportation systems across India. Their solutions are reliable,
              efficient, and built to elevate daily living experiences.
            </p>
            <a href="/contactus">
              <button
                type="button"
                className="rounded-md text-medium mt-4 bg-white  bg-slate-200 px-6 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </a>
          </div>
        
        </div>
      </div>
      <section
        class="bg-gray-200 "
        style={{ backgroundImage: "linear-gradient(#f7f6f5, #f5f2f0)" }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                An Indian home elevator company headquartered in Chennai, Tamil
                Nadu, Elite Elevators opened its doors for business in 2013.
                Armed with a dream to introduce high-end, safety-certified and
                genuine home elevators to Indian residences, we partnered with
                TK Access Solutions, Germany, a world-leading manufacturer of
                home elevators to make this dream a reality. TK Access
                Solutions’ German-engineered and Italian-made home elevators
                have earned multiple international accolades and recognition for
                their performance, design and safety aspects. Joining our
                exclusive range is our first flagship product, developed and
                manufactured in-house after extensive research.
              </p>
              {/* <p class="mt-4 text-gray-600 text-lg">Our home lifts personify luxury//\ in its purest form, enabling homeowners across India to experience comfort par excellence daily. Our elevator technology is one of the best globally with some models even being the first in the world to carry such coveted technology. In other words, you’ll need to buy an Elite home elevator to access this revolutionary technology. Elite Elevators has 20+ locations within the country, including regional offices and an exclusive chain of experience centres. Beyond Indian shores, we’ve set up operations in the UAE, Malaysia and Australia.</p> */}

              <div class="mt-8">
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                className="w-full h-auto rounded"
                loading="lazy"
                src="New.jpg"
                alt="About 1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
