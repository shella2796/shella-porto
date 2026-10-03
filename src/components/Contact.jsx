import { profile } from '../data/portfolio';
import Reveal from './ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="wrap">
        <Reveal><p className="kicker">06 / Contact</p><h2>HAVE SOMETHING<br />COMPLICATED<br />THAT NEEDS <em>SHIPPING?</em></h2></Reveal>
        <Reveal className="contact-bottom"><p>I’m interested in remote opportunities across IT Project Management,<br className="desktop-break" /> Project Coordination & digital product delivery.</p><div className="contact-links"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.resume} download>Resume ↓</a></div></div></Reveal>
      </div>
    </section>
  );
}
