import React from 'react'

function CreditCard({ style, iconColor, labelClass, valueClass, isService }) {
    return (
        <div className={`rounded-4xl py-6 px-8 ${style}`}>
            <div className='flex justify-between items-center'>
                {/* cardCompany */}
                <svg width="48" height="28" viewBox="0 0 59 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.2935 30.8953C32.7558 27.713 34.926 23.1476 34.926 18.0742C34.926 13.0008 32.7558 8.43545 29.2935 5.2532C32.3928 2.40497 36.5291 0.664826 41.0705 0.664826C50.6853 0.664826 58.4799 8.45946 58.4799 18.0742C58.4799 27.689 50.6853 35.4836 41.0705 35.4836C36.5291 35.4836 32.3928 33.7435 29.2935 30.8953ZM29.2935 30.8953C26.1943 33.7435 22.0579 35.4836 17.5166 35.4836C7.90181 35.4836 0.107177 27.689 0.107177 18.0742C0.107178 8.45945 7.90181 0.664826 17.5166 0.664826C22.0579 0.664826 26.1943 2.40497 29.2935 5.2532C25.8313 8.43545 23.6611 13.0008 23.6611 18.0742C23.6611 23.1476 25.8313 27.713 29.2935 30.8953Z" fill={iconColor} />
                    <path d="M23.1611 18.0742C23.1611 23.0949 25.2276 27.6324 28.5546 30.8838C25.5926 33.4384 21.7349 34.9836 17.5166 34.9836C8.17795 34.9836 0.607177 27.4129 0.607177 18.0742C0.607178 8.7356 8.17795 1.16483 17.5166 1.16483C21.7349 1.16483 25.5926 2.71003 28.5546 5.2647C25.2276 8.51609 23.1611 13.0536 23.1611 18.0742ZM35.426 18.0742C35.426 13.0536 33.3595 8.5161 30.0324 5.2647C32.9945 2.71003 36.8522 1.16483 41.0705 1.16483C50.4091 1.16483 57.9799 8.7356 57.9799 18.0742C57.9799 27.4129 50.4091 34.9836 41.0705 34.9836C36.8522 34.9836 32.9945 33.4384 30.0324 30.8838C33.3595 27.6324 35.426 23.0949 35.426 18.0742Z" stroke="url(#paint0_linear_1_72)" strokeOpacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_1_72" x1="4.40833" y1="2.26069" x2="33.6112" y2="37.1417" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0.55" />
                        </linearGradient>
                    </defs>
                </svg>


                {/* signal */}
                {!isService && <svg width="25" height="38" viewBox="0 0 32 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.1227 3.88679C18.9354 3.30595 20.0651 3.49394 20.646 4.30667C23.7387 8.63416 27.4276 16.0149 28.509 24.236C29.5977 32.5133 28.0441 41.7536 20.4618 49.4363C19.76 50.1473 18.6148 50.1549 17.9038 49.4532C17.1928 48.7515 17.1853 47.6062 17.887 46.8952C24.5 40.1947 25.9038 32.1693 24.9223 24.7078C23.9335 17.19 20.5248 10.3587 17.7028 6.41008C17.122 5.59734 17.3099 4.46763 18.1227 3.88679ZM10.2825 10.5205C11.0944 9.93845 12.2244 10.1248 12.8064 10.9366C14.9896 13.9818 17.5874 19.1612 18.3505 24.9449C19.1212 30.7856 18.0215 37.3521 12.6218 42.8062C11.919 43.5161 10.7737 43.5219 10.0638 42.819C9.35394 42.1162 9.3482 40.971 10.051 40.2611C14.4788 35.7887 15.4266 30.4394 14.7641 25.4181C14.094 20.3398 11.778 15.7109 9.86638 13.0444C9.28434 12.2325 9.47064 11.1025 10.2825 10.5205ZM4.24633 17.7606C5.05542 17.1747 6.18628 17.3556 6.77218 18.1647C7.96425 19.8109 9.37389 22.5897 9.79063 25.7167C10.2153 28.9033 9.60862 32.5551 6.58618 35.5776C5.87981 36.284 4.73456 36.284 4.0282 35.5776C3.32183 34.8712 3.32183 33.726 4.0282 33.0196C6.07029 30.9775 6.5187 28.5499 6.20481 26.1946C5.88298 23.7798 4.76034 21.5543 3.84219 20.2864C3.2563 19.4773 3.43723 18.3465 4.24633 17.7606Z" fill={iconColor} stroke="url(#paint0_linear_1_73)" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1_73" x1="5.36414" y1="5.67728" x2="32.0725" y2="16.0564" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0.55" />
                        </linearGradient>
                    </defs>
                </svg>}

                {isService && <svg width="25" height="38" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6497 0.834378C18.2423 0.400281 19.0921 0.540775 19.5476 1.14818C21.9734 4.38238 24.9247 9.89847 25.9479 16.0426C26.978 22.2287 26.0574 29.1346 20.5877 34.8763C20.0815 35.4077 19.2253 35.4133 18.6753 34.8889C18.1253 34.3645 18.0897 33.5086 18.5959 32.9772C23.3664 27.9695 24.2067 21.9717 23.278 16.3952C22.3424 10.7767 19.615 5.67122 17.4016 2.72018C16.946 2.11278 17.0571 1.26847 17.6497 0.834378ZM11.9598 5.79214C12.5518 5.35715 13.4017 5.49639 13.8581 6.10315C15.5702 8.37902 17.6481 12.2499 18.3697 16.5724C19.0984 20.9375 18.4475 25.845 14.5518 29.9212C14.0447 30.4518 13.1885 30.4561 12.6393 29.9308C12.09 29.4056 12.0559 28.5497 12.5629 28.0191C15.7574 24.6766 16.3265 20.6788 15.7 16.9261C15.0664 13.1307 13.2137 9.67122 11.7145 7.67841C11.2581 7.07165 11.3679 6.22714 11.9598 5.79214ZM7.63484 11.2031C8.2246 10.7652 9.075 10.9004 9.53426 11.5051C10.4687 12.7354 11.5954 14.8122 11.9886 17.1492C12.3894 19.5308 12.031 22.26 9.84961 24.5188C9.33981 25.0468 8.48338 25.0468 7.93671 24.5188C7.39004 23.9909 7.36015 23.135 7.86995 22.6071C9.34377 21.0809 9.61574 19.2666 9.31954 17.5064C9.01585 15.7016 8.11824 14.0384 7.39854 13.0908C6.93928 12.4861 7.04508 11.641 7.63484 11.2031ZM4.115 16.804C3.61698 16.804 3.22734 17.2075 3.24472 17.7052C3.2621 18.2029 3.67992 18.6064 4.17794 18.6064C4.67597 18.6064 5.0656 18.2029 5.04822 17.7052C5.03084 17.2075 4.61303 16.804 4.115 16.804ZM0.539473 17.7052C0.46995 15.7143 2.0285 14.1004 4.02059 14.1004C6.01268 14.1004 7.68395 15.7143 7.75347 17.7052C7.823 19.6961 6.26445 21.31 4.27236 21.31C2.28026 21.31 0.608996 19.6961 0.539473 17.7052Z" fill={iconColor} />
                </svg>
                }

            </div>

            <div className='mt-8'>
                <h6 className={`ff-m-plus-1-semibold text-sm ${labelClass} pb-2`}>
                    Credit Card No.
                </h6>

                <h6 className={`ff-m-plus-1-code-bold text-3xl ${valueClass}`}>
                    1602  0911  2019  2021
                </h6>
            </div>

            <div className='relative mt-8 flex items-center gap-12'>
                <div>
                    <h6 className={`ff-m-plus-1-semibold text-sm ${labelClass} pb-2`}>
                        Name
                    </h6>

                    <h6 className={`ff-m-plus-1-medium text-[12px] ${valueClass}`}>
                        REHAN RAIHAN
                    </h6>
                </div>

                <div>
                    <h6 className={`ff-m-plus-1-semibold text-sm ${labelClass} pb-2`}>
                        Exp.
                    </h6>

                    <h6 className={`ff-m-plus-1-medium text-[12px] ${valueClass}`}>
                        09/11
                    </h6>
                </div>

                <div className='absolute right-0 bottom-[-15%]'>
                    {/* cardSign */}
                    <svg width="58" height="46" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.226196 2.47403C0.226196 1.5899 0.942928 0.873169 1.82706 0.873169H15.4344C16.3185 0.873169 17.0353 1.5899 17.0353 2.47403V12.6693C17.0353 13.2868 16.6802 13.8492 16.1227 14.1147L9.319 17.3545C8.88358 17.5618 8.37789 17.5618 7.94247 17.3545L1.1388 14.1147C0.58131 13.8492 0.226196 13.2868 0.226196 12.6693V2.47403Z" fill={iconColor} />
                        <path d="M25.84 2.47403C25.84 1.5899 26.5568 0.873169 27.4409 0.873169H31.4431C32.3272 0.873169 33.0439 1.5899 33.0439 2.47403V5.67576C33.0439 6.5599 32.3272 7.27663 31.4431 7.27663H27.4409C26.5568 7.27663 25.84 6.5599 25.84 5.67576V2.47403Z" fill={iconColor} />
                        <path d="M41.8487 2.47403C41.8487 1.5899 42.5654 0.873169 43.4495 0.873169H57.0569C57.941 0.873169 58.6578 1.5899 58.6578 2.47403V12.0792C58.6578 12.9634 57.941 13.6801 57.0569 13.6801H43.4495C42.5654 13.6801 41.8487 12.9634 41.8487 12.0792V2.47403Z" fill={iconColor} />
                        <path d="M0.226196 19.2831C0.226196 18.399 0.942928 17.6823 1.82706 17.6823H15.4344C16.3185 17.6823 17.0353 18.399 17.0353 19.2831V28.8883C17.0353 29.7724 16.3185 30.4892 15.4344 30.4892H1.82706C0.942928 30.4892 0.226196 29.7724 0.226196 28.8883V19.2831Z" fill={iconColor} />
                        <path d="M21.0374 12.8797C21.0374 11.9955 21.7542 11.2788 22.6383 11.2788H36.2457C37.1298 11.2788 37.8465 11.9955 37.8465 12.8797V35.2918C37.8465 36.1759 37.1298 36.8926 36.2457 36.8926H22.6383C21.7542 36.8926 21.0374 36.1759 21.0374 35.2918V12.8797Z" fill={iconColor} />
                        <path d="M41.8487 19.2831C41.8487 18.399 42.5654 17.6823 43.4495 17.6823H57.0569C57.941 17.6823 58.6578 18.399 58.6578 19.2831V28.8883C58.6578 29.7724 57.941 30.4892 57.0569 30.4892H43.4495C42.5654 30.4892 41.8487 29.7724 41.8487 28.8883V19.2831Z" fill={iconColor} />
                        <path d="M0.226196 36.0922C0.226196 35.2081 0.942928 34.4913 1.82706 34.4913H15.4344C16.3185 34.4913 17.0353 35.2081 17.0353 36.0922V45.6974C17.0353 46.5815 16.3185 47.2983 15.4344 47.2983H1.82706C0.942928 47.2983 0.226196 46.5815 0.226196 45.6974V36.0922Z" fill={iconColor} />
                        <path d="M25.84 42.4957C25.84 41.6115 26.5568 40.8948 27.4409 40.8948H31.4431C32.3272 40.8948 33.0439 41.6115 33.0439 42.4957V45.6974C33.0439 46.5815 32.3272 47.2983 31.4431 47.2983H27.4409C26.5568 47.2983 25.84 46.5815 25.84 45.6974V42.4957Z" fill={iconColor} />
                        <path d="M41.8487 35.5021C41.8487 34.8847 42.2038 34.3222 42.7613 34.0568L49.565 30.8169C50.0004 30.6096 50.5061 30.6096 50.9415 30.8169L57.7452 34.0568C58.3027 34.3222 58.6578 34.8847 58.6578 35.5021V45.6974C58.6578 46.5815 57.941 47.2983 57.0569 47.2983H43.4495C42.5654 47.2983 41.8487 46.5815 41.8487 45.6974V35.5021Z" fill={iconColor} />
                        <path d="M0.726196 2.47403C0.726196 1.86604 1.21907 1.37317 1.82706 1.37317H15.4344C16.0424 1.37317 16.5353 1.86604 16.5353 2.47403V12.6693C16.5353 13.0939 16.2911 13.4807 15.9077 13.6632L9.10404 16.9031C8.80461 17.0457 8.45686 17.0457 8.15744 16.9031L1.35376 13.6632C0.970397 13.4807 0.726196 13.0939 0.726196 12.6693V2.47403ZM26.34 2.47403C26.34 1.86604 26.8329 1.37317 27.4409 1.37317H31.4431C32.0511 1.37317 32.5439 1.86604 32.5439 2.47403V5.67576C32.5439 6.28375 32.0511 6.77663 31.4431 6.77663H27.4409C26.8329 6.77663 26.34 6.28375 26.34 5.67576V2.47403ZM42.3487 2.47403C42.3487 1.86604 42.8416 1.37317 43.4495 1.37317H57.0569C57.6649 1.37317 58.1578 1.86604 58.1578 2.47403V12.0792C58.1578 12.6872 57.6649 13.1801 57.0569 13.1801H43.4495C42.8416 13.1801 42.3487 12.6872 42.3487 12.0792V2.47403ZM0.726196 19.2831C0.726196 18.6751 1.21907 18.1823 1.82706 18.1823H15.4344C16.0424 18.1823 16.5353 18.6751 16.5353 19.2831V28.8883C16.5353 29.4963 16.0424 29.9892 15.4344 29.9892H1.82706C1.21907 29.9892 0.726196 29.4963 0.726196 28.8883V19.2831ZM21.5374 12.8797C21.5374 12.2717 22.0303 11.7788 22.6383 11.7788H36.2457C36.8536 11.7788 37.3465 12.2717 37.3465 12.8797V35.2918C37.3465 35.8998 36.8536 36.3926 36.2457 36.3926H22.6383C22.0303 36.3926 21.5374 35.8998 21.5374 35.2918V12.8797ZM42.3487 19.2831C42.3487 18.6751 42.8416 18.1823 43.4495 18.1823H57.0569C57.6649 18.1823 58.1578 18.6751 58.1578 19.2831V28.8883C58.1578 29.4963 57.6649 29.9892 57.0569 29.9892H43.4495C42.8416 29.9892 42.3487 29.4963 42.3487 28.8883V19.2831ZM0.726196 36.0922C0.726196 35.4842 1.21907 34.9913 1.82706 34.9913H15.4344C16.0424 34.9913 16.5353 35.4842 16.5353 36.0922V45.6974C16.5353 46.3054 16.0424 46.7983 15.4344 46.7983H1.82706C1.21907 46.7983 0.726196 46.3054 0.726196 45.6974V36.0922ZM26.34 42.4957C26.34 41.8877 26.8329 41.3948 27.4409 41.3948H31.4431C32.0511 41.3948 32.5439 41.8877 32.5439 42.4957V45.6974C32.5439 46.3054 32.0511 46.7983 31.4431 46.7983H27.4409C26.8329 46.7983 26.34 46.3054 26.34 45.6974V42.4957ZM42.3487 35.5021C42.3487 35.0775 42.5929 34.6907 42.9762 34.5082L49.7799 31.2683C50.0793 31.1258 50.4271 31.1258 50.7265 31.2683L57.5302 34.5082C57.9136 34.6907 58.1578 35.0775 58.1578 35.5021V45.6974C58.1578 46.3054 57.6649 46.7983 57.0569 46.7983H43.4495C42.8416 46.7983 42.3487 46.3054 42.3487 45.6974V35.5021Z" stroke="url(#paint0_linear_1_75)" strokeOpacity="0.5" />
                        <defs>
                            <linearGradient id="paint0_linear_1_75" x1="4.53168" y1="3.00098" x2="43.8513" y2="38.2601" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0.55" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CreditCard
