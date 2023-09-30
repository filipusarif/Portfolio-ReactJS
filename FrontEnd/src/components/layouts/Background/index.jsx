import Vector from '../../../assets/images/Vector1.svg'

export default function index() {
    return (
        <div className='-z-50 relative'>
            <img src={Vector} alt="" className='absolute -left-[40%] -top-[20%]'/>
            <img src={Vector} alt="" className='absolute right-[2%] top-[10%] w-[50%]'/>
        </div>
    )
}