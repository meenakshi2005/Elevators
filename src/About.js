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

            <p className="text-xl p-1  lg:mt-6 mb-12 px-20 text-justify lg:leading-normal  w-full  text-white  ">
              The Sychology Elevator project is focused on exploring the
              intersection of psychology and technology, aiming to elevate
              mental wellness through innovative solutions. It seeks to create
              tools or platforms that help individuals better understand and
              manage their psychological health.
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
                Sychology Elevator is a cutting-edge platform aimed at
                revolutionizing the way individuals approach mental well-being
                and personal growth. Our mission is to bridge the gap between
                mental health awareness and actionable insights by providing a
                seamless, user-friendly interface for learning, self-reflection,
                and professional support. Whether you are seeking to elevate
                your own mental resilience or foster a supportive community,
                Sychology Elevator provides the tools and resources to guide you
                on your journey to well-being.
              </p>
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
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-8">
            <div class="mt-12 md:mt-0 ">
              <img
                className="w-full h-auto rounded"
                loading="lazy"
                src="New.jpg"
                alt="About 1"
              />
            </div>
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Vision
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                To be a global leader in mental health innovation by empowering
                individuals to elevate their mental wellness through accessible
                education, self-care practices, and professional guidance. We
                envision a world where mental health is prioritized,
                destigmatized, and integrated into every aspect of daily life.
              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more vision
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-12">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Mission
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Our mission is to promote mental health awareness and foster a
                community of growth by providing a platform where users can
                access tools, resources, and professional support for their
                mental well-being. Through Sychology Elevator, we aim to:
              </p>
              <p class="mt-4 text-gray-600 text-lg">
              Equip individuals with knowledge and skills for maintaining mental resilience.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
              Create a supportive environment for sharing experiences and learning.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
              Enhance access to mental health professionals and services through innovative technology.

              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more mission
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
