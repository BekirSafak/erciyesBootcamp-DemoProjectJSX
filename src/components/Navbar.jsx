import { React, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaIcons, FaParachuteBox } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    let [nav, setNavbar] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "light" ? "dark" : "light"
    )


    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        if (theme == 'dark') {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")

        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 bg-white dark:bg-black z-30">
            {/* Left Side Start */}
            <div className='flex items-center'>
                <div onClick={() => setNavbar(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} className='hover:text-purple-800 duration-300'></AiOutlineMenu>
                </div>
                <Link to={'/'}>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-purple-400'>Erciyes<span className='font-bold text-purple-800'>Kayseri</span></h1>
                </Link>
                <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text[14px]'>
                    <p className='bg-black text-white rounded-full p-2 cursor-pointer' onClick={changeTheme}>{theme}</p>
                    <p className='p-2'>On</p>
                </div>
            </div>
            {/* Left Side End */}

            {/* Search Input Start */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}></AiOutlineSearch>
                {/*   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" */}
                <input className='bg-transparent p-2 w-full border-none shadow-sm focus:border-none focus:ring-0 focus:ring-opacity-50' type="text" placeholder='Özgürce tüm etkinleri arayabilirsiniz...' />
            </div>
            {/* Search Input End */}

            {/* Cart Button Start */}
            <Link to={'/orders'} className='bg-purple-800 hover:bg-purple-400 duration-300 text-white hidden md:flex items-center px-5 py-2 rounded-full border-none'>
                <BsFillCartFill size={20} className='mr-2'></BsFillCartFill> Sepet
            </Link>
            {/* Cart Button End */}

            {/* Responsive Menu Start */}
            {/* ------------> Transparent BG Start */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            {/* ------------> Transparent BG End */}

            {/* ------------> Res.Side Menu Start */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300'}>
                <AiOutlineClose onClick={() => setNavbar(!nav)} size={40} className='absolute right-4 top-4 cursor-pointer hover:text-purple-800 duration-300'></AiOutlineClose>
                <h2 className='text-2xl p-4 text-purple-400'>
                    Erciyes <span className='font-bold text-purple-800'>Kayseri</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <Link to={'/campains'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <FaParachuteBox size={25} className='mr-4'></FaParachuteBox> Kampanyalar
                        </Link>
                        <Link to={'/orders'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <TbTruckDelivery size={25} className='mr-4'></TbTruckDelivery> Siparişlerim
                        </Link>
                        <li className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <MdFavorite size={25} className='mr-4'></MdFavorite> Favorilerim
                        </li>
                        <li className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <FaIcons size={25} className='mr-4'></FaIcons> Etkinlikler
                        </li>
                        <li className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <FaWallet size={25} className='mr-4'></FaWallet> Biletlerim
                        </li>
                        <li className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
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