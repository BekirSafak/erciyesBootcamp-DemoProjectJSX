import React, { useContext } from 'react'
import { TbTruckDelivery, } from 'react-icons/tb'
import { AiOutlineClose } from "react-icons/ai";
import { ActivitiesContext } from '../context/activitiesContext';
import OrderCard from './OrderCard';
import { SlBasket } from "react-icons/sl";
import { requirePropFactory } from '@mui/material';
import { act } from 'react-dom/test-utils';


function Orders() {
    const { activities } = useContext(ActivitiesContext)

    console.log("activities", activities);

    var totalPrice = activities.reduce((accumulator, activity) => {
        return accumulator + (Number(activity.quantity) * Number(activity.price));
    }, 0);

    var totalOrder = activities.reduce((accumulator, activity) => {
        return accumulator + (Number(activity.quantity));
    }, 0);

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12 flex flex-col lg:flex-row justify-items-center'>
            {/* Orders Basket Cards Start */}
            <div className='flex flex-wrap gap-3 w-full justify-between mx-auto'>
                {activities.length === 0 ? (
                    <div className='border h-auto lg:h-[400px] shadow-lg rounded-lg gap-3 flex flex-col items-center justify-center w-full me-3 my-2 p-8 text-center'>
                        <img className='h-full w-[250px] object-fill rounded-lg' src={require('../assets/trolley-cart.png')} alt="" />
                        <h1 className='text-purple-800 font-bold text-2xl md:text-4xl mt-4 text-center'>Sepetiniz Boş...</h1>
                    </div>

                ) : (
                    activities.map((item, index) => (
                        <OrderCard key={index} item={item} />
                    ))
                )}
            </div>
            {/* Orders Basket Cards End */}


            {/* Orders Right Details and Buttons Start */}
            <div className='my-2 me-3'>
                <div className='border shadow-lg rounded-lg p-6 sticky top-20'>
                    <h2 className='text-purple-800 text-2xl font-bold mb-2'>Sipariş Özeti</h2>
                    <p className='text-gray-800 text-base font-bold mb-2'>Toplam Ürün Adeti: <span>{totalOrder}</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Toplam Fiyat: <span>1000TL</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Kargo Toplam: <span>50TL</span></p>
                    <p className='text-gray-800 text-base font-bold mb-2'>Genel Toplam: <span>{totalPrice.toFixed(2)}</span></p>
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