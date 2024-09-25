import React from 'react'
import logo1 from '../assets/vc.jpg';
import logo2 from '../assets/kacee.jpg';
import logo3 from '../assets/pasaya.png';
import logo4 from '../assets/nitas.png';

const Productbrand = () => {
  return (
    <section className='w-full:lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6'>
      <h1 className='uppercase text-2xl text-slate-500 text-center'>test</h1>
      <h1 className='text-5xl font-semibold text-black text-center'>test</h1>

      <div className='flex flex-wrap flex-col lg:flex-row justify-between items-center gap-6 w-full lg:mt-10 mt-6'>
        <img src={logo1} alt='logo' width={220} height={180} />
        <img src={logo2} alt='logo' width={220} height={180} />
        <img src={logo3} alt='logo' width={220} height={180} />
        <img src={logo4} alt='logo' width={180} height={180} />
      </div>
    </section>
  )
}

export default Productbrand