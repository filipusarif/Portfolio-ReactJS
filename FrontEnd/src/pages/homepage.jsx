import Hero from '../components/layouts/Hero'
import Navbar from '../components/layouts/Navbar'
import About from '../components/layouts/About'
import Background from '../components/layouts/Background'
import Projects from '../components/layouts/Projects'
import Skill from '../components/layouts/Skill'
import Contact from '../components/layouts/Contact'
import Footer from '../components/layouts/Footer'


export default function Homepage(){
    return[
        <section className='h-fit w-full overflow-hidden '>
            <Background />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skill />
            <Contact />
            <Footer />
        </section>
    ]
}