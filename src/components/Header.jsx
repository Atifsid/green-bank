import React, { useState } from 'react'
import logo from '/logo.svg';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const hideMenu = () => setMenuOpen(false);

    return (
        <header className='sticky top-0 text-white py-[32px] z-50 bg-bg'>
            <div className='flex justify-center'>
                <div className='absolute right-[32%] top-[-280%] h-[400px] w-[400px] bg-primary rounded-full blur-[280px]'></div>
                <nav className='flex items-center justify-between w-6xl px-6 z-10'>
                    <a href='#home' className="flex items-center cursor-pointer">
                        <img src={logo} alt="logo" height={24} width={24} />
                        <h1 className='pl-[12px] ff-m-plus-1-bold'>GreenBank</h1>
                    </a>

                    <ul className="gap-[32px] hidden lg:flex">
                        <li className='cursor-pointer'>
                            <a href='#why-us' className='text-base ff-m-plus-1-medium'>Why Us</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#services' className='text-base ff-m-plus-1-medium'>Services</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#process' className='text-base ff-m-plus-1-medium'>Our Process</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#payment' className='text-base ff-m-plus-1-medium'>Payments</a>
                        </li>
                        <li className='cursor-pointer'>
                            <a href='#faqs' className='text-base ff-m-plus-1-medium'>FAQs</a>
                        </li>
                    </ul>

                    <a href='#contact' className='cursor-pointer border border-primary px-[32px] py-[12px] text-primary rounded-full hidden lg:block'>
                        <h1 className='ff-m-plus-1-bold text-base'>Contact</h1>
                    </a>

                    <button className="lg:hidden relative w-[24px] h-[24px] flex items-center justify-center" onClick={toggleMenu}>
                        <span className={`absolute transition-opacity transform duration-300 ${isMenuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}>
                            <svg fill="#fff" height={24} width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </span>

                        <span className={`absolute transition-opacity transform duration-300 ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                            <svg fill="#fff" height={18} width={18} version="1.1" id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 490 490" xmlSpace="preserve">
                                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
                            </svg>
                        </span>
                    </button>
                </nav>
            </div>

            <nav className={`absolute top-[88px] backdrop-blur-3xl w-full py-7 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-[500px] opacity-100 border-y-1 border-gray-400" : "max-h-0 opacity-0"}`}>

                <ul className='flex flex-col justify-center gap-4 text-center'>
                    <li className='cursor-pointer' onClick={hideMenu}>
                        <a href='#why-us' className='text-base ff-m-plus-1-medium'>Why Us</a>
                    </li>
                    <li className='cursor-pointer' onClick={hideMenu}>
                        <a href='#services' className='text-base ff-m-plus-1-medium'>Services</a>
                    </li>
                    <li className='cursor-pointer' onClick={hideMenu}>
                        <a href='#process' className='text-base ff-m-plus-1-medium'>Our Process</a>
                    </li>
                    <li className='cursor-pointer' onClick={hideMenu}>
                        <a href='#payment' className='text-base ff-m-plus-1-medium'>Payments</a>
                    </li>
                    <li className='cursor-pointer' onClick={hideMenu}>
                        <a href='#faqs' className='text-base ff-m-plus-1-medium'>FAQs</a>
                    </li>
                    <li onClick={() => {
                        hideMenu();
                        document.getElementById('contact').scrollIntoView();
                    }}>
                        <button className='cursor-pointer border border-primary px-[32px] py-[12px] text-primary rounded-full'>
                            <h1 className='ff-m-plus-1-bold text-base'>Contact</h1>
                        </button>
                    </li>
                    <li className='mt-10'>
                        <a
                            onClick={hideMenu}
                            className='cursor-pointer underline underline-offset-2'
                            href="https://github.com/Atifsid/green-bank"
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'
                        >
                            github
                        </a>
                        <span className='px-2'>|</span>
                        <a
                            onClick={hideMenu}
                            className='cursor-pointer underline underline-offset-2'
                            href="https://www.figma.com/community/file/1264977779509133188/greenbank-credit-card-banking-landing-page-freebies-by-itsrehanraihan"
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'
                        >
                            figma
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header