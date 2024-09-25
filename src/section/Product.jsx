import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Product = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <section id='product' className='w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center
     items-center gap-6'>
      <h1 data-aos="zoom-in" className='uppercase text-2xl text-slate-500 text-center'>สินค้า</h1>
      <h1 data-aos="zoom-in" className='text-5xl font-abc font-semibold text-black text-center'>บริการของเรา</h1>

      <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col lg:flex-row justify-between lg:items-start items-center w-full mt-5'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start h-full'>
          <div className='flex flex-col justify-center items-start gap-4 w-full lg:h-[400px] h-full bg-cover bg-center border-[4px] border-white p-10 
          collection-item cursor-pointer bg-no-repeat' style={{ backgroundImage: `url(${product1})` }}>
            <h1 className='text-4xl font-semibold font-abc text-white line-clamp-5'>
              รูปแบบม่าน<br></br>ม่านจีบ<br></br>และอีกมากมาย
            </h1>
            <a href='/page1'>
              <button className='px-7 py-2 text-lg text-black bg-white font-abc font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300'>
                ดูเพิ่มเติม
              </button>
            </a>
          </div>

          <div className='flex lg:flex-row flex-col w-full h-fit'>
            <div className='flex flex-col p-6 justify-center items-end gap-4 lg:w-[50%]
             w-full border-[4px] border-white bg-cover bg-center cursor-pointer bg-no-repeat lg:h-[400px]
              h-fit' style={{ backgroundImage: `url(${product2})` }}>
              <h1 className='text-4xl font-semibold font-abc text-black'>ม่านม้วน</h1>
              <a href='/page2'>
                <button className='px-7 py-2 text-lg text-black bg-white font-abc font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300'>ดูเพิ่มเติม</button>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 lg:w-[50%] w-full p-6 border-[4px] border-white collection-items cursor-pointer h-[400px] bg-no-repeat'
              style={{ backgroundImage: `url(${product3})` }}>

              <h1 className='text-white font-semibold font-abc text-4xl text-center'>
                มูลี่ไม้
              </h1>
              <a href='/page3'>
                <button className='px-7 py-2 text-lg text-black bg-white font-abc font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300'>
                  ดูเพิ่มเติม
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='lg:w-[40%] w-full flex flex-col justify-start items-start gap-4 p-10 bg-cover bg-center
         lg:h-[805px] h-full border-[4px] border-white collection-item cursor-pointer bg-no-repeat'
          style={{ backgroundImage: `url(${product4})` }}>
          <h1 className='text-4xl font-semibold font-abc text-black'>
            ฉาก<br></br>กั้นห้อง
          </h1>
          <a href='/page4'>
            <button className='px-7 py-2 text-lg text-black bg-white font-abc font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300'>
              ดูเพิ่มเติม
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Product