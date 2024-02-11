import Person from '../../../assets/images/arif.png'
import Github from '../../../assets/images/Github.svg'
import Linkedin from '../../../assets/images/Linkedin.svg'
import Instagram from '../../../assets/images/Instagram.svg'
import Send from '../../../assets/images/Send.svg'
import Element1 from '../../../assets/images/element1.svg'
import Element2 from '../../../assets/images/element2.svg'
import Element3 from '../../../assets/images/element3.svg'

import Tilt from 'react-parallax-tilt';


export default function index() {
    return (
        <section className="container min-h-screen m-auto flex flex-col-reverse items-center font-Roboto text-white relative pt-20 gap-7 lg:flex-row lg:pt-0 lg:gap-0" id='Hero'>
            <div className='basis-[50%] px-3 font-Roboto'>
                <p className=' font-Poppins gap-2  font-reguler flex items-center drop-shadow-lg text-[120%] lg:text-[140%]'>Introduction <div className='h-[4px] w-[30px] bg-lightBlueAbout rounded-[2px]'></div> </p>
                <h1 className='mt-2 drop-shadow-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2996E5] via-[#1CDAAC] via-[90%] to-[#1CDAAC] text-[240%] leading-[110%] lg:text-[315%] lg:leading-[105%]'>Web Developer and <br /> UI Designer, based <br /> in Semarang.</h1>
                <p className='mt-3 w-[90%] text-very-light drop-shadow-2xl text-[80%] leading-4 lg:text-[95%] lg:leading-5'>Hello! I am a skilled and enthusiastic web developer with a passion for translating concepts into captivating online experience. Proficient in front-end technologies like HTML, CSS, and JavaScript ETC.</p>
                <a href="#Contact" className=' bg-complementary mt-5 py-[10px] w-[155px] flex items-center justify-center rounded-[10px] gap-[5px] drop-shadow font-medium'>Contact Me <img src={Send} alt="send" /></a>
                <div className='flex items-center gap-[10px] mt-14 lg:gap-[15px] lg:mt-20'>
                    <Icon to="https://github.com/filipusarif" source={Github} alt="Github" w="31px"/>
                    <Icon to="https://www.linkedin.com/in/filipus-arif-kristiyan/" source={Linkedin} alt="Linkedin" w="31px"/>
                    <Icon to="https://www.instagram.com/filipusarif._/" source={Instagram} alt="Instagram" w="31px"/>
                </div>
            </div>
            <Profile />
        </section>
    )
}

const Icon = (prop) => {
    return (
    <a href={prop.to} target='_blank'>
        <img src={prop.source} alt={prop.name} className={`lg:w-[${prop.width}] w-[25px]`}/>
    </a>
    )
}

const Profile = () => {
    return (
        <Tilt 
        className='basis-[50%] relative w-[90%] lg:w-[100%]' 
        trackOnWindow="true" 
        tiltReverse='true' 
        tiltMaxAngleX='15' 
        tiltMaxAngleY='15' 
        perspective='1000' 
        style={{
            transformStyle: "preserve-3d",
        }}>
                <img src={Person} alt="Filipus Arif"
                style={{
                    transform: "translateZ(10px)",
                }}
                />
                <img src={Element1} alt="" className='absolute drop-shadow-lg lg:w-auto   w-[25px] bottom-[2%] left-[20%] animate-[item1_20s_ease_infinite]' />
                <img src={Element2} alt="" className='absolute drop-shadow-lg lg:w-auto   w-[25px] top-[50%] left-[15%] animate-[item2_15s_linear_infinite]'/>
                <img src={Element1} alt="" className='absolute drop-shadow-lg lg:w-[20px] w-[15px] top-[30%] left-[20%] z-50 animate-[item3_15s_ease-in-out_infinite]'/>
                <img src={Element3} alt="" className='absolute drop-shadow-lg lg:w-auto   w-[25px] bottom-[40%] right-[2%] animate-[item4_15s_ease-in-out_infinite]'/>
                <img src={Element1} alt="" className='absolute drop-shadow-lg lg:w-[25px] w-[15px] top-[20%] right-[20%]  animate-[item5_30s_ease-out_infinite]'/>
                <img src={Element2} alt="" className='absolute drop-shadow-lg lg:w-[25px] w-[20px] bottom-[10%] -right-[5%]  animate-[item6_30s_ease-out_infinite]'/>
                <div className='absolute bottom-2 right-6 lg:right-10 drop-shadow-lg' style={{transform: "translateZ(60px)"}}>
                    <h1 className='font-bold text-[140%] lg:text-[260%] leading-[115%]'>Filipus Arif <br /> Kristiyan.</h1>
                    <div className='h-[3px] w-[52px] lg:h-[5px] lg:w-[98px] bg-complementary -mt-[3px] lg:-mt-[6px] rounded-[2px]'/>
                </div>
            </Tilt>
    )
}