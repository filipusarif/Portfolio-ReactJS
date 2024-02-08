import Line from '../../elements/about/line.jsx'
import Typical from 'react-typical'

export default function index() {
    return (
        <section className="container m-auto z-50 pt-20" id='About'>
            <div className="w-[90%] h-auto bg-secondary mx-auto rounded-[40px] z-50">
                <div className="flex px-12 pt-8 items-center mb-[20px]">
                    <div className="basis-[20%] flex items-center gap-[10px]">
                        <div className="bg-[#FD5D55] w-[25px] h-[25px] rounded-full"/>
                        <div className="bg-[#FEBC2D] w-[25px] h-[25px] rounded-full"/>
                        <div  className="bg-[#26C73E] w-[25px] h-[25px] rounded-full"/>
                    </div>
                    <p className="basis-[80%] text-very-light text-center -translate-x-[12%] ">AboutMe.js</p>
                </div>
                <div className=" text-[#818181] w-full pb-8 font-FiraCode text-[15.5px]">
                    <div >
                        <Line no="01"> <span className='text-yellowAbout'>Class </span><span className='text-redAbout'>{`FilipusArif`} </span><span className=' text-yellowAbout'>{`{`}</span></Line>
                        <Line no="02"> <span>···</span>{`// solve the problem.`}</Line>
                        <Line no="03"> <span>···</span>{`// Then, write the code.`}</Line>
                        <Line no="04"> <span>···</span><span className=' text-yellowAbout'>{`constructor`}</span><span className='text-purpleAbout'>{`() {`}</span></Line>
                        <Line no="05"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout'>{`name`}</span><span> = </span><span className=' text-brownAbout'>'Filipus Arif Kristiyan'</span><span>;</span></span></Line>
                        <Line no="06"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`dayOfBirthTimestamp`}</span><span> = </span><span className='text-lightBlueAbout'>7004</span><span>;</span></span></Line>
                        <Line no="07"> <span className='flex'><span>······</span><span className='text-slate-300 flex'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`hobbies`}</span><span> = </span><span className='text-blueAbout'>{`[`}</span><span className=' text-brownAbout'>"Coding"</span><span>,</span><span className=' text-brownAbout'><Typical steps={['"playing Rubik\'s Cube"',2000,'"Eating"',2000,'"Sleep"',2000,]} wrapper="p" loop={Infinity}/></span><span className='text-blueAbout'>{`]`}</span><span>;</span></span></span></Line>
                        <Line no="08"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`email`}</span><span> = </span><span className=' text-brownAbout'>'filipusarif10@gmail.com'</span><span>;</span></span></Line>
                        <Line no="09"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`education`}</span><span> = </span><span className=' text-brownAbout'>'undergraduate student in information engineering'</span><span>;</span></span></Line>
                        <Line no="10"> <span>···</span> <span className='text-purpleAbout'>{`}`}</span></Line>
                        <Line no="11"> <span>···</span> <span className='text-lightBlueAbout'>{`Aboutme`}</span><span className='text-purpleAbout'>{`() {`}</span></Line>
                        <Line no="12"> <span>······</span><span className=' text-yellowAbout'>{`return`}</span><span className='text-blueAbout'>{`[`}</span></Line>
                        <Line no="13"> <span>·········</span><span className=' text-brownAbout'>{`\`Hello! I'm `} <span className=' text-yellowAbout'>{`\${`}</span><span className='text-redAbout'>this</span><span>.</span><span className='text-lightBlueAbout'>name</span><span className=' text-yellowAbout'>{`}`}</span>{`, a passionate web developer with a knack \``}<span className='text-slate-300'>,</span></span></Line>
                        <Line no="14"> <span>·········</span><span className=' text-brownAbout'>{`\`for crafting dynamic and user-friendly digital experiences.\``}<span className='text-slate-300'>,</span></span></Line>
                        <Line no="15"> <span>·········</span><span className=' text-brownAbout'>{`\`With a strong foundation in both front-end and back-end technologies,\``}<span className='text-slate-300'>,</span></span></Line>
                        <Line no="16"> <span>·········</span><span className=' text-brownAbout'>{`\`I thrive on turning creative ideas into functional, visually appealing websites.\``}<span className='text-slate-300'>,</span></span></Line>
                        <Line no="17"> <span>······</span><span className='text-blueAbout'>{`]`}</span></Line>
                        <Line no="18"> <span>···</span> <span className='text-purpleAbout'>{`}`}</span></Line>
                        <Line no="19"> <span className=' text-yellowAbout'>{`}`}</span></Line>
                    </div>
                </div>
            </div>
        </section>
    )
}