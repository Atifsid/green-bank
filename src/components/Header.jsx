import React from 'react'
import logo from '/logo.svg';

function Header() {
    return (
        <header className='sticky top-0 flex justify-center header py-[32px] z-50 bg-bg'>
            <div className='absolute right-[32%] top-[-280%] h-[400px] w-[400px] bg-primary rounded-full blur-[280px]'></div>
            <nav className='flex items-center justify-between w-6xl px-6'>
                <div className="flex items-center cursor-pointer">
                    <img src={logo} alt="logo" height={24} width={24} />
                    <h1 className='pl-[12px] ff-m-plus-1-bold'>GreenBank</h1>
                </div>

                <ul className="gap-[32px] hidden lg:flex">
                    <li className='cursor-pointer'>
                        <h1 className='text-base ff-m-plus-1-medium'>Why Us</h1>
                    </li>
                    <li className='cursor-pointer'>
                        <h1 className='text-base ff-m-plus-1-medium'>Services</h1>
                    </li>
                    <li className='cursor-pointer'>
                        <h1 className='text-base ff-m-plus-1-medium'>Our Process</h1>
                    </li>
                    <li className='cursor-pointer'>
                        <h1 className='text-base ff-m-plus-1-medium'>Payments</h1>
                    </li>
                    <li className='cursor-pointer'>
                        <h1 className='text-base ff-m-plus-1-medium'>FAQs</h1>
                    </li>
                </ul>

                <button className='cursor-pointer border border-primary px-[32px] py-[12px] text-primary rounded-full hidden lg:block'>
                    <h1 className='ff-m-plus-1-bold text-base'>Contact</h1>
                </button>

                <button className='lg:hidden'>
                    <svg fill='#fff' height={24} width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
            </nav>
        </header>
    )
}

export default Header