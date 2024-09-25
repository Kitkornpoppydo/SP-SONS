import React from 'react'
import logo1 from '../assets/vc.jpg';
import pro2 from '../assets/pro2.jpg';
import pro4 from '../assets/pro4.jpg';
 

const steps = [
    {
      id: 1,
      title: "วัดหน้างาน",
      img:logo1,
    },
    {
      id: 2,
      title: "เลือกผ้าตามสไตล์คุณ",
      img:pro2,
    },
    {
      id: 3,
      title: "ตัดเย็บ",
      img:logo1,
    },
    {
      id: 4,
      title: "นัดติดตั้ง",
      img:pro4,
    },
  ];

const ProcessStep = () => {
  return (
    <section className='w-full:lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6'>
      <h1 className='text-3xl font-semibold font-abc text-black text-center'>
        ขั้นตอนการทำงานของเรา
      </h1>
      <div className="container mx-auto my-8">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full mb-2">
                {index + 1}
              </div>
              <h3 className="font-semibold font-abc">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.id} className="text-center">
            <img
              src={step.img} alt='pro' height={900} 
             /> 
          </div>
        ))}
      </div>
    </div>
    </section>
    
  )
}

export default ProcessStep