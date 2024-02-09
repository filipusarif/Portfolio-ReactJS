import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function index(){
    const skill = [
        {
            id:0,
            tech:'HTML',
            img:'card1.svg'
        },
        {
            id:1,
            tech:'CSS',
            img:'card2.svg'
        },
        {
            id:2,
            tech:'JavaScript',
            img:'card3.svg'
        },
        {
            id:3,
            tech:'SASS/SCSS',
            img:'card4.svg'
        },
        {
            id:4,
            tech:'Tailwind',
            img:'card5.svg'
        },
        {
            id:5,
            tech:'Bootstrap',
            img:'card6.svg'
        },
        {
            id:6,
            tech:'ReactJS',
            img:'card7.svg'
        },
        {
            id:7,
            tech:'PHP',
            img:'card8.svg'
        },
        {
            id:8,
            tech:'Laravel',
            img:'card9.svg'
        },
        {
            id:9,
            tech:'C++',
            img:'card10.svg'
        },
        {
            id:10,
            tech:'Python',
            img:'card11.svg'
        },
        {
            id:11,
            tech:'Django',
            img:'card12.svg'
        },
        {
            id:12,
            tech:'MySql',
            img:'card13.svg'
        },
    ];


    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };
    
    return (
    <div className='w-screen h-fit flex relative' id='scroll'>
        <div className="h-[250px] flex items-center w-fit gap-4 animate-[scroller_40s_linear_infinite] mr-2" id="innerScroller">
            {skill.map(card => (
                <div className='h-[200px] w-[170px] bg-secondary py-2 rounded-[15px] cursor-pointer transition-all ease'
                onMouseEnter={() => handleHover(card.id)}
                onMouseLeave={() => handleHover(null)}>
                    <img src={`skill/${card.img}`} alt="Tech" className={`w-[65%] h-[150px] mx-auto transition duration-500 ease-in-out ${isHovered === card.id? "":"filter grayscale" }`}/>
                    <p className='text-center text-slate-200 font-bold font-Poppins'>{card.tech}</p>
                </div>
            ))}
            
        </div>
        <div className=' h-[250px] flex items-center w-fit gap-4 animate-[scroller_40s_linear_infinite] ml-2' id="innerScroller">
            {skill.map(card => (
                <div className='h-[200px] w-[170px] bg-secondary py-2 rounded-[15px] cursor-pointer transition-all ease'
                onMouseEnter={() => handleHover(card.id)}
                onMouseLeave={() => handleHover(null)}>
                    <img src={`skill/${card.img}`} alt="Tech" className={`w-[65%] h-[150px] mx-auto transition duration-500 ease-in-out  ${isHovered === card.id? "":"filter grayscale" }`}/>
                    <p className='text-center text-slate-200 font-bold font-Poppins'>{card.tech}</p>
                </div>
            ))}
            
        </div>
        <div className='absolute left-0 w-[15%] h-full bg-gradient-to-r from-primary   to-[#ffffff00]'/>
        <div className='absolute right-0 w-[15%] h-full bg-gradient-to-l from-primary   to-[#ffffff00]'/>

    </div>
    )
}