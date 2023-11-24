import { React, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaIcons, FaParachuteBox } from "react-icons/fa";

function Navbar() {
    let [nav, setNavbar] = useState(false);
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left Side Start */}
            <div className='flex items-center'>
                <div onClick={() => setNavbar(!nav)} className='cursor-pointer'>
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

            {/* Responsive Menu Start */}
            {/* ------------> Transparent BG Start */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            {/* ------------> Transparent BG End */}

            {/* ------------> Res.Side Menu Start */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300'}>
                <AiOutlineClose onClick={() => setNavbar(!nav)} size={40} className='absolute right-4 top-4 cursor-pointer'></AiOutlineClose>
                <h2 className='text-2xl p-4 text-purple-400'>
                    Erciyes <span className='font-bold text-purple-800'>Kayseri</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <FaParachuteBox size={25} className='mr-4'></FaParachuteBox> Kampanyalar
                        </li>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4'></TbTruckDelivery> Siparişlerim
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdFavorite size={25} className='mr-4'></MdFavorite> Favorilerim
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaIcons size={25} className='mr-4'></FaIcons> Etkinlikler
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaWallet size={25} className='mr-4'></FaWallet> Biletlerim
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25} className='mr-4'></MdHelp> S.S.S
                        </li>
                    </ul>
                </nav>
            </div>
            {/* ------------> Res.Side Menu End */}
            {/* Responsive Menu End */}
        </div>
    )
}

export default Navbar