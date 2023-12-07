// ParallaxSlides.js

import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxSlides = () => {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        {/* Main Heading slide  */}
        <ParallaxBanner
          className="p-slide-1"
          layers={[
            {
              image: 'https://miro.medium.com/v2/resize:fit:1066/1*q6Ercp4ekLQrKsApLhGvcw.jpeg',
              amount: 0.3,
              speed: -20,
            },
          ]}
          style={{
            height: '500px',
          }}
        >
          {/* Content for the main slide */}
          <div className="slide-content">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 px-8">Story of The Best Captain in the world</h1>
            <p className="text-lg md:text-xl">— by Vikas Saini</p>
          </div>
        </ParallaxBanner>

        {/* Subslides start from here  */}
        {/* <ParallaxBanner
          className="your-slide-class"
          layers={[
            {
              amount: 0.3,
            },
          ]}
          style={{
            height: '500px',
          }}
        > */}
          {/* Content for the second slide */}
          {/* <p>here content </p> */}
          {/* <ImageRightSection imageSrc='https://www.icccricketschedule.com/wp-content/uploads/2021/10/MS-Dhoni-playing-for-India.jpg' title="This is heading" paragraph="Para goes here..."/>
        </ParallaxBanner> */}


        {/* End of slides  */}
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxSlides;
