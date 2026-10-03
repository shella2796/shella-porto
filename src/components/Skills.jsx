import { capabilities, tools } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section id="expertise" className="section" aria-label="Expertise">
      <div className="wrap">
        <SectionHeading number="03" label="Expertise" title="WHAT I ACTUALLY DO" />
        <div className="expertise-grid">
          {capabilities.map((capability, index) => (
            <Reveal className="expertise-cell" key={capability.number} delay={index * 0.05}>
              <article className="expert"><span className="section-number">{capability.number}</span><div><h3>{capability.title}</h3><p>{capability.description}</p></div></article>
            </Reveal>
          ))}
        </div>
        <Reveal className="tools-row"><p className="section-number">Tools I work with</p><ul aria-label="Project management and collaboration tools">{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></Reveal>
      </div>
    </section>
  );
}
