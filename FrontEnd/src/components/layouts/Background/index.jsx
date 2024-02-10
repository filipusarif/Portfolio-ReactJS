import Vector from '../../../assets/images/Vector1.svg'

export default function index() {
    return (<section className='w-screen h-full -z-10 overflow-hidden absolute'>
            <img src={Vector} alt="" className='absolute -left-[40%] -top-[20%] animate-[bg1_20s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[2%] top-[0%] w-[50%] animate-[bg2_30s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute left-[2%] top-[25%] w-[50%] opacity-40 animate-[bg7_55s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[20%] top-[35%] w-[70%] opacity-60 animate-[bg3_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-25%] top-[50%] w-[60%] opacity-50 animate-[bg4_40s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[40%] top-[75%] w-[60%] opacity-40 animate-[bg5_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-40%] top-[80%] w-[60%] opacity-40 animate-[bg6_40s_ease_infinite]'/>
        </section>
    )
}