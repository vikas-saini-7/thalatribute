// Hero.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-black text-white min-h-screen hero">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-black mb-4">
          <Typewriter
            words={["1+1+1+1+1+1+1=7","Thala for a Reason", "MS Dhoni", ]}
            typeSpeed={80}
            cursor
            loop={0}
            delaySpeed={3000}
          />
        </h1>
        
        {/* <p className="text-lg md:text-xl">CAPTAIN &nbsp; 1+1+1+1+1+1+1</p> */}
        <p  className="text-lg md:text-xl">A cool tribute to captain cool.</p>
    </div>
  );
};

export default Hero;
