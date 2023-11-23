import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


export default function Carousel({ children: slides }) {
    let [curr, setCurr] = useState(0);

    let prev = () => {
        setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))
    }

    let next = () => {
        setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="absolute z-10 inset-0 flex items-center justify-between">
                <button onClick={prev} className="p-1 mx-3 rounded-full bg-white/40 border-none hover:bg-white">
                    <BsChevronLeft size={40}></BsChevronLeft>
                </button>
                <button onClick={next} className="p-1 mx-3 rounded-full bg-white/40 border-none hover:bg-white">
                    <BsChevronRight size={40}></BsChevronRight>
                </button>
            </div>
        </div>

    )
}
