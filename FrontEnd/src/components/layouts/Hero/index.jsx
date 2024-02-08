import Person from '../../../assets/images/arif.png'
import Github from '../../../assets/images/Github.svg'
import Linkedin from '../../../assets/images/Linkedin.svg'
import Instagram from '../../../assets/images/Instagram.svg'
import Send from '../../../assets/images/Send.svg'
import Element1 from '../../../assets/images/element1.svg'
import Element2 from '../../../assets/images/element2.svg'
import Element3 from '../../../assets/images/element3.svg'


export default function index() {
    return (
        <section className="container min-h-screen m-auto flex lg:flex-row flex-col items-center font-Roboto text-white relative" id='Hero'>
            <div className='basis-[50%] font-Roboto'>
                <p className=' font-Poppins gap-2  font-reguler flex items-center text-[140%]'>Introduction <div className='h-[5px] w-[40px] bg-lightBlueAbout rounded-[2px]'></div> </p>
                <h1 className='mt-2 text-[315%] font-extrabold leading-[105%] text-transparent bg-clip-text bg-gradient-to-r from-[#2996E5] via-[#1CDAAC] via-[90%] to-[#1CDAAC]'>Web Developer and <br /> UI Designer, based <br /> in Semarang.</h1>
                <p className='mt-3 w-[80%] text-[91%] leading-5'>Hello! I am a skilled and enthusiastic web developer with a passion for translating concepts into captivating online experience. Proficient in front-end technologies like HTM, CSS, and JavaScripts ETC.</p>
                <a href="#" className=' bg-complementary mt-5 py-[10px] w-[150px] flex items-center justify-center rounded-[14px] gap-[5px]'>Contact Me <img src={Send} alt="send" /></a>
                <div className='flex items-center gap-[15px] mt-20'>
                    <a href="#"><img src={Github} alt="github" width={'31px'}/></a>
                    <a href="#"><img src={Linkedin} alt="linkedin" width={'31px'} /></a>
                    <a href="#"><img src={Instagram} alt="instagram" width={'31px'} /></a>
                </div>
            </div>
            <div className='basis-[50%] relative'>
                <img src={Person} alt="Filipus Arif" />
                <div>
                    <img src={Element1} alt="" className='absolute bottom-[10px] left-[90px]'/>
                    <img src={Element2} alt="" className='absolute top-[250px] left-[100px]'/>
                    <img src={Element1} alt="" className='absolute w-[20px] top-[180px] left-[50px]'/>
                    <img src={Element3} alt="" className='absolute bottom-[230px] right-[5px]'/>
                    <img src={Element1} alt="" className='absolute top-[100px] right-[80px] w-[25px]'/>
                    <img src={Element2} alt="" className='absolute bottom-[50px] -right-[50px] w-[25px]'/>
                    <div className='absolute bottom-2 right-10'>
                        <h1 className='font-bold text-[260%] leading-[115%]'>Filipus Arif <br /> Kristiyan.</h1>
                        <div className='h-[5px] w-[98px] bg-complementary -mt-[6px] rounded-[2px]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}