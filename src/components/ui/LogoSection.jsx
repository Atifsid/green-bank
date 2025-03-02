import React from 'react'
import dell from '/dell.svg'
import nyt from '/nyt.svg'
import petal from '/petal.svg'
import rakuten from '/rakuten.svg'
import upwork from '/upwork.svg'
import vice from '/vice.svg'
import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [upwork, petal, rakuten, nyt, vice, dell];

function LogoSection() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const items = carousel.children[0];

        gsap.to(items, {
            x: "-100%",
            duration: 12,
            ease: "linear",
            repeat: -1
        });

    }, []);

    return (
        <div className='flex justify-center'>
            <div ref={carouselRef} className="overflow-hidden whitespace-nowrap relative w-6xl">
                <div className='flex items-center gap-20'>
                    {[...images, ...images].map((img, i) => (
                        <img key={i} src={img} alt={`logo-${i}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection
