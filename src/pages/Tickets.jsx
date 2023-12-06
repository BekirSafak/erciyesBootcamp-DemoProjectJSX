import React from 'react'
import { useParams } from 'react-router-dom';
import MapsTickets from '../components/MapsTickets.jsx'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapOptions } from '../components/MapConfing.jsx';

function Tickets() {

    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey
    })

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            {/* Tickets Filters Start  */}
            <div className='flex flex-wrap m'>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Tümü</button>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Yaklaşan Biletler</button>
                <button className='text-xs md:text-base font-bold md:font-normal m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Geçen Biletler</button>
            </div>
            {/* Tickets Filters End  */}

            <div className='flex flex-col lg:flex-row justify-items-center'>
                {/* Tickets Left Start */}
                <div className='flex flex-wrap gap-3 w-full justify-between mx-auto '>
                    {/* Tickets Cards Start */}
                    <div className='border shadow-lg rounded-lg gap-3 w-full me-3 my-2 text-center relative'>
                        <h2 className='text-center text-purple-800 font-bold select-none border rounded-t-lg'>Malesef Biletinizin Süresi Geçti.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                            <img src={require('../assets/singer.jpg')} alt="" className='max-w-none md:max-w-[300px] w-full h-[200px] object-fill rounded-none md:rounded-bl-lg' />
                            <p className='p-6 text-gray-700 font-bold select-none text-sm xl:text-base'>Sahne Senin Karaoke Etkinliği</p>
                            <p className='p-6 text-gray-700 font-bold select-none text-sm xl:text-base'>Bilet Tarihi: <span>19.10.2023</span></p>
                            <p className='p-6 text-gray-700 font-bold select-none text-sm xl:text-base'>Bilet Adeti: <span>1 </span></p>
                            <p className='p-6 text-gray-700 font-bold select-none text-sm xl:text-base hidden xl:block'>Bilet Fiyatı: <span>550TL</span></p>
                        </div>
                        {/* Tickets Number Start */}
                        <div className='absolute right-6 bottom-1'>
                            <div className='flex justify-between items-center'>
                                <div className='bg-gray-400 select-none w-3 h-3 md:w-4 md:h-4 rounded-full flex justify-between items-center me-1'></div>
                                <span className='text-gray-400 select-none font-bold text-xs md:text-sm'>Bilet No: 383209</span>
                            </div>
                        </div>
                        {/* Tickets Number End */}
                    </div>
                    {/* Tickets Cards End */}

                    {/* Tickets Cards Start */}
                    <div className='border shadow-lg rounded-lg gap-3 w-full me-3 my-2 text-center relative'>
                        <h2 className='text-center text-purple-800 font-bold select-none border rounded-t-lg'>Biletinizin Süresi Yaklaşıyor.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                            <img src={require('../assets/race1.png')} alt="" className='max-w-none md:max-w-[300px] w-full h-[200px] object-fill rounded-none md:rounded-bl-lg' />
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>WRC Rally Turkey Marmaris</p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Tarihi: <span>19.10.2023</span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Adeti: <span>1 </span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base hidden xl:block'>Bilet Fiyatı: <span>800TL</span></p>
                        </div>

                        {/* Tickets Number Start */}
                        <div className='absolute right-6 bottom-1'>
                            <div className='flex justify-between items-center'>
                                <div className='bg-purple-800 select-none w-3 h-3 md:w-4 md:h-4 rounded-full flex justify-between items-center me-1'></div>
                                <span className='text-purple-800 select-none font-bold text-xs md:text-sm'>Bilet No: 425343</span>
                            </div>
                        </div>
                        {/* Tickets Number End */}
                    </div>
                    {/* Tickets Cards End */}

                    {/* Tickets Cards Start */}
                    <div className='border shadow-lg rounded-lg gap-3 w-full me-3 my-2 text-center relative'>
                        <h2 className='text-center text-purple-800 font-bold select-none border rounded-t-lg'>Biletinizin Süresi Devam Ediyor.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                            <img src={require('../assets/race.jpg')} alt="" className='max-w-none md:max-w-[300px] w-full h-[200px] object-fill rounded-none md:rounded-bl-lg' />
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Formula 1 Turkish GP İstanbul</p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Tarihi: <span>19.10.2023</span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Adeti: <span>1 </span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base hidden xl:block'>Bilet Fiyatı: <span>850TL</span></p>
                        </div>


                        {/* Tickets Number Start */}
                        <div className='absolute right-6 bottom-1'>
                            <div className='flex justify-between items-center'>
                                <div className='bg-purple-400 select-none w-3 h-3 md:w-4 md:h-4 rounded-full flex justify-between items-center me-1'></div>
                                <span className='text-purple-400 select-none font-bold text-xs md:text-sm'>Bilet No: 183209</span>
                            </div>
                        </div>
                        {/* Tickets Number End */}
                    </div>
                    {/* Tickets Cards End */}


                    {/* Tickets Cards Start */}
                    <div className='border shadow-lg rounded-lg gap-3 w-full me-3 my-2 text-center relative'>
                        <h2 className='text-center text-purple-800 font-bold select-none border rounded-t-lg'>Biletinizin Süresi Yaklaşıyor.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                            <img src={require('../assets/singer1.jpg')} alt="" className='max-w-none md:max-w-[300px] w-full h-[200px] object-fill rounded-none md:rounded-bl-lg' />
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Pera Konseri</p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Tarihi: <span>19.10.2023</span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base'>Bilet Adeti: <span>1</span></p>
                            <p className='p-6 text-gray-700 select-none font-bold text-sm xl:text-base hidden xl:block'>Bilet Fiyatı: <span>350TL</span></p>
                        </div>


                        {/* Tickets Number Start */}
                        <div className='absolute right-6 bottom-1'>
                            <div className='flex justify-between items-center'>
                                <div className='bg-purple-800 select-none w-3 h-3 md:w-4 md:h-4 rounded-full flex justify-between items-center me-1'></div>
                                <span className='text-purple-800 select-none font-bold text-xs md:text-sm'>Bilet No: 713209</span>
                            </div>
                        </div>
                        {/* Tickets Number End */}
                    </div>
                    {/* Tickets Cards End */}

                    {/* Tickets Cards Start */}
                    <div className='border shadow-lg rounded-lg gap-3 w-full me-3 my-2 text-center relative'>
                        <h2 className='text-center text-purple-800 font-bold select-none border rounded-t-lg'>Biletinizin Süresi Yaklaşıyor.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                            <img src={require('../assets/dance.jpg')} alt="" className='max-w-none md:max-w-[300px] w-full h-[200px] object-fill rounded-none md:rounded-bl-lg' />
                            <p className=' p-6 text-gray-700 select-none font-bold text-sm xl-text-base'>90'lar Dans Gecesi</p>
                            <p className=' p-6 text-gray-700 select-none font-bold text-sm xl-text-base'>Bilet Tarihi: <span>19.10.2023</span></p>
                            <p className=' p-6 text-gray-700 select-none font-bold text-sm xl-text-base'>Bilet Adeti: <span>1 </span></p>
                            <p className=' p-6 text-gray-700 select-none font-bold text-sm xl-text-base hidden xl:block'>Bilet Fiyatı: <span>500TL</span></p>
                        </div>
                        {/* Tickets Number Start */}
                        <div className='absolute right-6 bottom-1'>
                            <div className='flex justify-between items-center'>
                                <div className='bg-purple-800 select-none w-3 h-3 md:w-4 md:h-4 rounded-full flex justify-between items-center me-1'></div>
                                <span className='text-purple-800 select-none font-bold text-xs md:text-sm'>Bilet No: 323209</span>
                            </div>
                        </div>
                        {/* Tickets Number End */}
                    </div>
                    {/* Tickets Cards End */}
                </div>
                {/* Tickets Left Start */}

                {/* Tickets Right Maps and Buttons Start */}
                <div className='my-2 me-3 text-center'>
                    <div className='border shadow-lg rounded-lg p-6 sticky top-20'>
                        <h2 className='mb-2 text-center text-purple-800 font-bold select-none'>Etkinlik Konumu</h2>
                        {/* Tickets Maps Details Start */}
                        <MapsTickets className="w-full" isLoaded={isLoaded}></MapsTickets>
                        {/* Tickets Maps Details End*/}
                        <div className='my-3 text-center flex justify-center'>
                            <label className="block">
                                <input
                                    type="text"
                                    className="text-center mt-1 block rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                    placeholder="Bilet Kodunu Girebilirsiniz..."
                                />
                            </label>
                        </div>
                        <button className='bg-purple-800 hover:bg-purple-400 duration-300 text-white px-5 py-1 rounded-full border-none'>Konumu Göster</button>
                    </div>
                </div>
                {/* Tickets Right Maps and Buttons End */}
            </div>
        </div >
    )
}

export default Tickets