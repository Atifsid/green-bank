import React from 'react'

function Button({ text, icon }) {
    return (
        <button className='flex items-center gap-4 bg-primary px-[32px] py-[16px] rounded-full cursor-pointer'>
            <span className='text-white'>{text}</span> {icon && <img src={icon} alt="arrowRight" />}
        </button>
    )
}

export default Button
