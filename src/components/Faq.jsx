import React, { useRef, useState } from 'react'
import plus from '/plus.svg'
import minus from '/minus.svg'

const FAQs = [
    {
        q: 'What credit score do I need to apply for a credit card?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: true
    },
    {
        q: 'How can I apply for a credit card online?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    },
    {
        q: 'Are there any annual fees associated with the credit card?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    },
    {
        q: 'How long does it take to receive the credit card once approved?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    },
    {
        q: 'How can I check my credit card balance and transactions?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    },
    {
        q: 'What should I do if my credit card is lost or stolen?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    },
    {
        q: 'Is my credit card information secure?',
        a: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        isExpanded: false
    }
]

function Faq({ faqs = FAQs }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFaq = (idx) => {
        setExpandedIndex(expandedIndex === idx ? null : idx);
    };

    return (
        <section className='my-32 flex justify-center px-6 lg:px-2'>
            <div className='lg:w-[50%]'>
                <h6 className='ff-m-plus-1-bold text-white text-center text-[20px] lg:text-[40px] mb-16'>FAQs</h6>
                <div className='flex flex-col gap-6'>
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            faq={faq}
                            isExpanded={expandedIndex === idx}
                            toggle={() => toggleFaq(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const FAQItem = ({ faq, isExpanded, toggle }) => {
    const contentRef = useRef(null);

    return (
        <div className="border-b-1 border-white cursor-pointer pb-4" onClick={toggle}>
            <div className="flex justify-between items-center gap-2">
                <h6 className="text-white ff-m-plus-1-bold text-base lg:text-2xl">{faq.q}</h6>
                <img
                    src={isExpanded ? minus : plus}
                    alt={isExpanded ? "minus" : "plus"}
                    className="h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-300"
                />
            </div>

            <div
                ref={contentRef}
                className="overflow-hidden transition-[height] duration-500 ease-in-out"
                style={{ height: isExpanded ? contentRef.current?.scrollHeight : 0 }}
            >
                <p className="text-gray ff-m-plus-1-regular text-sm lg:text-base">{faq.a}</p>
            </div>
        </div>
    );
};

export default Faq
