import React from 'react'
import Button from './ui/Button'
import arrowRight from '/arrow-right.svg';
import CreditCard from './CreditCard';

function Process() {
    return (
        <section className='my-32 flex justify-center px-6 lg:px-2'>
            <div className='flex justify-between items-center w-6xl'>
                <div>
                    <h6 className='ff-m-plus-1-bold text-white text-[40px]/14'>Design your personalized <br /> credit card.</h6>
                    <h6 className='ff-m-plus-1-regular text-gray text-[16px]/5.5 mt-4 mb-6'>You have the freedom to personalize the design of <br /> your credit card, ensuring a truly unique experience <br />that makes you feel extraordinary</h6>
                    <Button text={'Create New Card'} icon={arrowRight} />
                </div>
                <div className='transform-3d flex flex-col -space-y-38'>
                    <CreditCard iconColor={'white'} labelClass={'text-[#B9BEBD]'} valueClass={'text-white'} style={'rotate-x-39 rotate-z-15 -rotate-y-17 h-[274px] w-[435px] blur-card'} />
                    <CreditCard iconColor={'white'} labelClass={'text-[#B9BEBD]'} valueClass={'text-white'} style={'rotate-x-39 rotate-z-15 -rotate-y-17 h-[274px] w-[435px] bg-primary'} />
                    <CreditCard iconColor={'white'} labelClass={'text-[#B9BEBD]'} valueClass={'text-white'} style={'rotate-x-39 rotate-z-15 -rotate-y-17 h-[274px] w-[435px] bg-white'} />
                </div>
            </div>
        </section>
    )
}

export default Process
