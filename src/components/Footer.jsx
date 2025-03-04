import React from 'react'
import appstore from '/appstore.svg'
import playstore from '/playstore.svg'
import mobileDemo from '/mobileDemo.svg'
import logo from '/logo.svg';

const FOOTER_DATA = [
    {
        heading: 'About us',
        list: ['Investors', 'Features', 'Book a demo', 'Security']
    },
    {
        heading: 'Products',
        list: ['Credits Cards', 'Gift Cards', 'Savings accounts', 'NFT']
    },
    {
        heading: 'Useful Links',
        list: ['Free rewards', 'Documentation', 'Affiliate program']
    },
    {
        heading: 'Social',
        list: ['Changelog', 'License', 'Site Maps', 'News']
    }
]

function Footer() {
    return (
        <footer className='mt-32'>
            <div className='flex justify-center lg:mb-0 mb-28'>
                <div className='flex justify-center lg:justify-between items-center w-6xl px-6'>
                    <div className='w-[100%] lg:w-[50%]'>
                        <h6 className='ff-poppins-bold text-white text-center lg:text-left text-3xl lg:text-4xl'>Easy Way to manage your finances</h6>
                        <h6 className='ff-poppins-regular text-gray text-center lg:text-left text-sm lg:text-base mb-8 mt-5'>Easy to use mobile app that support on android and ios.</h6>

                        <div className='flex justify-center lg:justify-start items-center gap-6'>
                            <button className='p-4 rounded-2xl bg-container cursor-pointer'>
                                <img src={appstore} alt="appstore" />
                            </button>

                            <button className='p-4 rounded-2xl bg-container cursor-pointer'>
                                <img src={playstore} alt="playstore" />
                            </button>
                        </div>
                    </div>

                    <img className='hidden lg:block' src={mobileDemo} alt="playstore" />
                </div>
            </div>
            <div className='bg-[#2834303D]'>
                <div className='flex justify-center'>
                    <div className='w-6xl px-6 pt-[60px] pb-[35px]'>
                        <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
                            <div className='lg:w-[30%] w-[100%] pb-10 lg:pb-0'>
                                <div className="flex items-center lg:justify-start cursor-pointer">
                                    <img src={logo} alt="logo" height={24} width={24} />
                                    <h1 className='pl-[12px] ff-m-plus-1-bold text-white text-xl'>GreenBank</h1>
                                </div>
                                <h6 className='ff-m-plus-1-regular text-gray text-base/5.5 pt-2.5'>Discover the power of our secure and rewarding credit cards</h6>
                            </div>
                            <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 text-white'>
                                {FOOTER_DATA.map((item, idx) => (
                                    <ul className='text-white text-base ff-m-plus-1-bold'>
                                        <li className='pb-4'>{item.heading}</li>
                                        {item.list.map((subItem, subIdx) => (
                                            <li className='text-gray text-base ff-m-plus-1-regular pb-2 last:pb-0'>{subItem}</li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className='flex lg:flex-row flex-col gap-2 justify-between items-center mt-10 lg:mt-20'>
                            <h6 className='ff-m-plus-1-regular text-gray text-[12px] order 1'>copyright 2023 DoraDesign All Rights Reserved</h6>
                            <h6 className='ff-m-plus-1-regular text-gray text-[12px] order-3 lg:order-2'>
                                <a
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
                                    className='cursor-pointer underline underline-offset-2'
                                    href="https://www.figma.com/community/file/1264977779509133188/greenbank-credit-card-banking-landing-page-freebies-by-itsrehanraihan"
                                    target='_blank'
                                    rel="noopener"
                                    aria-label='Github'
                                >
                                    figma
                                </a>
                            </h6>
                            <h6 className='ff-poppins-regular text-gray text-[12px] order-2 lg:order-3'>This page uses cookies. See cookies details here </h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
