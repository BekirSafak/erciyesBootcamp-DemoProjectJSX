import React from 'react'

// Import IMG Start
import camper from '../assets/camper.jpg'
import camper1 from '../assets/camper1.jpg'
import cinema from '../assets/cinema.jpg'
import concert from '../assets/concert.jpg'
import concert1 from '../assets/concert1.jpg'
import singer from '../assets/singer.jpg'
import theatre from '../assets/theatre.jpg'
import theatre1 from '../assets/theatre1.jpg'
// Import IMG End

function Suggestions() {
    return (
        // Favorites Cards Start
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card-1 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Çukurova Rock Festivali</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Tüm müzikseverlere %100 müzik ve eğlence ile gerçek bir festival deneyimi yaşatacak olan festival.</p>
                    <button className='bg-purple-800 text-white mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={concert1} alt="" />
            </div>
            {/* Card-1 End */}

            {/* Card-2 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Güldür Güldür Show</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Ekranların beğenilen komedi programı Güldür Güldür Show şehre kahkahayı getiriyor.</p>
                    <button className='bg-purple-800 text-white mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={theatre1} alt="" />
            </div>
            {/* Card-2 End */}

            {/* Card-3 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Gesi Güzelköy Doğa Yürüyüşü</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Huzura ihtiyaç duyduğumuz şu günlerde şehri ve gürültüyü bırakarak güzel bir yürüyüşe gidiyoruz.</p>
                    <button className='bg-purple-800 text-white mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={camper1} alt="" />
            </div>
            {/* Card-3 End */}
        </div>
        // Favorites Cards End

    )
}

export default Suggestions