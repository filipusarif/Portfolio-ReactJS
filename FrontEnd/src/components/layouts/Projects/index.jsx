import CardProject from '../../elements/projects/card.jsx'


const projects =[
    {
        id:0,
        name:'TourNgab',
        link:'',
        year:2022,
        img:'01_tourngab.svg',
        no:'00'
    },
    {
        id:1,
        name:'To Do List',
        link:'',
        year:2022,
        img:'02_todolist.svg',
        no:'01'
    },
    {
        id:2,
        name:'sapuID',
        link:'',
        year:2022,
        img:'03_smarthome.svg',
        no:'02'
    },
    {
        id:3,
        name:'About Me',
        link:'',
        year:2022,
        img:'04_aboutme.svg',
        no:'03'
    },
    {
        id:4,
        name:'MyMouse',
        link:'',
        year:2023,
        img:'05_mymouse.svg',
        no:'04'
    },
    {
        id:5,
        name:'Sentiment Analysis',
        link:'',
        year:2023,
        img:'06_sentimen.svg',
        no:'05'
    },
    {
        id:6,
        name:'Blind Sick',
        link:'',
        year:2023,
        img:'07_blindstick.svg',
        no:'06'
    },
];


// Mendapatkan daftar tahun unik dari proyek-proyek
const uniqueYears = [...new Set(projects.map(item => item.year))];


export default function index(){
    

    return (
    <section className="container min-h-screen w-full mx-auto font-Roboto pt-14 -mb-24" id="Portfolio">
        <h1 className="text-center font-extrabold text-[250%] text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa] from-[40%] to-[70%]  to-[#1CDAAC]">My Projects</h1>
        <p className="text-center  text-[120%] text-slate-300 -mt-2">All my projects with manual created</p>
        <div className="w-full h-fit flex flex-col justify-center items-center px-10 pb-[100px]">
            {/* foreach */}
            {uniqueYears.map(year => (
            <CardWrapper year={year}/>
            ))}
            <div className="flex justify-start  w-full mt-10">
                <div className="flex justify-center items-center gap-4 translate-x-3.5 ">
                    <div className="h-[25px] w-[25px] border-[4px] border-complementary  rounded-[50%]"/>
                    <p className="font-bold text-[120%] text-slate-200"></p>
                </div>
            </div>
        </div>
    </section>
    )
}

const CardWrapper = (props) => {
    return (
    <>
        <Year year={props.year} />
        <div className=" w-full h-fit flex">
            <div className='basis-[10%]'>
                <div className="w-[4px] h-[109%] bg-gradient-to-r from-complementary to-[#1CDAAC]  translate-x-6 -mt-1 drop-shadow-lg "/>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-20 basis-[90%] py-2 pl-10'>
                {projects
                .filter(item => item.year === props.year)
                .map(item => (
                    <CardProject nameProject={item.name} noProject={item.no} linkProject={item.link} imgProject={item.img}/>
                ))}
            </div>
        </div>
    </>
    )
}


const Year = (props) => {
    return (
        <div className="flex justify-start w-full mt-10" >
            <div className="flex justify-center items-center gap-4 translate-x-3.5 drop-shadow-lg">
                <div 
                style={{ 
                    position: 'relative',
                    width: '25px',
                    height: '25px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                }}
                >
                    <div 
                        style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: '0px solid',
                        borderColor: 'transparent',
                        borderRadius: '50%',
                        background: 'linear-gradient(to right, #1f70aa, #1CDAAC)',
                        }}
                    />
                    <div 
                        style={{
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        right: '4px',
                        bottom: '4px',
                        borderRadius: '50%',
                        background: '#0F172A',  // Set the inner element to transparent
                        }}
                    />
                </div>
                <p className="font-bold text-[120%] text-slate-200">{props.year}</p>
            </div>
        </div>
    )
}