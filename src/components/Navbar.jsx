import { React, useEffect, useState, useContext } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaIcons, FaParachuteBox } from "react-icons/fa";
import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherShower, TiWeatherCloudy } from "react-icons/ti";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { data } from '../data/data.js';
import { ActivitiesContext } from '../context/activitiesContext.jsx';

function Navbar() {

    const { activities } = useContext(ActivitiesContext)

    var totalOrder = activities.reduce((accumulator, activity) => {
        return accumulator + (Number(activity.quantity));
    }, 0);

    let [nav, setNavbar] = useState(false);

    let [weatherData, setWeatherData] = useState(null)
    let [locationWeather, setLocationWeather] = useState('Kayseri')

    // Search Input Data Filter Start
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [valIn, setValIn] = useState('')

    const searchInput = (value) => {
        setSearchTerm(value);

        const filteredResults = data.filter(item => item.name.toLocaleLowerCase('TR').includes(value.toLocaleLowerCase('TR')));
        setFilteredData(filteredResults);
        console.log(filteredResults)
        setValIn(value)
    };
    // Search Input Data Filter End

    // Get Today Date "yyyy-MM-dd" Format Start
    useEffect(() => {
        let fetchData = async () => {
            try {
                // It's different from the Weather.jsx &days=1&aqi
                let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${locationWeather}&days=1&aqi=yes&alerts=yes`);
                setWeatherData(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        if (locationWeather) {
            fetchData();
        }
    }, [locationWeather]);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };
    // Get Today Date "yyyy-MM-dd" Format End

    // Weather Dynamic Icons Start
    const [iconIndex, setIconIndex] = useState(0);
    const wheatherIcons = [
        <TiWeatherSunny size={25} className='mr-4'></TiWeatherSunny>,
        <TiWeatherPartlySunny size={25} className='mr-4'></TiWeatherPartlySunny>,
        <TiWeatherShower size={25} className='mr-4'></TiWeatherShower>,
        <TiWeatherCloudy size={25} className='mr-4'></TiWeatherCloudy>
    ]
    useEffect(() => {
        const changeWeatherIcons = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % wheatherIcons.length);
        }, 800);

        return () => clearInterval(changeWeatherIcons);
    }, [wheatherIcons.length]);
    // Weather Dynamic Icons End

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 bg-white z-30">
            {/* Left Side Start */}
            <div className='flex items-center'>
                <div onClick={() => setNavbar(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} className='hover:text-purple-800 duration-300'></AiOutlineMenu>
                </div>
                <Link to={'/'}>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-purple-400'>Erciyes<span className='font-bold text-purple-800'>Kayseri</span></h1>
                </Link>
                <div className='hidden lg:flex item-center p-1'>
                    {/* Weather Day Box Start */}
                    {weatherData && (
                        <div className=''>
                            <div className='flex flex-col md:flex-row justify-between'>
                                {
                                    weatherData.forecast.forecastday.map((day) => {
                                        return (
                                            <div key={day.date} className={`flex items-center`}>
                                                <img src={day.day.condition.icon} alt="img" className='h-[30px] w-[30px] object-fill' />
                                                <h1 className='py-2 text-center text-xs text-purple-800 font-bold select-none'>{formatDate(day.date)}</h1>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )}
                    {/* Weather Day Box End */}
                </div>
            </div>
            {/* Left Side End */}

            {/* Search Input Start */}
            <div className='rounded-full hidden md:flex items-center px-2 w-[100px] sm:w-[300px] lg:w-[400px]'>
                <div className='flex flex-col relative'>
                    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[300px] lg:w-[400px]'>
                        <AiOutlineSearch size={25}></AiOutlineSearch>
                        <input onChange={(e) => searchInput(e.target.value)} className='bg-transparent p-2 w-full border-none shadow-sm focus:border-none focus:ring-0 focus:ring-opacity-50' type="text" placeholder='Özgürce tüm etkinleri arayabilirsiniz...' />
                    </div>
                    {/* Search Input End */}

                    {valIn &&
                        <div className='absolute hidden md:flex flex-col max-w-[500px] w-full top-12'>
                            {filteredData.map((item, index) => (
                                <div key={index} className='flex border shadow-lg rounded-lg hover:scale-105 duration-300'>
                                    <img src={item.image} alt={item.name} className='w-full max-w-[100px] object-fill' />
                                    <div className='flex justify-between px-2 py-4 bg-white w-full'>
                                        <p className='font-bold'>{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            {/* Search Input End */}

            {/* Cart Button Start */}
            <Link to={'/orders'} className='relative bg-purple-800 hover:bg-purple-400 duration-300 text-white hidden md:flex items-center px-5 py-2 rounded-full border-none'>
                <BsFillCartFill size={20} className='mr-2'></BsFillCartFill> Sepet
                <div className='bg-purple-400 hover:bg-purple-800 w-6 h-6 rounded-full flex items-center justify-center absolute -bottom-1 -left-2'>
                    <span>{totalOrder}</span>
                </div>
            </Link>
            {/* Cart Button End */}

            {/* Responsive Menu Start */}
            {/* ------------> Transparent BG Start */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            {/* ------------> Transparent BG End */}

            {/* ------------> Res.Side Menu Start */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300'}>
                <AiOutlineClose onClick={() => setNavbar(!nav)} size={40} className='absolute right-4 top-4 cursor-pointer hover:text-purple-800 duration-300'></AiOutlineClose>
                <Link to={'/'}>
                    <h2 className='text-2xl p-4 text-purple-400'>
                        Erciyes <span className='font-bold text-purple-800'>Kayseri</span>
                    </h2>
                </Link>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <Link to={'/campains'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <FaParachuteBox size={25} className='mr-4'></FaParachuteBox> Kampanyalar
                        </Link>
                        <Link to={'/orders'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <TbTruckDelivery size={25} className='mr-4'></TbTruckDelivery> Siparişlerim
                        </Link>
                        <Link to={'/favorites'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <MdFavorite size={25} className='mr-4'></MdFavorite> Favorilerim
                        </Link>
                        <Link to={'/tickets'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <FaWallet size={25} className='mr-4'></FaWallet> Biletlerim
                        </Link>
                        <Link to={'/weather'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            {wheatherIcons[iconIndex]} Hava Durumu
                        </Link>
                        <Link to={'/questions'} className='text-xl py-4 flex hover:text-purple-800 duration-300 cursor-pointer'>
                            <MdHelp size={25} className='mr-4'></MdHelp> S.S.S
                        </Link>
                    </ul>
                </nav>
            </div>
            {/* ------------> Res.Side Menu End */}
            {/* Responsive Menu End */}
        </div>
    )
}

export default Navbar