import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import Intro from './components/Intro'
import Experience from './components/Experience'

export default function App() {
  return (
    <div className='overflow-x-hidden bg-[#050507] font-galaxy text-[#f3efe9] scroll-smooth'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
