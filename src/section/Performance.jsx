import React,{ useEffect } from 'react'
import blog1 from '../assets/blog.jpg'
import P1 from '../assets/perfor/p1.jpg'
import P2 from '../assets/perfor/p2.jpg'
import P3 from '../assets/perfor/p3.jpg'
import P4 from '../assets/perfor/p4.jpg'
import P5 from '../assets/perfor/p5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Performance = () => {
  useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <section className='w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-14'>
      <h1 data-aos="zoom-in" className='text-5xl font-abc font-semibold text-black text-center'>
        ผลงานที่ผ่านมา
      </h1>
      <h5 data-aos="zoom-in" className='uppercase text-3xl font-abc text-slate-500 text-center'>
      ตัวอย่างผลงานบางส่วนที่ผ่านมาของเรา
      </h5>

      <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-6'>
        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={P1}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-semibold text-black font-abc truncate block capitalize">Villggio3 ศรีนครินทร์-บางนา</p>
          </div>
        </div>

        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={P2}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-semibold text-black font-abc truncate block capitalize">หมู่บ้านยูนิวิลล่า 1 บางโคล่</p>
          </div>
        </div> 

        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={P3}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-semibold text-black font-abc truncate block capitalize">Luve เกษตร-นวมินทร์</p>
          </div>
        </div>

        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={P4}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-semibold text-black  font-abc truncate block capitalize">ซอยลาดพร้าว 101</p>
          </div>
        </div>

        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={P5}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-bold text-black font-abc truncate block capitalize">เอสซี แอสเซท วิลเลจ พระราม 9</p>
          </div>
        </div>

        <div className='bg-white p-8 flex flex-col jusitfy-center items-center gap-4 shadow-md rounded-xl duration-500'>
          <img src={blog1}/>
          <div class="px-4 py-3 w-72">
          <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          </div>
        </div>
    </div>
    <button className='px-20 py-4 bg-blue-500 text-white font-semibold font-abc'>ดูผลงานทั้งหมด</button>
    </section>
  )
}

export default Performance