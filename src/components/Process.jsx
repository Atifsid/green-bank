import React from 'react'
import Button from './ui/Button'
import arrowRight from '/arrow-right.svg';
import CreditCard from './CreditCard';

function Process() {
    return (
        <section className='my-32 flex justify-center px-6 lg:px-2'>
            <div className='w-6xl'>
                <div className='flex justify-between items-center'>
                    <div className='w-[50%]'>
                        <h6 className='ff-m-plus-1-bold text-white text-[40px]/14'>Design your personalized credit card.</h6>
                        <h6 className='ff-m-plus-1-regular text-gray text-[16px]/5.5 mt-4 mb-6'>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</h6>
                        <Button text={'Create New Card'} icon={arrowRight} />
                    </div>
                    <div className='transform-3d flex flex-col'>
                        <CreditCard iconColor={'white'} labelClass={'text-[#ffffff]'} valueClass={'text-white'} isService={true} style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[274px] w-[435px] bg-white/10 backdrop-blur-[12px] border-2 border-gray'} />
                        <CreditCard iconColor={'#424242'} labelClass={'text-[#595959]'} valueClass={'text-[#424242]'} isService={true} style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[274px] w-[435px] bg-primary -my-47 border-2 border-gray'} />
                        <CreditCard iconColor={'#1A1E1C'} labelClass={'text-[#ADADAD]'} valueClass={'text-[#1A1E1C]'} isService={true} style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[274px] w-[435px] bg-white border-2 border-gray'} />
                    </div>
                </div>

                <div className='flex justify-between items-center mt-32'>
                    <div className='transform-3d flex flex-col relative'>
                        <CreditCard iconColor={'white'} labelClass={'text-[#ffffff]'} valueClass={'text-white'} isService={true} style={'rotate-x-18 -rotate-z-1 rotate-y-8 h-[274px] w-[435px] bg-white/10 backdrop-blur-[12px] border-2 border-gray'} />
                        <CreditCard iconColor={'#424242'} labelClass={'text-[#595959]'} valueClass={'text-[#424242]'} isService={true} style={'rotate-x-40 -rotate-z-8 rotate-y-22 h-[274px] w-[435px] bg-primary -mt-20 mr-20 absolute border-2 border-gray'} />
                    </div>
                    <div className='w-[50%]'>
                        <h6 className='ff-m-plus-1-bold text-white text-[40px]/14'>Find the Perfect Credit Card<br /> for You</h6>
                        <h6 className='ff-m-plus-1-regular text-gray text-[16px]/5.5 mt-4 mb-6'>Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.</h6>
                        <Button text={'Learn More'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
