import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left Side Start */}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30}></AiOutlineMenu>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-purple-400'>Erciyes <span className='font-bold text-purple-800'>Kayseri</span></h1>
                <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Karanlık</p>
                    <p className='p-2'>Aydınlık</p>
                </div>
            </div>
            {/* Left Side End */}

            {/* Search Input Start */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}></AiOutlineSearch>
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Özgürce tüm etkinleri arayabilirsiniz...' />
            </div>
            {/* Search Input End */}

            {/* Cart Button Start */}
            <button className='bg-purple-800 text-white hidden md:flex items-center py-2 rounded-full border-none'>
                <BsFillCartFill size={20} className='mr-2'></BsFillCartFill> Sepet
            </button>
            {/* Cart Button End */}
        </div>
    )
}

export default Navbar