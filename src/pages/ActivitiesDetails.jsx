import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from "../data/data.js";
import Maps from '../components/Maps.jsx';


function ActivitiesDetails() {
    const { id } = useParams()

    let activityID = data.find(q => q.id == id);

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <div className='mb-4 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4 pt-4 content-center w-full'>
                <img className='shadow-lg shadow-purple-400 col-span-2 rounded-lg h-full' src={activityID.image} alt={activityID.name} />
                {/* Forms Start */}
                <div className='shadow-lg shadow-purple-400 rounded-lg p-4'>
                    <div className="py-12 grid justify-items-center">
                        <h2 className="text-purple-800 text-2xl md:text-3xl font-bold">{activityID.name}</h2>
                        <div className="mt-8 max-w-md grid grid-cols-1">
                            <div className="grid grid-cols-1 gap-6">
                                <label className="block">
                                    <span className="text-gray-700">Ad Soyad</span>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                        placeholder=""
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Email</span>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                        placeholder="Eposta adresinizi giriniz..."
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Etkinlik Tarihi</span>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Kişi Sayısı</span>
                                    <input
                                        type='number'
                                        max={10}
                                        min={0}
                                        placeholder='En fazla 10 kişi!'
                                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                    >
                                    </input>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Fiyat</span>
                                    <input
                                        type='text'
                                        placeholder={`${activityID.price} TL`}
                                        readOnly
                                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                    >
                                    </input>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Özel Durumlar ve İstekler</span>
                                    <textarea
                                        className="resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                        rows="3"
                                    ></textarea>
                                </label>
                                <div className="block">
                                    <div className="mt-2">
                                        <div>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-purple-800 shadow-sm  focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                                    checked
                                                />
                                                <span className="ml-2">Katılım şartlarını ve koşullarını kabul ediyorum.</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between px-2 py-4 border-t-2'>
                                    <Link className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-400 hover:bg-purple-800 duration-300 text-white px-3 py-1 rounded-full border-none'>Rezervasyon Yap</Link>
                                    <button className='my-1 text-center text-xs md:text-base font-bold md:font-normal bg-purple-800 hover:bg-purple-400 duration-300 text-white px-3 py-1 rounded-full border-none'>Satın Al</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Forms End */}

            </div>
            <div className='relative h-[600px] w-full -z-10'>
                <Maps></Maps>
            </div>

        </div>
    )
}

export default ActivitiesDetails