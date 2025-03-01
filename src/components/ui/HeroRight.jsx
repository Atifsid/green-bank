import React from 'react'
import SegmentCircle from './SegmentCircle'
import CreditCard from '../CreditCard'

function HeroRight() {
    return (
        <div className='absolute right-0 lg:right-[2%] hidden lg:block'>
            <SegmentCircle />
            <CreditCard style={'transform rotate-15 shadow-lg blur-card'} />
        </div>
    )
}

export default HeroRight
