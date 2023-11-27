import React from 'react'

// Import MUI Start
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// Import MUI End

// Import IMG Start
import camper1 from '../assets/camper1.jpg'
import concert1 from '../assets/concert1.jpg'
import theatre1 from '../assets/theatre1.jpg'
// Import IMG End

import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

function Suggestions() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    // MUI Style Start
    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };
    // MUI Style END
    return (

        // Favorites Cards Start
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card-1 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Çukurova Rock Festivali</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Tüm müzikseverlere %100 müzik ve eğlence ile gerçek bir festival deneyimi yaşatacak olan festival.</p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-xl max-w-[550px] items-center' >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <div className='flex justify-between items-center text-center'>
                                    <p className='select-none font-bold text-purple-800 text-2xl'>Çukurova Rock Festivali</p>
                                    <div>
                                        <AiOutlineClose onClick={() => setOpen(false)} size={30} className='cursor-pointer hover:text-purple-400'></AiOutlineClose>
                                    </div>
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={concert1} alt="" />
                                <p className='select-none font-bold text-xl text-gray-800 pt-4'>Etkinlik Kuralları</p>
                                <ul className='list-decimal text-gray-400 py-2 px-6'>
                                    <li className='mt-2'>18 yaş altında olan katılımcılara (-18) bilekliği takılır. Bu bilekliği olmadığı tespit edilen veya bilekliğe hasar veren 18 yaş altı katılımcılar alan dışına çıkarılır.</li>
                                    <li className='mt-2'>0 - 6 yaş arası ücretsizdir.</li>
                                    <li className='mt-2'>Kapı açılış saati 15:00'tir.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Modal>
                    <Link onClick={handleOpen} className='bg-purple-800 text-white px-5 py-1 mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</Link>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={concert1} alt="" />
            </div>
            {/* Card-1 End */}

            {/* Card-2 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Güldür Güldür Show</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Ekranların beğenilen komedi programı Güldür Güldür Show şehre kahkahayı getiriyor.</p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title-1"
                        aria-describedby="modal-modal-description-1"
                    >
                        <Box className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-xl max-w-[550px] items-center' >
                            <Typography id="modal-modal-title-1" variant="h6" component="h2">
                                <div className='flex justify-between items-center text-center'>
                                    <p className='select-none font-bold text-purple-800 text-2xl'>Güldür Güldür Show</p>
                                    <div>
                                        <AiOutlineClose onClick={() => setOpen(false)} size={30} className='cursor-pointer hover:text-purple-400'></AiOutlineClose>
                                    </div>
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description-1" sx={{ mt: 2 }}>
                                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={theatre1} alt="" />
                                <p className='select-none font-bold text-xl text-gray-800 pt-4'>Etkinlik Kuralları</p>
                                <ul className='list-decimal text-gray-400 py-2 px-6'>
                                    <li className='mt-2'>18 yaş altında olan katılımcılara (-18) bilekliği takılır. Bu bilekliği olmadığı tespit edilen veya bilekliğe hasar veren 18 yaş altı katılımcılar alan dışına çıkarılır.</li>
                                    <li className='mt-2'>0 - 6 yaş arası ücretsizdir.</li>
                                    <li className='mt-2'>Kapı açılış saati 15:00'tir.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Modal>
                    <Link onClick={handleOpen} className='bg-purple-800 text-white px-5 py-1 mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</Link>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={theatre1} alt="" />
            </div>
            {/* Card-2 End */}

            {/* Card-3 Start */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/30 hover:bg-black/0 rounded-xl text-white'>
                    <p className='select-none font-bold text-2xl px-2 pt-4'>Gesi Güzelköy Doğa Yürüyüşü</p>
                    <p className='select-none invisible lg:visible indent-2 px-2'>Huzura ihtiyaç duyduğumuz şu günlerde şehri ve gürültüyü bırakarak güzel bir yürüyüşe gidiyoruz.</p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title-1"
                        aria-describedby="modal-modal-description-1"
                    >
                        <Box className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-xl max-w-[550px] items-center' >
                            <Typography id="modal-modal-title-1" variant="h6" component="h2">
                                <div className='flex justify-between items-center text-center'>
                                    <p className='select-none font-bold text-purple-800 text-2xl'>Gesi Güzelköy Doğa Yürüyüşü</p>
                                    <div>
                                        <AiOutlineClose onClick={() => setOpen(false)} size={30} className='cursor-pointer hover:text-purple-400'></AiOutlineClose>
                                    </div>
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description-1" sx={{ mt: 2 }}>
                                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={camper1} alt="" />
                                <p className='select-none font-bold text-xl text-gray-800 pt-4'>Etkinlik Kuralları</p>
                                <ul className='list-decimal text-gray-400 py-2 px-6'>
                                    <li className='mt-2'>18 yaş altında olan katılımcılara (-18) bilekliği takılır. Bu bilekliği olmadığı tespit edilen veya bilekliğe hasar veren 18 yaş altı katılımcılar alan dışına çıkarılır.</li>
                                    <li className='mt-2'>0 - 6 yaş arası ücretsizdir.</li>
                                    <li className='mt-2'>Kapı açılış saati 15:00'tir.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                    <li className='mt-2'>Son konser başlamasıyla beraber alana girişler kapatılmaktadır.</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Modal>
                    <Link onClick={handleOpen} className='bg-purple-800 text-white px-5 py-1 mx-2 absolute bottom-4 rounded-full border-none'>Detaylar</Link>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-fill rounded-xl' src={camper1} alt="" />
            </div>
            {/* Card-3 End */}
        </div>
        // Favorites Cards End

    )
}

export default Suggestions