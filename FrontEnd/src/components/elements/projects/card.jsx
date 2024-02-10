import React, { useRef, useState } from "react";
import Tilt from 'react-parallax-tilt';
import Arrow from '../../../assets/images/arrowProject.svg'


export default function index(prop){
    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };

    return (
    
        <a href={prop.linkProject} className="relative w-[45%] font-Roboto text-white font-extrabold cardProject" target="_blank">
            <Tilt
            
            tiltReverse='true' 
            tiltMaxAngleX='20' 
            tiltMaxAngleY='20' 
            perspective='4000' 
            scale='1.1'
            style={{
                transformStyle: "preserve-3d",
                width: 'full',
                height: 'full'
            }}
            onLeave={() => setIsHovered(null)}
            onEnter={() => handleHover(prop.id)}
            className="relative w-full h-full">
                <img src={`project/${prop.imgProject}`} alt="Project"  className='w-full drop-shadow-lg'/>
                <div className='absolute bottom-3 -left-10 w-[80%]  text-very-light' 
                style={{
                    transform: "translateZ(50px)",
                }}>
                    <h3 className='text-[170%] drop-shadow-md  '>{prop.nameProject}</h3>
                    <div className='h-[3px] w-[40%] bg-very-light'/>
                    <div className='flex justify-between items-center w-[40%]'>
                        <p>{prop.noProject}</p>
                        <img src={Arrow} alt="arrow" className=""/>
                    </div>
                </div>
            </Tilt>
        </a>
    )
    
}