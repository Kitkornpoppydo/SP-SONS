import React, { useEffect } from 'react';
import banner from '../assets/benner/bannery.jpg';
import blog from '../assets/blog.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({ 
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section 
      id='hero' 
      className='w-full lg:px-20 px-10 lg:py-20 py-8 lg:h-screen h-fit dark:bg-slate-700 dark:bg-transparent flex flex-col lg:flex-row justify-between items-center bg-cover bg-center gap-10'
      style={{
        backgroundImage: `url(${blog})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col justify-center items-start gap-6 lg:w-[60%] w-full'>
        <h1 data-aos="zoom-in" className='text-3xl text-white italic font-abc font-bold'>
          SP & SONS
        </h1>
        <h1 data-aos="zoom-in" className='lg:text-5xl text-6xl font-abc text-white font-bold capitalize'>
          ผ้าม่าน<br/>ติดตั้งม่าน มูลี่<br/> ม่านม้วน ฉากกั้นห้อง
        </h1>
      </div>
     
    </section>
  );
};

export default Hero;
