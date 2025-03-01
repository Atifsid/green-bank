import React from 'react'
import dell from '/dell.svg'
import nyt from '/nyt.svg'
import petal from '/petal.svg'
import rakuten from '/rakuten.svg'
import upwork from '/upwork.svg'
import vice from '/vice.svg'

const images = [upwork, petal, rakuten, nyt, vice, dell];

function LogoSection() {

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center items-center gap-20'>
                {[...images].map((img, i) => (
                    <img key={i} src={img} alt={`logo-${i}`} />
                ))}
            </div>
        </div>
    )
}

export default LogoSection
