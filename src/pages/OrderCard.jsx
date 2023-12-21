import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ActivitiesContext } from '../context/activitiesContext'


function OrderCard({ item }) {
    const { removeToOrder, changeActivityQuantity } = useContext(ActivitiesContext)

    const [quantity, setQuantity] = useState(1);

    const handleRemove = () => {
        removeToOrder(item.id)
    }

    const onChangeQuantity = (quantity) => {
        setQuantity(quantity);
        changeActivityQuantity({ id: item.id, quantity: quantity });
    }

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    return (
        <div className='border h-auto lg:h-[200px] shadow-lg rounded-lg gap-3 flex w-full me-3 my-2 text-center flex-col sm:flex-row'>
            <img src={item.image} className='w-full max-h-[200px] object-fill rounded-lg' />
            <div className='flex justify-between px-2 items-center w-full flex-col sm:flex-row '>
                <div>
                    <p className='font-bold'>{item.name}</p>
                    <span className='text-sm text-purple-400 font-bold'>Tahmini Kargoya Teslim: 2 Gün</span>
                </div>
                <div>
                    <label className="block">
                        <span className="text-gray-700 font-bold">Adet</span>
                        <input
                            type='number'
                            max={10}
                            min={1}
                            onChange={(e) => onChangeQuantity(e.target.value)}
                            value={quantity}
                            placeholder='1'
                            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-800 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                        >
                        </input>
                    </label>
                </div>
                <div>
                    <p className='text-gray-700 font-bold p-3'>{item.price.toFixed(2)}</p>
                </div>
                <div className='p-2'>
                    <AiOutlineClose onClick={handleRemove} size={30} className='cursor-pointer hover:text-purple-800'></AiOutlineClose>
                </div>
            </div>

        </div>
    )
}

export default OrderCard