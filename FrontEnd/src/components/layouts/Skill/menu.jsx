import React, { useRef, useState } from "react";
import Tilt from 'react-parallax-tilt';


export default function Index() {
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

    

    return (
        <div className="container w-full h-fit mx-auto flex flex-wrap justify-center gap-4 mt-7 pb-6">
        {skill.map((card) => (
            <Card id={card.id} tech={card.tech} img={card.img}/>
        ))}
        </div>
    );
    }

function Card(prop){

    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };


    return (
        <Tilt 
        key={prop.id}
        tiltReverse='true' 
        tiltMaxAngleX='20' 
        tiltMaxAngleY='20' 
        perspective='1000' 
        style={{
            transformStyle: "preserve-3d",
        }}
        onLeave={() => setIsHovered(null)}
        onEnter={() => handleHover(prop.id)}
        className={`relative h-[200px] w-[170px] bg-secondary py-2 rounded-[15px] cursor-pointer transition-all ease ${isHovered === prop.id ? 'hovered' : ''}`}
        >
            <img
                src={`skill/${prop.img}`}
                alt="Tech"
                className={`w-[150px] h-[150px] mx-auto ${isHovered === prop.id ? '' : 'filter grayscale'}`}
                style={{
                    transform: "translateZ(50px)",
                    width: "65%"
                }}
            />
            <p className='abso text-center text-slate-200 font-bold font-Poppins'
            style={{
                transform: "translateZ(50px)",
            }}>{prop.tech}</p>
        </Tilt>
    )
}
