import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from '../../../assets/images/05_mymouse.svg'
import Arrow from '../../../assets/images/arrowProject.svg'


export default function index(prop){
    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };

    const ROTATION_RANGE = 30; // Adjust this value based on your preference
    const ref = useRef(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
        const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

        setRotateX(mouseY * ROTATION_RANGE);
        setRotateY(mouseX * ROTATION_RANGE);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
        setRotateX(0);
        setRotateY(0);
    };
    return (
    
        <a href={prop.linkProject} className="relative w-[46%] font-Roboto text-white font-extrabold cardProject">
            <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => handleHover(prop.id)}
            style={{
                perspective: 1000, // Adjust this value based on your preference
                transformStyle: "preserve-3d",
                rotateX: `${rotateX}deg`,
                rotateY: `${rotateY}deg`,
            }}
            className="relative">
            <img src={Image} alt="Project"  className='w-full'/>
            <div className='absolute bottom-3 -left-12 w-[80%]' 
            style={{
                transform: "translateZ(50px)",
            }}>
                <h3 className='text-[170%]'>{prop.nameProject}</h3>
                <div className='h-[3px] w-[40%] bg-white'/>
                <div className='flex justify-between items-center w-[40%]'>
                    <p>{prop.noProject}</p>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            </motion.div>
        </a>
    )
    
}