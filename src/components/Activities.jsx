import React from 'react'
import { data } from '../data/data.js';

function Activities() {
    console.log(data)
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-purple-800 font-bold text-4xl text-center'>Tüm Etkinlikler Burada!</h1>

            {/* Filters BTNS Start  */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Type BTNS Start */}
                <div>
                    <p className='font-bold text-gray-700'>Filtrele</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Tümü</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Konser</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Spor</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Sinema</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Tiyatro</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Müzik</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Dans</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Kamp</button>
                    </div>
                </div>
                {/* Type BTNS End*/}

                {/* Price BTNS Start */}
                <div>
                    <p className='font-bold text-gray-700'>Fiyat</p>
                    <div className='flex justify-between max-w-[500px] w-full'>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>0-150</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>150-250</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>300-450</button>
                        <button className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>450-1000</button>
                    </div>
                </div>
                {/* Price BTNS End*/}
            </div>
            {/* Filters BTNS End  */}
        </div>
    )
}

export default Activities