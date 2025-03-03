import React from 'react'
import security from '/security.svg'
import pie from '/pie.svg'
import analytics from '/analytics.svg'

function Services() {
    return (
        <section className='mt-32 flex justify-center px-6 lg:px-2'>
            <div className='w-6xl'>
                <h6 className='ff-m-plus-1-bold text-white text-center text-[40px]'>What do we offer?</h6>
                <div className='mt-16 grid grid-cols-1 lg:flex justify-center gap-8'>
                    <Service icon={security} alt={'security'} heading={'Security Guarantee'} />
                    <Service icon={pie} alt={'pie'} heading={'Investing'} />
                    <Service icon={analytics} alt={'analytics'} heading={'Multiple Method'} />
                </div>
            </div>
        </section>
    )
}

function Service({ icon, alt, heading }) {
    return (
        <div className='flex items-center justify-center gap-6'>
            <div className='p-4 rounded-3xl bg-container'>
                <img src={icon} alt={alt} />
            </div>
            <div className='text-white'>
                <h6 className='ff-m-plus-1-medium text-[24px]'>{heading}</h6>
                <h6 className='ff-m-plus-1-regular text-gray text-base/5.5'>Your data and funds will be securely protected.</h6>
            </div>
        </div>
    )
}

export default Services
