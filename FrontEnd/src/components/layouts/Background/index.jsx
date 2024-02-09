import Vector from '../../../assets/images/Vector1.svg'

export default function index() {
    return (
        <div className='absolute -z-10 w-full h-full '>
            <img src={Vector} alt="" className='absolute -left-[40%] -top-[20%] animate-[bg1_20s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[2%] top-[10%] w-[50%] animate-[bg2_30s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[20%] top-[200%] w-[40%] opacity-60 animate-[bg3_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-25%] top-[320%] w-[60%] opacity-50 animate-[bg4_40s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[40%] top-[420%] w-[60%] opacity-40 animate-[bg5_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-40%] top-[470%] w-[60%] opacity-40 animate-[bg6_40s_ease_infinite]'/>
        </div>
    )
}