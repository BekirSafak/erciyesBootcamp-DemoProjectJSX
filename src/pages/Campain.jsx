import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { campainData } from '../data/campain/campainData.js'
import { AiOutlineClose } from 'react-icons/ai';

// Import MUI Start
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// Import MUI End

function Campain() {
    // MUI Func End
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false)
    // MUI Func Start

    let [campains, setCampain] = useState(campainData)
    const [selectedCampain, setSelectedCampain] = useState(null);

    const handleOpen = (index) => {
        setSelectedCampain(campains[index]);
    };

    const handleClose = () => {
        setSelectedCampain(null);
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <div>
                <img className='w-full mb-5 shadow-lg' src={require('../assets/campainImg/mainCampain.webp')} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4'>
                {
                    campains.map((item, index) =>
                        <div key={index} className='w-max-[550px] w-full flex justify-center shadow-lg rounded-xl p-6' style={{ background: item.styleBG }}>
                            <div className='relative flex flex-col items-center justify-center'>
                                <img className='text-center w-[200px]' src={item.image} alt="" />
                                <div className='text-center mt-2 mb-2'>
                                    <h1 className='text-xl text-white uppercase'>{item.name}</h1>
                                    <p className='text-lg text-white font-bold'>{item.text}</p>

                                </div>
                                <Modal
                                    className='opacity-50'
                                    open={selectedCampain !== null}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-xl max-w-[550px] w-full items-center' >
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            <div className='flex justify-between items-center text-center'>
                                                <p className='select-none font-bold text-purple-800 text-xl md:text-2xl uppercase'>{selectedCampain?.name}</p>
                                                <div>
                                                    <AiOutlineClose onClick={handleClose} size={30} className='cursor-pointer hover:text-purple-400'></AiOutlineClose>
                                                </div>
                                            </div>
                                            <p className='select-none font-bold text-purple-400 text-sm md:text-lg uppercase'>{selectedCampain?.text}</p>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={selectedCampain?.imageModal} alt="" />
                                            <ul className='list-decimal  text-gray-400 py-2 px-6'>
                                                <li className='mt-2 text-xs md:text-base'>30 Kasım 2023 tarihine kadar Trendyol’da 500 TL ve üzeri işlemlerde peşin fiyatına 3 taksit, 6.000 TL üzeri işlemlerde peşin fiyatına 6 taksit imkanı sunulacaktır.</li>
                                                <li className='mt-2 text-xs md:text-base'>3 veya 6 taksit kampanyasına Bonus, Money Bonus, Flexi, Bonus Flexi, Bonus Genç, Bonus Business, Shop&Fly, Shop&Fly Business , Miles&Smiles Garanti BBVA , Miles&Smiles Garanti BBVA Business, American Express Card, Bonus American Express Card, Miles&Smiles American Express card, Shop&Fly American Express Card, Deniz Bonus, TEB Bonus, Şeker Bonus, ING Bonus, Türkiye Finans Happy Card, Alternatifbank Bonus, ICBC Turkey Bonus, Deniz Bonus Business, TEB Bonus Business, Şeker Bonus Business, Alternatifbank Bonus Business, ICBC Turkey Bonus Business, Türkiye Finans Happy Business Card dahildir.</li>
                                                <li className='mt-2 text-xs md:text-base'>Paracard dahil değildir.</li>
                                                <li className='mt-2 text-xs md:text-base'>Kampanyaya ek kartlar ve sanal kartlar dahildir.</li>
                                                <li className='mt-2 text-xs md:text-base'>Bu kampanya Garanti BBVA tarafından düzenlenmektedir.</li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </Modal>
                                <Link onClick={() => handleOpen(index)} className='bg-white hover:bg-slate-100 px-5 py-1 mx-2 bottom-4 rounded-full border-none'>Detaylar</Link>

                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Campain