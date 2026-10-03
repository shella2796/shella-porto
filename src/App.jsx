import { MotionConfig } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DeliveryMarquee from './components/DeliveryMarquee';
import Projects from './components/Projects';
import ProjectIndex from './components/ProjectIndex';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './utils/CursorAnimation';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <CustomCursor />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Home />
        <DeliveryMarquee />
        <Projects />
        <ProjectIndex />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
