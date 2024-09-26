import React from 'react';
import Gallery from './Gallery';
import Services from './Services';
import Elevators from './Elevators';
import Videos from './Videos';
import Contactus from './Contactus';

function Home() {
  return (

    <div className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="carousel-item active mb-2">
          <img src="https://image1.jdomni.in/banner/27052022/E7/88/0B/2E51E4F8667EE8B487697EB465_1653629856584.png?output-format=webp" className="w-full" alt="First slide" />
          <div className="absolute bottom-0 left-0 p-4   text-black h-4/6 min-w-96 text-center align-middle">
            <p className="text-2xl leading-loose " style={{fontSize:"30px"}}>Providing Top Quality</p>
            <h1 className="text-3xl font-bold" style={{fontSize:"40px"}}> Elevator Services </h1>
          </div>
        </div>
      </div>
    
    <Services  />
    <Elevators />
<Gallery />
<Videos />
<Contactus />
    </div>
  );
}

export default Home;
