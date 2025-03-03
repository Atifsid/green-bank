import React from 'react'
import Button from './ui/Button'
import arrowRight from '/arrow-right.svg';
import CreditCard from './CreditCard';

function Process() {
    return (
        <section className='mt-24 lg:mt-32 flex justify-center px-8 lg:px-6'>
            <div className='w-6xl'>
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <div className='w-[80%] lg:w-[50%] order-2 lg:order-1 lg:mt-8'>
                        <h6 className='ff-m-plus-1-bold text-white lg:text-[40px]/14 text-[30px]/10 text-center lg:text-left'>Design your personalized credit card.</h6>
                        <h6 className='ff-m-plus-1-regular text-gray text-[16px]/5.5 mt-4 mb-6 text-center lg:text-left'>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</h6>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text={'Create New Card'} icon={arrowRight} />
                        </div>
                    </div>
                    <div className='transform-3d flex flex-col order-1 lg:order-2'>
                        <CreditCard
                            iconColor={'white'}
                            labelClass={'text-[#ffffff] text-sm'}
                            valueClass={'text-white'}
                            creditCardNumFontSize={'lg:text-3xl text-base'}
                            nameAndExpFontSize={'lg:text-[12px] text-[10px]'}
                            isService={true}
                            cardSignClass={'h-[23px] w-[29px] lg:h-[46px] lg:w-[58px]'}
                            style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[250px] w-[280px] sm:h-[274px] sm:w-[400px] lg:h-[274px] lg:w-[435px] bg-white/10 backdrop-blur-[12px] border-2 border-gray'} />

                        <CreditCard
                            iconColor={'#424242'}
                            labelClass={'text-[#595959] text-sm'}
                            valueClass={'text-[#424242]'}
                            creditCardNumFontSize={'lg:text-3xl text-base'}
                            nameAndExpFontSize={'lg:text-[12px] text-[10px]'}
                            isService={true}
                            cardSignClass={'h-[23px] w-[29px] lg:h-[46px] lg:w-[58px]'}
                            style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[250px] w-[280px] sm:h-[274px] sm:w-[400px] lg:h-[274px] lg:w-[435px] bg-primary -my-47 border-2 border-gray'} />

                        <CreditCard
                            iconColor={'#1A1E1C'}
                            labelClass={'text-[#ADADAD] text-sm'}
                            valueClass={'text-[#1A1E1C]'}
                            creditCardNumFontSize={'lg:text-3xl text-base'}
                            nameAndExpFontSize={'lg:text-[12px] text-[10px]'}
                            isService={true}
                            cardSignClass={'h-[23px] w-[29px] lg:h-[46px] lg:w-[58px]'}
                            style={'rotate-x-39 rotate-z-14 -rotate-y-17 h-[250px] w-[280px] sm:h-[274px] sm:w-[400px] lg:h-[274px] lg:w-[435px] bg-white border-2 border-gray'} />
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col justify-between items-center mt-24 lg:mt-32'>
                    <div className='transform-3d flex flex-col order-1 lg:order-2'>
                        <CreditCard
                            iconColor={'white'}
                            labelClass={'text-[#ffffff]'}
                            valueClass={'text-white'}
                            creditCardNumFontSize={'lg:text-3xl text-base'}
                            nameAndExpFontSize={'lg:text-[12px] text-[10px]'}
                            isService={true}
                            cardSignClass={'h-[23px] w-[29px] lg:h-[46px] lg:w-[58px]'}
                            style={'rotate-x-18 -rotate-z-1 rotate-y-8 h-[250px] w-[280px] sm:h-[274px] sm:w-[400px] lg:h-[274px] lg:w-[435px] bg-white/10 backdrop-blur-[12px] border-2 border-gray'} />

                        <CreditCard
                            iconColor={'#424242'}
                            labelClass={'text-[#595959]'}
                            valueClass={'text-[#424242]'}
                            creditCardNumFontSize={'lg:text-3xl text-base'}
                            nameAndExpFontSize={'lg:text-[12px] text-[10px]'}
                            isService={true}
                            cardSignClass={'h-[23px] w-[29px] lg:h-[46px] lg:w-[58px]'}
                            style={'rotate-x-40 -rotate-z-8 rotate-y-22 h-[250px] w-[280px] sm:h-[274px] sm:w-[400px] lg:h-[274px] lg:w-[435px] bg-primary -mt-25 border-2 border-gray -ml-5'} />
                    </div>
                    <div className='w-[80%] lg:w-[50%] order-2 lg:order-1 lg:mt-8'>
                        <h6 className='ff-m-plus-1-bold text-white lg:text-[40px]/14 text-[30px]/10 text-center lg:text-left'>Find the Perfect Credit Card<br /> for You</h6>
                        <h6 className='ff-m-plus-1-regular text-gray text-[16px]/5.5 mt-4 mb-6 text-center lg:text-left'>Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.</h6>
                        <div className='flex justify-center lg:justify-start'>
                            <Button text={'Learn More'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
