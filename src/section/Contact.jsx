import React,{ useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoMdMail } from 'react-icons/io'
import { FaLine } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    })
  }, [])
  return (
    <>
    <section className='w-full bg-red-500 py-20 z-10'>
      <h5 data-aos="zoom-in" data-aos-delay='200' className='text-white md:text-4xl text-5xl font-semibold font-abc text-center pb-32'>
      ติดต่อสอบถาม นัดหมายประเมินหน้างานได้ที่
      </h5>
    </section>

    <section id='contact'>
      <div className='w-full flex flex-col justify-center items-center gap-2 bg-blue-900 h-fit pb-20'>
        <div className='md:w-[85%] w-full mx-auto grid md:grid-cols-4 grid-cols-1 justify-center items-center md:gap-20 gap-10 md:p-20 p-10 mt-[-200px] z-20'>
          <div data-aos="slide-up" data-aos-delay="200" className='p-10 bg-white flex flex-col justify-center items-center gap-4'>
            <div className='border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <FaMapMarked className='size-20 text-slate-400' />
            </div>
            <h1 className='test-3xl text-slate-500 font-bold font-abc'>ที่อยู่</h1>
          </div>

          <div data-aos="slide-up" data-aos-delay="200" className='p-10 bg-white flex flex-col justify-center items-center gap-4'>
            <div className='border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <FaLine className='size-20 text-slate-400' />
            </div>
            <h1 className='test-3xl text-slate-500 font-bold font-abc'>Line</h1>
          </div>

          <div data-aos="slide-up" data-aos-delay="200" className='p-10 bg-white flex flex-col justify-center items-center gap-4'>
            <div className='border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <FaSquarePhone className='size-20 text-slate-400' />
            </div>
            <h1 className='test-3xl text-slate-500 font-bold font-abc'>โทรศัพท์</h1>
          </div>

          <div data-aos="slide-up" data-aos-delay="200" className='p-10 bg-white flex flex-col justify-center items-center gap-4'>
            <div className='border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <AiOutlineMail className='size-20 text-slate-400' />
            </div>
            <h1 className='test-3xl text-slate-500 font-bold font-abc'>E-Mail</h1>
          </div>
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Contact