import React from 'react'
import SegmentCircle from './SegmentCircle'
import CreditCard from '../CreditCard'

function HeroRight() {
    return (
        <div className='absolute right-0 lg:right-[2%] hidden lg:block'>
            <SegmentCircle />
            <CreditCard iconColor={'white'} labelClass={'text-[#B9BEBD]'} valueClass={'text-white'} style={'transform rotate-15 shadow-lg blur-card absolute top-[8%] right-[20%] h-[280px] w-[450px]'} />
        </div>
    )
}

export default HeroRight
