import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-purple-100'>
            <div className='max-w-[1640px] mx-auto items-center p-4'>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-purple-400 cursor-pointer'>Erciyes<span className='font-bold text-purple-800'>Kayseri</span></h1>
                    <p className='select-none invisible lg:visible text-purple-400 font-bold px-2 indent-2'>Kayserinin en iyi etkinliklerini düzenleyen milyonlara ulaştıran yeni nesil online sosyal etkinlik sitesi.</p>
                    <div className='flex gap-4'>
                        <a className='bg-purple-800 hover:bg-purple-400 duration-300 p-4 rounded-full text-white' href=""><FaFacebookF /></a>
                        <a className='bg-purple-800 hover:bg-purple-400 duration-300 p-4 rounded-full text-white' href=""><FaInstagram /></a>
                        <a className='bg-purple-800 hover:bg-purple-400 duration-300 p-4 rounded-full text-white' href=""><FaYoutube /></a>
                        <a className='bg-purple-800 hover:bg-purple-400 duration-300 p-4 rounded-full text-white' href=""><FaTwitter /></a>
                    </div>
                </div>

                {/* Footer Links Start */}
                <div className='mt-10 flex flex-col md:flex-row items-center justify-between'>

                    {/* Footer Company Links Start */}
                    <div>
                        <h2 className='select-none mb-2 text-center md:text-start text-lg sm:text-2lg lg:text-3lg font-bold text-purple-800'>Kurumsal</h2>
                        <ul className='flex flex-col items-center md:items-start'>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Hakkımızda
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Gizlilik
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Kullanıcı Sözleşmesi
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Kullanım Koşulları
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                KVKK
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                İletişim
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Çerez Politikası
                            </li>
                        </ul>
                    </div>
                    {/* Footer Company Links End */}

                    {/* Footer Category Links Start */}
                    <div>
                        <h2 className='select-none mb-2 text-center md:text-start text-lg sm:text-2lg lg:text-3lg font-bold text-purple-800'>Kategoriler</h2>
                        <ul className='flex flex-col items-center md:items-start'>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Konser
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Spor
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Sinema
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Tiyatro
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Müzik
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Dans
                            </li>
                            <li className='flex text-sm text-purple-400 hover:text-purple-800 cursor-pointer duration-300 py-1 font-bold'>
                                Kamp
                            </li>
                        </ul>
                    </div>
                    {/* Footer Category Links End */}

                    {/* Footer Mobile App Links Start */}
                    <div className=''>
                        <h2 className='select-none mb-2 text-lg text-center sm:text-2lg lg:text-3lg font-bold text-purple-800'>Mobile Uygulamamızı İndirirek <br /> Süper Fırsatlardan Yararlanabilirsiniz.</h2>
                        <ul className='flex gap-4 text-center items-center'>
                            <li className='flex text-sm bg-purple-400 p-0 rounded-lg cursor-pointer duration-300 font-bold hover:scale-105'>
                                <img src={require('../assets/google-play.png')} alt="" />
                            </li>
                            <li className='flex text-sm bg-purple-400 p-0 rounded-lg cursor-pointer duration-300 font-bold hover:scale-105'>
                                <img src={require('../assets/app-store.png')} alt="" />
                            </li>
                        </ul>
                    </div>
                    {/* Footer Mobile App Links End */}

                </div>
                {/* Footer Links Start */}

                <div className='select-none mt-10 flex justify-end text-center items-center'>
                    <h1 className='text-lg text-purple-400'>Erciyes<span className='font-bold text-purple-800'>Kayseri </span><span className='text-purple-400 font-bold text-sm'>© Tüm Hakları Saklıdır. | Tasarım Bekir ŞAFAK</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer