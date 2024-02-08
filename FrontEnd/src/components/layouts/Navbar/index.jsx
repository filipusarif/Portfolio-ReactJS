import { useState } from 'react';
import Logo from '../../../assets/images/logoFull.svg'

export default function index() {

    //Change navbar color when scroll
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if (window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);

    return (
        <div className={`w-screen fixed z-50 transition duration-300 ease-in-out  ${color ? 'bg-primary bg-opacity-[50%] backdrop-blur-sm': 'backdrop-blur-sm'}`}>
        <header className='container font-Roboto text-unactive m-auto flex items-center justify-between'>
            <img src={Logo} alt="Filpp" className='w-[150px]' />
            <nav className='flex items-center gap-[30px] text-[16px] '>
                <a href="#Hero" className='hover:text-complementary'>Home</a>
                <a href="#About" className='hover:text-complementary'>About</a>
                <a href="#Portfolio" className='hover:text-complementary'>Portfolio</a>
                <a href="#Skill" className='hover:text-complementary'>Skills</a>
                <a href="#Contact" className='hover:text-complementary'>Contact</a>
            </nav>
        </header>
        </div>
    )
}