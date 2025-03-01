import React from 'react'
import cardCompany from '/card-company.svg'
import signal from '/signal.svg'
import cardSign from '/card-sign.svg'
import SegmentCircle from './SegmentCircle'

function CreditCard() {
    return (
        <div className='absolute right-0'>
            <SegmentCircle />

            <div className='absolute top-[8%] right-[20%] h-[280px] w-[450px] rounded-4xl bg-white/20 backdrop-blur-lg transform rotate-15 shadow-lg py-6 px-8'>
                <div className='flex justify-between items-center'>
                    <img src={cardCompany} alt="cardCompany" className='h-[28px] w-[48px]' />
                    <img src={signal} alt="signal" className='h-[38px] w-[25px]' />
                </div>

                <div className='mt-8'>
                    <h6 className='ff-m-plus-1-semibold text-sm text-[#B9BEBD] pb-2'>
                        Credit Card No.
                    </h6>

                    <h6 className='ff-m-plus-1-code-bold text-3xl text-white'>
                        1602  0911  2019  2021
                    </h6>
                </div>

                <div className='relative mt-8 flex items-center gap-12'>
                    <div>
                        <h6 className='ff-m-plus-1-semibold text-sm text-[#B9BEBD] pb-2'>
                            Name
                        </h6>

                        <h6 className='ff-m-plus-1-medium text-[12px] text-white'>
                            REHAN RAIHAN
                        </h6>
                    </div>

                    <div>
                        <h6 className='ff-m-plus-1-semibold text-sm text-[#B9BEBD] pb-2'>
                            Exp.
                        </h6>

                        <h6 className='ff-m-plus-1-medium text-[12px] text-white'>
                            09/11
                        </h6>
                    </div>

                    <div className='absolute right-0 bottom-[-15%]'>
                        <img src={cardSign} alt="cardSign" className='h-[46px] w-[58px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard
