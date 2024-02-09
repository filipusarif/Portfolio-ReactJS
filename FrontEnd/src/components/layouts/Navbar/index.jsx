import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoMini from "../../../assets/images/logoFull.svg"

export default function index() {

    //Change navbar color when scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);

    const [isNavExpanded, setIsNavExpanded] = useState(true)


    return (
        <div className={`fixed top-0 w-full z-50 transition duration-700 ease-in-out  ${color ? 'bg-secondary lg:bg-opacity-70 lg:backdrop-blur-sm h-16 pt-[7px]' : ' h-16 pt-[12px] lg:h-16 lg:pt-[7px] bg-secondary lg:bg-transparent'}`}>
            <header className="container m-auto font-roboto font-medium text-unactive  flex flex-wrap items-center justify-between">
                <div className='flex flex-wrap items-center justify-between w-full  lg:w-auto'>
                    <a href="\" className=''><img src={logoMini} alt="" className="!w-[120px]" /></a>
                    <button id="hamburger" className="relative w-10 h-10 lg:hidden overflow-hidden" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                        <div role="hidden" id="line" className={` ${isNavExpanded ? "" : "-rotate-45 translate-y-2"} inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300`}></div>
                        <div role="hidden" id="line2" className={` ${isNavExpanded ? "visible translate-x-0" : "translate-x-10"} inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300`}></div>
                        <div role="hidden" id="line3" className={`${isNavExpanded ? "" : "rotate-45 -translate-y-2"} inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300`}></div>
                    </button>
                </div>
                <div id="navlinks" className={`relative  bg-secondary lg:bg-transparent ${isNavExpanded ? "hidden -translate-y-[120%] lg:-translate-y-0" : "visible translate-y-2  rounded-b-lg p-5"} ${color ? "bg-secondary" : ""} w-full px-6 lg:visible lg:bg-transparent items-center  transition duration-300 ease-in-out lg:block lg:w-auto`}>
                    <nav className=" w-full px-6  tracking-wide transition lg:w-auto  mr-7 lg:block">
                        <ul className="text-[100%] flex flex-col  lg:flex-row items-center justify-around gap-[25px] ">
                            <li><a href="#about" className='group transition duration-300 hover:text-[#2196F3]'>Tentang <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span></a></li>
                            <li><a href="" className='group transition duration-300 hover:text-[#2196F3]'>Divisi <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span></a></li>
                            <li><a href="" className='group transition duration-300 hover:text-[#2196F3]'>Event <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span></a></li>
                            <li><a href="" target='_blank' className='group transition duration-300 hover:text-[#2196F3]'>TeaLinuxOS <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span></a></li>
                            <li><a href="" target='_blank' className='group transition duration-300 hover:text-[#2196F3]'>Blog <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}