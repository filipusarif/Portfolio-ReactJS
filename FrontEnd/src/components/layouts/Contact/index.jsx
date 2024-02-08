import React, { useState } from 'react';
import SendImg from "../../../assets/images/Send.svg"

export default function Index() {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [msgValue, setMsgValue] = useState('');

    function checkInputNameNotEmpty() {
        const inputName = document.getElementById('name');
        const labelName = inputName.nextElementSibling;

        setNameValue(inputName.value);

        if (nameValue.trim() !== '') {
        labelName.classList.add('!text-[90%]', 'text-[#215695]', '-top-5');
        } else {
        labelName.classList.remove('!text-[90%]', 'text-[#215695]', '-top-5');
        }
    }

    function checkInputEmailNotEmpty() {
        const input = document.getElementById('email');
        const label = input.nextElementSibling;

        setEmailValue(input.value);

        if (emailValue.trim() !== '') {
        label.classList.add('!text-[90%]', 'text-[#215695]', '-top-4');
        } else {
        label.classList.remove('!text-[90%]', 'text-[#215695]', '-top-4');
        }
    }

    function checkInputMsgNotEmpty() {
        const inputMsg = document.getElementById('msg');
        const labelMsg = inputMsg.nextElementSibling;

        setMsgValue(inputMsg.value);

        if (msgValue.trim() !== '') {
        labelMsg.classList.add('!text-[90%]', 'text-[#215695]', '-top-4');
        } else {
        labelMsg.classList.remove('!text-[90%]', 'text-[#215695]', '-top-4');
        }
    }

    return (
        <section className="w-screen h-fit pt-14 font-Roboto container mx-auto" id="Contact">
            <h1 className="text-center font-extrabold text-[250%] text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa] from-[40%] to-[70%] to-[#1CDAAC]">Contact Me</h1>
            <p className="text-center text-[120%] text-slate-200 -mt-2">All my projects with manual created</p>
            <form action="" className='w-[60%] mx-auto mt-10 font-Poppins pb-32'>
                <div className="relative mt-2 w-full">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border-b-2 px-4 text-[120%] rounded-t-[10px] text-slate-300 bg-opacity-80 bg-secondary py-[10px] focus:outline-none border-[#215695] focus:border-b-2 transition-colors peer w-full"
                        autoComplete="off"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        onBlur={checkInputNameNotEmpty}
                        onInput={checkInputNameNotEmpty}
                        required
                    />
                    <label htmlFor="name" className={`absolute font-medium left-2 top-3 text-[120%] text-slate-500 cursor-text  peer-focus:text-[90%] peer-focus:-top-5 peer-focus:text-[#215695] transition-all ${nameValue.trim() !== '' ? 'text-xs text-[#215695] -top-4' : ''}`}>
                        Your Name 
                    </label>
                </div>
                <div className="relative mt-7 w-full">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-b-2 px-4 text-[120%] rounded-t-[10px] text-slate-300 bg-opacity-80 bg-secondary py-[10px] focus:outline-none border-[#215695] focus:border-b-2 transition-colors peer w-full"
                        autoComplete="off"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onBlur={checkInputEmailNotEmpty}
                        onInput={checkInputEmailNotEmpty}
                        required
                    />
                    <label htmlFor="email" className={`absolute font-medium left-2 top-3 text-[120%] text-slate-500 cursor-text  peer-focus:text-[90%] peer-focus:-top-5 peer-focus:text-[#215695] transition-all ${emailValue.trim() !== '' ? 'text-xs text-[#215695] -top-4' : ''}`}>
                        Email Address
                    </label>
                </div>
                <div className="relative mt-7 w-full">
                    <input
                        type="text"
                        id="msg"
                        name="msg"
                        className="border-b-2 px-4 text-[120%] rounded-t-[10px] text-slate-300 bg-opacity-80 bg-secondary py-[10px] focus:outline-none border-[#215695] focus:border-b-2 transition-colors peer w-full"
                        autoComplete="off"
                        value={msgValue}
                        onChange={(e) => setMsgValue(e.target.value)}
                        onBlur={checkInputMsgNotEmpty}
                        onInput={checkInputMsgNotEmpty}
                        required
                    />
                    <label htmlFor="msg" className={`absolute font-medium left-2 top-3 text-[120%] text-slate-500 cursor-text  peer-focus:text-[90%] peer-focus:-top-5 peer-focus:text-[#215695] transition-all ${msgValue.trim() !== '' ? 'text-xs text-[#215695] -top-4' : ''}`}>
                        Your Message 
                    </label>
                </div>
                <button type="submit" className='px-7 py-2.5 rounded-[10px] bg-complementary flex items-center text-white font-medium mt-7'>Send <img src={SendImg} alt="" /></button>
                
            </form>
        </section>
    );
}
