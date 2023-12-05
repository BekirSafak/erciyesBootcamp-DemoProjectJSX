import React from 'react'
import { TbTruckDelivery, } from 'react-icons/tb'
import { AiOutlineClose } from "react-icons/ai";

function Orders() {
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12 flex flex-col lg:flex-row justify-items-center'>
            <div className='flex flex-wrap gap-3 w-full justify-between mx-auto '>
                {/* Orders Basket Cards Start */}
                <div className='border shadow-lg rounded-lg gap-3 flex w-full me-3 my-2 text-center flex-col sm:flex-row '>
                    <img src={require('../assets/concert.jpg')} className='w-full h-[200px] object-fill rounded-lg' />
                    <div className='flex justify-between px-2 items-center w-full flex-col sm:flex-row '>
                        <div>
                            <p className='font-bold'>MilyonFest Kayseri</p>
                            <span className='text-sm text-purple-400 font-bold'>Tahmini Kargoya Teslim: 2 Gün</span>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700 font-bold">Adet</span>
                                <input
                                    type='number'
                                    max={10}
                                    min={0}
                                    placeholder='1'
                                    className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                >
                                </input>
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 font-bold p-3'>100TL</p>
                        </div>
                        <div className='p-2'>
                            <AiOutlineClose size={30} className='cursor-pointer hover:text-purple-800'></AiOutlineClose>
                        </div>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg gap-3 flex w-full me-3 my-2 text-center flex-col sm:flex-row '>
                    <img src={require('../assets/concert1.jpg')} className='w-full h-[200px] object-fill rounded-lg' />
                    <div className='flex justify-between px-2 items-center w-full flex-col sm:flex-row '>
                        <div>
                            <p className='font-bold'>Çukurova Rock Festivali</p>
                            <span className='text-sm text-purple-400 font-bold'>Tahmini Kargoya Teslim: 2 Gün</span>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700 font-bold">Adet</span>
                                <input
                                    type='number'
                                    max={10}
                                    min={0}
                                    placeholder='1'
                                    className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                >
                                </input>
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 font-bold p-3'>150TL</p>
                        </div>
                        <div className='p-2'>
                            <AiOutlineClose size={30} className='cursor-pointer hover:text-purple-800'></AiOutlineClose>
                        </div>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg gap-3 flex w-full me-3 my-2 text-center flex-col sm:flex-row '>
                    <img src={require('../assets/race1.png')} className='w-full h-[200px] object-fill rounded-lg' />
                    <div className='flex justify-between px-2 items-center w-full flex-col sm:flex-row '>
                        <div>
                            <p className='font-bold'>WRC Rally Turkey Marmaris</p>
                            <span className='text-sm text-purple-400 font-bold'>Tahmini Kargoya Teslim: 2 Gün</span>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700 font-bold">Adet</span>
                                <input
                                    type='number'
                                    max={10}
                                    min={0}
                                    placeholder='1'
                                    className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                >
                                </input>
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 font-bold p-3'>800TL</p>
                        </div>
                        <div className='p-2'>
                            <AiOutlineClose size={30} className='cursor-pointer hover:text-purple-800'></AiOutlineClose>
                        </div>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg gap-3 flex w-full me-3 my-2 text-center flex-col sm:flex-row '>
                    <img src={require('../assets/singer1.jpg')} className='w-full h-[200px] object-fill rounded-lg' />
                    <div className='flex justify-between px-2 items-center w-full flex-col sm:flex-row '>
                        <div>
                            <p className='font-bold'>PERA Konseri</p>
                            <span className='text-sm text-purple-400 font-bold'>Tahmini Kargoya Teslim: 2 Gün</span>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700 font-bold">Adet</span>
                                <input
                                    type='number'
                                    max={10}
                                    min={0}
                                    placeholder='1'
                                    className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                >
                                </input>
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 font-bold p-3'>350TL</p>
                        </div>
                        <div className='p-2'>
                            <AiOutlineClose size={30} className='cursor-pointer hover:text-purple-800'></AiOutlineClose>
                        </div>
                    </div>
                </div>
                {/* Orders Basket Cards End */}
            </div>

            {/* Orders Right Details and Buttons Start */}
            <div className='my-2 me-3'>
                <div className='border shadow-lg rounded-lg p-6 sticky top-20'>
                    <h2 className='text-purple-800 text-2xl font-bold mb-2'>Sipariş Özeti</h2>
                    <p className='text-gray-800 text-base font-bold mb-2'>Toplam Ürün Adeti: <span>3 Adet</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Toplam Fiyat: <span>1000TL</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Kargo Toplam: <span>50TL</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Genel Toplam: <span>1050TL</span></p>
                    <div className='my-3'>
                        <label className="block">
                            <input
                                type="text"
                                className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                                placeholder="İndirim Kodu Girebilirsiniz..."
                            />
                        </label>
                    </div>
                    <button className='bg-purple-800 hover:bg-purple-400 duration-300 text-white px-5 py-1 rounded-full border-none'>Sepeti Onayla</button>
                </div>



            </div>
            {/* Orders Right Details and Buttons End */}

        </div >
    )
}

export default Orders