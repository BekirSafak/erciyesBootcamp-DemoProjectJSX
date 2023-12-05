import { React, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// Import IMG Start
import camper from '../assets/camper.jpg'
import camper1 from '../assets/camper1.jpg'
import cinema from '../assets/cinema.jpg'
import concert from '../assets/concert.jpg'
import concert1 from '../assets/concert1.jpg'
import singer from '../assets/singer.jpg'
import theatre from '../assets/theatre.jpg'
import theatre1 from '../assets/theatre1.jpg'
// Import IMG End
import Carousel from './Carousel';

function Slider() {
    let slides = [
        { srcImg: singer, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: camper, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: camper1, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: cinema, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: concert, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: concert1, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: theatre, upText: '', upSpan: '', downText: '', downSpan: '' },
        { srcImg: theatre1, upText: '', upSpan: '', downText: '', downSpan: '' },
    ]

    let slidesText = [
    ]
    return (
        <div className='max-w-[1640px] mx-auto p-4'>

            <div className='max-h-[600px] relative'>

                <div className='overflow-hidden relative w-ful'>
                    <Carousel className='flex'>
                        {slides.map((e) => (
                            <img className='min-w-full max-h-[600px]' src={e.srcImg} alt="" />
                        ))}
                    </Carousel>

                    <div className='px-12 top-1 absolute z-12 w-full h-full text-gray-200 max-h-[600px] bg-black/10 flex flex-col justify-center'>
                        <h1 style={{ textShadow: '1px 0px 17px rgba(255,255,255,0.85)' }} className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >En <span className='text-purple-800'>İyiler</span></h1>
                        <h1 style={{ textShadow: '1px 0px 17px rgba(255,255,255,0.85)' }} className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' ><span className='text-purple-800'>Daima </span>Burada!</h1>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Slider