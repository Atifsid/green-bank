import React, { useEffect, useRef } from 'react'
import dell from '/dell.svg'
import nyt from '/nyt.svg'
import petal from '/petal.svg'
import rakuten from '/rakuten.svg'
import upwork from '/upwork.svg'
import vice from '/vice.svg'

const images = [upwork, petal, rakuten, nyt, vice, dell];

function LogoSection() {
    const logosRef = useRef(null);

    useEffect(() => {
        if (logosRef.current) {
            const clonedNode = logosRef.current.cloneNode(true);
            clonedNode.setAttribute("aria-hidden", "true");
            logosRef.current.parentNode.appendChild(clonedNode);
        }
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul
                    ref={logosRef}
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                    {images.map((image, index) => (
                        <li key={index}>
                            <img src={image} alt={`logo-${index}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LogoSection
