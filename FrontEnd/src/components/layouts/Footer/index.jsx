import Logo from '../../../assets/images/logoFull.svg'
import Github from '../../../assets/images/githubFooter.svg'
import Linkedin from '../../../assets/images/linkedinFooter.svg'
import Instagram from '../../../assets/images/instagramFooter.svg'


export default function index(){
    return (
        <section className="w-full min-h-[51vh] bg-[#141C31]">
            <div className="container gap-3 h-full mx-auto flex flex-col py-10 text-[95%] text-slate-400 font-Poppins">
                <div className='flex basis-[90%] '>
                    <div className='basis-[60%] flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <a href="#" className='w-fit'><img src={Logo} alt="" className='w-[130px] -translate-x-2'/></a>
                            <p className='leading-5 text-[95%] -mt-1'>As a passionate and dedicated web developer, I thrive on transforming 
                                ideas into engaging and functional digital experiences. With a strong
                                foundation in front-end technologies such as HTML, CSS, and JavaScript, 
                                I specialize in crafting visually appealing and user-friendly interfaces 
                                that leave a lasting impression.</p>
                        </div>
                        <div>
                            <h3 className='text-[130%] font-bold text-slate-200'>Address</h3>
                            <p className='leading-5'>Blado 51255 <br />
                                Batang, Central Java, Indonesia</p>
                        </div>
                    </div>
                    <div className='basis-[22%] h-full flex flex-col items-center gap-3 text-center'>
                        <h3 className='text-[130%] font-bold text-slate-200 mt-2'>Categories</h3>
                        <p className=''>Web</p>
                        <p>Portfolio</p>
                        <p>Design</p>
                        <p>Tech</p>
                        <p>Grafis</p>
                    </div>
                    <div className='basis-[18%]  flex flex-col gap-3.5'>
                        <h3 className='text-[130%] font-bold text-slate-200 mt-2'>Contact</h3>
                        <a href="" className='flex justify-start gap-3 items-center'><img src={Github} alt="" width={'14%'}/>Github</a>
                        <a href="" className='flex justify-start gap-3 items-center mt-4'><img src={Linkedin} alt=""  width={'14%'}/>Linkedin</a>
                        <a href="" className='flex justify-start gap-3 items-center mt-4'><img src={Instagram} alt=""  width={'14%'}/>Instagram</a>
                    </div>
                </div>
                <div className='h-[3px] bg-opacity-70 w-full bg-slate-500 rounded-md'/>
                <div className='flex justify-between items-center text-[110%]'>
                    <p className='text-slate-200'>© Created by <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa]  to-[#1CDAAC]'> FilipusArif </span></p>
                    <p className='text-slate-200'>filipusarif10@gmail.com</p>
                </div>
            </div>
        </section>
    )
}