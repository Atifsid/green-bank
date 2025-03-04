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
            <div className='flex justify-center'>
                <div className='flex justify-between items-center w-6xl'>
                    <div className='w-[50%]'>
                        <h6 className='ff-poppins-bold text-white text-5xl'>Easy Way to manage your finances</h6>
                        <h6 className='ff-poppins-regular text-gray text-lg mb-8 mt-5'>Easy to use mobile app that support on android and ios.</h6>

                        <div className='flex items-center gap-6'>
                            <button className='p-4 rounded-2xl bg-container cursor-pointer'>
                                <img src={appstore} alt="appstore" />
                            </button>

                            <button className='p-4 rounded-2xl bg-container cursor-pointer'>
                                <img src={playstore} alt="playstore" />
                            </button>
                        </div>
                    </div>

                    <img src={mobileDemo} alt="playstore" />
                </div>
            </div>
            <div className='bg-[#2834303D]'>
                <div className='flex justify-center'>
                    <div className='w-6xl px-6 pt-[60px] pb-[35px]'>
                        <div className='flex justify-between'>
                            <div className='w-[30%]'>
                                <div className="flex items-center cursor-pointer">
                                    <img src={logo} alt="logo" height={24} width={24} />
                                    <h1 className='pl-[12px] ff-m-plus-1-bold text-white text-xl'>GreenBank</h1>
                                </div>
                                <h6 className='ff-m-plus-1-regular text-gray text-base/5.5 pt-2.5'>Discover the power of our secure and rewarding credit cards</h6>
                            </div>
                            <div className='grid grid-cols-4 gap-8 text-white'>
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

                        <div className='flex justify-between items-center mt-20'>
                            <h6 className='ff-m-plus-1-regular text-gray text-[12px]'>copyright 2023 DoraDesign All Rights Reserved</h6>
                            <h6 className='ff-m-plus-1-regular text-gray text-[12px]'>
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
                            <h6 className='ff-poppins-regular text-gray text-[12px]'>This page uses cookies. See cookies details here </h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
