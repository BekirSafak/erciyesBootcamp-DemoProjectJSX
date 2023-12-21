import React, { useContext } from 'react'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ActivitiesContext } from '../context/activitiesContext';

function ActivitiesCard({ index, item}) {
    const { addToOrders } = useContext(ActivitiesContext)
    const handleAdd = () => {
        addToOrders(item)

    }

    return (
        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 relative'>
            <FaHeartCirclePlus size={25} className='absolute opacity-80 hover:opacity-100 duration-300 rounded-full right-2 top-2 text-white cursor-pointer hover:text-purple-300 scale-100 hover:scale-125'></FaHeartCirclePlus  >
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-fill rounded-t-lg' />
            <div className='flex justify-between px-2 py-4 h-[75px]'>
                <p className='font-bold'>{item.name}</p>
                <p className=''>
                    <span className='text-xs xl:text-base text-purple-800 font-bold select-none p-1 rounded-full'>{item.price.toFixed(2)} TL</span>
                </p>
            </div>

            {/* Buy BTN Start */}
            <div className='flex flex-col md:flex-row justify-between px-2 py-4 border-t-2'>
                <Link to={`activitiesdetails/${item.id}`} className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-400 hover:bg-purple-800 duration-300 text-white px-3 py-1 rounded-full border-none'>Detaylar</Link>
                <Link onClick={handleAdd} to={'/orders'} className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-800 hover:bg-purple-400 duration-300 text-white px-3 py-1 rounded-full border-none'>Sepete Ekle</Link>
            </div>
            {/* Buy BTN End */}
        </div>
    )
}

export default ActivitiesCard