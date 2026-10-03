import { experiences, profile } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="wrap">
        <SectionHeading number="04" label="Experience" title="Different industries. Same job: create clarity.">5+ years coordinating teams, stakeholders, digital products and documentation across remote, hybrid and on-site environments.</SectionHeading>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.04}>
              <article className="experience-row"><p className="experience-period">{experience.period}<span>{experience.type}</span></p><div className="experience-position"><h3>{experience.role}</h3><p>{experience.company}</p></div><p className="experience-summary">{experience.summary}</p></article>
            </Reveal>
          ))}
        </div>
        <Reveal className="resume-row"><a className="text-link" href={profile.resume} download>VIEW FULL RESUME →</a></Reveal>
      </div>
    </section>
  );
}
