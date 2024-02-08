import { useState } from 'react'; 
import Slider from './slider.jsx'
import Menu from './menu.jsx'
import ArrowIcon from '../../../assets/images/arrowSkill.svg'

export default function index(){

    const [isSliderVisible, setSliderVisible] = useState(true);

    const handleShowAll = () => {
        setSliderVisible(false);
    };

    const handleShowLess = () => {
        setSliderVisible(true);
    };



    return (
    <section className="h-fit w-screen overflow-hidden pt-14" id='Skill'>
        <h1 className="text-center font-extrabold text-[250%] text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa] from-[40%] to-[70%]  to-[#1CDAAC]">Skill & Tech</h1>
        <p className="text-center  text-[120%] text-slate-200 -mt-2">All my projects with manual created</p>
        <div id="Slider" className={isSliderVisible ? 'block' : 'hidden'}>
            <Slider />
            <div  onClick={handleShowAll} className="container mx-auto w-full text-right flex justify-end font-extrabold gap-2 font-Poppins cursor-pointer text-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa] from-[40%] to-[70%]  to-[#1CDAAC]">See All <img src={ArrowIcon} alt="click" /></div>
        </div>
        <div id="Menu" className={isSliderVisible ? 'hidden' : 'block'}>
            <Menu />
            <div onClick={handleShowLess} className="container mx-auto w-full text-right flex justify-end font-extrabold gap-2 font-Poppins cursor-pointer text-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa] from-[40%] to-[70%]  to-[#1CDAAC]">See Less <img src={ArrowIcon} alt="click" /></div>
        </div>
    </section>)
}