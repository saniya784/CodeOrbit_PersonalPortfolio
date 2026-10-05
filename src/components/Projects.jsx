import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding reveal">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I've built"
          title="Featured Projects"
          subtitle="Four end-to-end projects spanning AI, full-stack web, and responsive UI — built with modern tools and clean architecture."
        />

        <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}