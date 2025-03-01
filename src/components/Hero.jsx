import React from 'react'
import arrowRight from '/arrow-right.svg';
import ProfileCircles from './ui/ProfileCircles';
import HeroRight from './ui/HeroRight';

function Hero() {
    return (
        <section className='h-[calc(100vh-114px)]'>
            <div className='flex justify-center h-full'>
                <div className='flex items-center justify-center lg:justify-between w-6xl px-6 relative'>
                    <div className='z-10'>
                        <h1 className='ff-m-plus-1-bold text-white text-[50px]/16 z-10'>Discover the Perfect <br />
                            <span>
                                <div className="relative inline-block">
                                    Credit Card for
                                    <svg
                                        className='absolute w-[359px] h-[100px] top-0 left-[-12px]'
                                        viewBox="0 0 362 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M168.73 88.4545C212.374 83.5416 256.673 76.6038 286.744 70.1763C515.332 21.3168 98.4365 -37.5639 7.34247 34.9736C-23.6897 59.6843 63.7908 80.3409 168.73 88.4545ZM168.73 88.4545C95.8766 96.6551 24.8448 101 24.8448 101M168.73 88.4545C233.806 93.486 305.596 93.0784 360 87.6841" stroke="#2BB32A" stroke-width="2" stroke-linecap="square" />
                                    </svg>
                                </div>
                            </span> You</h1>

                        <p className='ff-m-plus-1-regular text-base/5.5 text-gray mt-[30px] mb-8'>
                            Discover the power of our secure and rewarding credit <br />cards. Explore our range of credit cards and take control <br />of your finances today.
                        </p>

                        <button className='flex items-center gap-4 bg-primary px-[32px] py-[16px] rounded-full cursor-pointer'>
                            <span className='text-white'>Get Started</span> <img src={arrowRight} alt="arrowRight" />
                        </button>

                        <div className='mt-[35px] flex items-center gap-4'>
                            <ProfileCircles />
                            <div>
                                <p className='ff-m-plus-1-bold text-base text-white'>10.2k+</p>
                                <p className='ff-m-plus-1-regular text-sm text-gray'>Active users around the <br /> world</p>
                            </div>
                        </div>
                    </div>

                    <HeroRight />
                </div>
            </div>
        </section>
    )
}

export default Hero
