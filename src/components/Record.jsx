import React from 'react'
import LogoSection from './ui/LogoSection'

function Record() {
  return (
    <section id='why-us' className='mb-32 scroll-mt-header-height'>
      <div className='flex justify-center px-6 lg:px-2'>
        <div className='lg:flex grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center md:gap-24 max-md:gap-10 w-6xl bg-[#3D544D3D] p-16 rounded-4xl'>
          <IndividualRecord p1={'16y'} p2={'Experience'} />
          <IndividualRecord p1={'250+'} p2={'Merchant Partner'} />
          <IndividualRecord p1={'18+'} p2={'Years Experience'} />
          <IndividualRecord p1={'10.2k+'} p2={'Worldwide Clients'} />
        </div>
      </div>

      <div className='mt-32'>
        <LogoSection />
      </div>
    </section>
  )
}

function IndividualRecord({ p1, p2 }) {
  return (
    <div className='flex flex-col gap-2'>
      <h6 className='ff-m-plus-1-bold text-5xl text-white text-center'>{p1}</h6>
      <h6 className='ff-m-plus-1-medium text-base text-primary text-center'>{p2}</h6>
    </div>
  )
}

export default Record
