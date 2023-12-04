import React, { useState } from 'react'

// Import MUI Sta
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// Import MUI End

import { questionData } from '../data/question/questionData.js'
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";



function Questions() {

    const [question, setQuestion] = useState(questionData)

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            {...props}
        />
    ))(({ theme }) => ({
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    }));



    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <div className='text-center'>
                <h1 className='text-purple-800 font-bold text-2xl lg:text-4xl text-center select-none'>Sıkça Sorulan Sorular</h1>
            </div>
            <div className='flex flex-col gap-4 items-center md:items-start justify-between md:flex-row '>
                <div className='mt-6 w-full text-center sm:w-1/6 sm:text-start'>
                    <h1 className='text-purple-800 text-xl lg:text-2xl font-bold mb-2 select-none'>Tüm Sorular</h1>
                    <ul className=''>
                        <li className='text-gray-800 text-base font-bold mb-2 hover:text-purple-400 cursor-pointer duration-300'>Hesaplar</li>
                        <li className='text-gray-800 text-base font-bold mb-2 hover:text-purple-400 cursor-pointer duration-300'>Ödemeler</li>
                        <li className='text-gray-800 text-base font-bold mb-2 hover:text-purple-400 cursor-pointer duration-300'>Kurallar</li>
                        <li className='text-gray-800 text-base font-bold mb-2 hover:text-purple-400 cursor-pointer duration-300'>Etkinlikler</li>
                        <li className='text-gray-800 text-base font-bold mb-2 hover:text-purple-400 cursor-pointer duration-300'>Rezervasyonlar</li>
                    </ul>
                </div>
                <div className='w-5/6 mt-4'>
                    {
                        question.map((item, index) => (
                            <Accordion key={index} expanded={expanded === item.id} onChange={handleChange(item.id)} sx={{ width: '100%', marginBottom: '15px' }}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderBottom: '4px rgb(107 33 168) solid', borderRadius: '0 0 18px 18px' }}>
                                    <Typography sx={{ fontWeight: 'bold' }} >{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderBottom: '3px  rgb(192 132 252) solid', borderRadius: '0 0 18px 18px' }}>
                                    <Typography className='break-words text-purple-400' sx={{ fontWeight: 'bold', fontSize: '14px', lineHeight: '20px', textIndent: '12px' }}>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }

                </div>
            </div>
        </div >
    )
}

export default Questions