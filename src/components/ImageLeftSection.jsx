import React from 'react';

const ImageLeftSection = ({ title, paragraph, imageSrc }) => {
  return (
    <div className="container flex flex-col-reverse md:flex-row justify-center items-center mx-auto text-white info-section">
        
      <div className="md:w-1/2 p-8">
        <img src={imageSrc} alt="Section Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-8">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className='text-xl text-gray-500'>{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageLeftSection;
