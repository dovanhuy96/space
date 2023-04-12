import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Element } from 'react-scroll';

const Portfolio = () => {
  return (
    <Element name='home' className='w-full h-screen bg-[#264b83]'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-yellow-400'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Huy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
      </div>
    </Element>
  );
};

export default Portfolio;
