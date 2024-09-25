import React, { useEffect } from 'react'
import blog1 from '../assets/blog.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])

  return (
    <section className='w-full lg:px-20 px-10 lg:py-20 py-10 flex lg:flex-row flex-col justify-conter items-center gap-6'>
        <div className='lg:w-[50%] w-full'>
            <img src={blog1} alt='blog img' data-aos="zoom-in"/>
        </div>
        <div className='lg:w-[50%] w-full lg:p-10 flex flex-col justify-center items-center gap-8'>
          <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-4xl font-abc text-4xl font-bold text-black line-clamp-5 text-center'>
            SP&SONS ผ้าม่าน (เอส พี แอนด์ ซัน) ผ้าม่าน
          </h1>
          <p data-aos="zoom-in" data-aos-delay="600" className='text-center text-xl text-slate-700'>
          บริการออกแบบ ตัดเย็บติดตั้งผ้าม่าน วอลล์เปเปอร์ มู่ลี่ ม่านม้วน ม่านปรับแสง ฉากกั้นห้อง ทุกชนิด โดยช่างผู้มีประสบการณ์กว่า 30 ปี รับรองคุณภาพด้วยผลงานกว่า 1000 หลังราคาโรงงาน รับรองถูกกว่าและดีกว่า แน่นอน
          </p>
        </div>
    </section>
  )
}

export default Blog