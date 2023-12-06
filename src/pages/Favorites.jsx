import React, { useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { data } from '../data/data';
import { AiOutlineClose } from 'react-icons/ai';

function Favorites() {

    let [favorites, setFavorites] = useState(data);

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            {/* Favorites Search Start */}
            <div className='flex justify-between w-full'>
                <h1 className='flex justify-between items-center text-purple-400 text-2xl font-bold select-none'> <MdFavorite size={25} className='me-1 text-purple-800'></MdFavorite> Favorilerim</h1>
                <div className='hidden lg:block'>
                    <label className="block">
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                            placeholder="Favorileri Ara..."
                        />
                    </label>
                </div>
                {/* Favorites Search End */}
            </div>


            <div className='flex justify-start flex-wrap'>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white duration-300'>Tüm Favoriler</button>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white duration-300'>Avantajlı Ürünler</button>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white duration-300'>Fiyatı Düşenler</button>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white duration-300'>Kuponlu Ürünler</button>
            </div>

            {/* Favorites Start */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {favorites.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 relative'>
                        <AiOutlineClose size={25} className='absolute opacity-70 hover:opacity-100 duration-300 bg-purple-400 rounded-full right-2 top-2 text-white cursor-pointer hover:text-purple-800'></AiOutlineClose>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-fill rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4 h-[75px]'>
                            <p className='font-bold'>{item.name}</p>
                            <p className=''>
                                <span className='text-xs xl:text-base bg-purple-800 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>

                        {/* Buy BTN Start */}
                        <div className='flex flex-col md:flex-row justify-between px-2 py-4 border-t-2'>
                            <Link to={`activitiesdetails/${item.id}`} className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-400 hover:bg-purple-800 duration-300 text-white px-3 py-1 rounded-full border-none'>Detaylar</Link>
                            <button className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-800 hover:bg-purple-400 duration-300 text-white px-3 py-1 rounded-full border-none'>Sepete Ekle</button>
                        </div>
                        {/* Buy BTN End */}
                    </div>
                ))}
            </div>
            {/* Favorites End */}

        </div>
    )
}

export default Favorites