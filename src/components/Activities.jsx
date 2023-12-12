import React, { useState } from 'react'
import { data } from '../data/data.js';
import { Link } from 'react-router-dom';

function Activities() {
    console.log(data)

    let [activity, setActivty] = useState(data);

    // Type Filters Start
    const filterType = (category) => {
        setActivty(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    // Type Filters End

    // Price Filters Start
    const filterPrice = (price) => {
        setActivty(
            data.filter((item) => {
                let [minPrice, maxPrice] = price.split('-');
                let itemPrice = parseInt(item.price);

                return itemPrice >= parseInt(minPrice) && itemPrice <= parseInt(maxPrice);
            })
        )
    }
    // Price Filters End


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-purple-800 font-bold text-2xl md:text-4xl text-center'>Tüm Etkinlikler Burada!</h1>

            {/* Filters BTNS Start  */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Type BTNS Start */}
                <div>
                    <p className='font-bold text-gray-700'>Filtrele</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setActivty(data)} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Tümü</button>
                        <button onClick={() => filterType('concert')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Konser</button>
                        <button onClick={() => filterType('spor')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Spor</button>
                        <button onClick={() => filterType('cinema')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Sinema</button>
                        <button onClick={() => filterType('theatre')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Tiyatro</button>
                        <button onClick={() => filterType('music')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Müzik</button>
                        <button onClick={() => filterType('dance')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Dans</button>
                        <button onClick={() => filterType('camper')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Kamp</button>
                    </div>
                </div>
                {/* Type BTNS End*/}

                {/* Price BTNS Start */}
                <div>
                    <p className='font-bold text-gray-700'>Fiyat</p>
                    <div className='flex justify-between max-w-[500px] w-full'>
                        <button onClick={() => filterPrice('0-150')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>0-150</button>
                        <button onClick={() => filterPrice('150-250')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>150-250</button>
                        <button onClick={() => filterPrice('300-450')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>300-450</button>
                        <button onClick={() => filterPrice('450-1000')} className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>450-1000</button>
                    </div>
                </div>
                {/* Price BTNS End*/}
            </div>
            {/* Filters BTNS End  */}

            {/* Activty Start */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {activity.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-fill rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4 h-[75px]'>
                            <p className='font-bold'>{item.name}</p>
                            <p className=''>
                                <span className='text-xs xl:text-base text-purple-800 font-bold select-none p-1 rounded-full'>{item.price} TL</span>
                            </p>
                        </div>

                        {/* Buy BTN Start */}
                        <div className='flex flex-col md:flex-row justify-between px-2 py-4 border-t-2'>
                            <Link to={`activitiesdetails/${item.id}`} className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-400 hover:bg-purple-800 duration-300 text-white px-3 py-1 rounded-full border-none'>Detaylar</Link>
                            <Link to={'/orders'} className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-800 hover:bg-purple-400 duration-300 text-white px-3 py-1 rounded-full border-none'>Sepete Ekle</Link>
                        </div>
                        {/* Buy BTN End */}
                    </div>
                ))}
            </div>
            {/* Activty End */}
        </div>
    )
}

export default Activities