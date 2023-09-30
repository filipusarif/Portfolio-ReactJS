import Hero from '../components/layouts/Hero'
import Navbar from '../components/layouts/Navbar'
import About from '../components/layouts/About'
import Background from '../components/layouts/Background'

export default function Homepage(){
    return[
        <>
            <Background />
            <Navbar />
            <Hero />
            <About />
        </>
    ]
}