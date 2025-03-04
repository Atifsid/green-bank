import React, { useEffect, useRef } from 'react'
import avatar1 from '/avatar1.png';
import avatar2 from '/avatar2.png';
import avatar3 from '/avatar3.png';

const testimonials = [
    {
        avatar: avatar1,
        username: 'Hadid Khan',
        work: 'UIUX Designer',
        text: 'Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.'
    },
    {
        avatar: avatar2,
        username: 'Wade Warren',
        work: 'Web Designer',
        text: `It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.`
    },
    {
        avatar: avatar3,
        username: 'Jenny Wilson',
        work: 'Trust Administrator',
        text: `I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.`
    }
]

function Testimonial() {
    const testimonialRef = useRef(null);

    useEffect(() => {
        if (testimonialRef.current) {
            const clonedNode = testimonialRef.current.cloneNode(true);
            clonedNode.setAttribute("aria-hidden", "true");
            testimonialRef.current.parentNode.appendChild(clonedNode);
        }
    }, []);

    return (
        <div className="mt-32 w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10px,_black_calc(100%-10px),transparent_100%)]">
                <ul
                    ref={testimonialRef}
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <TestimonialView
                                avatar={testimonial.avatar}
                                text={testimonial.text}
                                username={testimonial.username}
                                work={testimonial.work}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function TestimonialView({ text, username, work, avatar }) {
    return (
        <div className='flex flex-col gap-8 bg-[#27322F3D] backdrop-blur-lg py-12 px-6 rounded-4xl min-w-[371px] min-h-[331px]'>
            <div className='p-4 bg-container w-fit rounded-full'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4962 4.25098C3.62469 5.58431 3 12.251 3 12.251M3 12.251V16.5029C3 17.1981 3 17.5457 3.05736 17.8348C3.2937 19.026 4.22493 19.9573 5.41618 20.1936C5.70527 20.251 6.05289 20.251 6.74812 20.251V20.251C7.44335 20.251 7.79097 20.251 8.08006 20.1936C9.2713 19.9573 10.2025 19.026 10.4389 17.8348C10.4962 17.5457 10.4962 17.1981 10.4962 16.5029V16.251C10.4962 15.321 10.4962 14.856 10.394 14.4745C10.1166 13.4392 9.30797 12.6306 8.2727 12.3532C7.8912 12.251 7.42621 12.251 6.49624 12.251H3Z" stroke="white" strokeWidth="1.5" />
                    <path d="M21 4.25098C14.1285 5.58431 13.5038 12.251 13.5038 12.251M13.5038 12.251V16.5029C13.5038 17.1981 13.5038 17.5457 13.5611 17.8348C13.7975 19.026 14.7287 19.9573 15.9199 20.1936C16.209 20.251 16.5567 20.251 17.2519 20.251V20.251C17.9471 20.251 18.2947 20.251 18.5838 20.1936C19.7751 19.9573 20.7063 19.026 20.9427 17.8348C21 17.5457 21 17.1981 21 16.5029V16.251C21 15.321 21 14.856 20.8978 14.4745C20.6204 13.4392 19.8117 12.6306 18.7765 12.3532C18.395 12.251 17.93 12.251 17 12.251H13.5038Z" stroke="white" strokeWidth="1.5" />
                </svg>
            </div>

            <p className='ff-m-plus-1-regular text-white text-[14px]/5.5'>
                {`"${text}"`}
            </p>
            <div className='flex items-center gap-2'>
                <img src={avatar} alt="User 1" className="w-12 h-12 object-cover" />
                <div>
                    <h6 className='ff-m-plus-1-medium text-white text-base'>{username}</h6>
                    <h6 className='ff-m-plus-1-regular text-gray text-[12px]'>{work}</h6>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
