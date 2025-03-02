import React from 'react'
import signal from '/signal.svg'
import cardSign from '/card-sign.svg'

function CreditCard({ style }) {
    return (
        <div className={`absolute top-[8%] right-[20%] h-[280px] w-[450px] rounded-4xl py-6 px-8 ${style}`}>
            <div className='flex justify-between items-center'>
                <svg className='h-[28px] w-[48px] fill-white' viewBox="0 0 59 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.2935 30.8953C32.7558 27.713 34.926 23.1476 34.926 18.0742C34.926 13.0008 32.7558 8.43545 29.2935 5.2532C32.3928 2.40497 36.5291 0.664826 41.0705 0.664826C50.6853 0.664826 58.4799 8.45946 58.4799 18.0742C58.4799 27.689 50.6853 35.4836 41.0705 35.4836C36.5291 35.4836 32.3928 33.7435 29.2935 30.8953ZM29.2935 30.8953C26.1943 33.7435 22.0579 35.4836 17.5166 35.4836C7.90181 35.4836 0.107177 27.689 0.107177 18.0742C0.107178 8.45945 7.90181 0.664826 17.5166 0.664826C22.0579 0.664826 26.1943 2.40497 29.2935 5.2532C25.8313 8.43545 23.6611 13.0008 23.6611 18.0742C23.6611 23.1476 25.8313 27.713 29.2935 30.8953Z" />
                    <path d="M23.1611 18.0742C23.1611 23.0949 25.2276 27.6324 28.5546 30.8838C25.5926 33.4384 21.7349 34.9836 17.5166 34.9836C8.17795 34.9836 0.607177 27.4129 0.607177 18.0742C0.607178 8.7356 8.17795 1.16483 17.5166 1.16483C21.7349 1.16483 25.5926 2.71003 28.5546 5.2647C25.2276 8.51609 23.1611 13.0536 23.1611 18.0742ZM35.426 18.0742C35.426 13.0536 33.3595 8.5161 30.0324 5.2647C32.9945 2.71003 36.8522 1.16483 41.0705 1.16483C50.4091 1.16483 57.9799 8.7356 57.9799 18.0742C57.9799 27.4129 50.4091 34.9836 41.0705 34.9836C36.8522 34.9836 32.9945 33.4384 30.0324 30.8838C33.3595 27.6324 35.426 23.0949 35.426 18.0742Z" stroke="url(#paint0_linear_1_72)" strokeOpacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_1_72" x1="4.40833" y1="2.26069" x2="33.6112" y2="37.1417" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0.55" />
                        </linearGradient>
                    </defs>
                </svg>

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
    )
}

export default CreditCard
