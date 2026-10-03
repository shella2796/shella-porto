import { projectIndex } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function ProjectIndex() {
  return (
    <section id="project-index" className="section index-section" aria-label="Project index">
      <div className="wrap">
        <SectionHeading number="02" label="Project Index" title="PROJECT INDEX" />
        <div className="index-list">
          {projectIndex.map((project) => <Reveal key={project.id}>
            <details className="index-project">
              <summary className="index-row"><span className="work-index">{String(project.id).padStart(2, '0')}</span><h3>{project.title}</h3><span className="index-category">{project.type}{(project.role || project.format) && <span className="index-role">{project.role || project.format}</span>}</span><span className="index-arrow" aria-hidden="true">↗</span><span className="sr-only"> — show project context</span></summary>
              <div className="index-detail">
                {project.image && <img src={project.image} alt={`${project.title} existing portfolio product visual`} loading="lazy" width={project.id === 4 ? 1536 : project.id === 3 ? 1024 : 888} height={typeof project.id === 'number' ? 1024 : 1136} />}
                <div><p>{project.description}</p>{project.releases && <ul className="release-list">{project.releases.map((release) => <li key={release}>{release}</li>)}</ul>}<ul className="project-tags" aria-label="Project areas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              </div>
            </details>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}
