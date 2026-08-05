import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Indoxnito",
    orbit: "Privacy-first community platform",
    meta: "Community Platform · Product Delivery",
    description: "A privacy-focused community platform designed for anonymous discussion, engagement, and transparent voting. I coordinated priorities across product, development, QA, and stakeholders, helping the team move from requirements through testing and deployment readiness.",
    image: "/assets/indox.png",
    tags: ["Project Management", "Remote Team", "Web Platform", "QA Coordination"],
  },
  {
    id: 2,
    title: "Voyage",
    orbit: "AI education platform",
    meta: "AI Platform · International Education",
    description: "An AI-powered platform supporting international student success through data-driven insights and targeted outreach. I managed delivery planning, stakeholder communication, and cross-functional coordination to keep requirements, priorities, and feature execution aligned.",
    image: "/assets/voyage.png",
    link: "#",
    tags: ["AI Product", "EdTech", "Stakeholder Management", "Delivery Planning"],
  },
  {
    id: 3,
    title: "TekenAja!",
    orbit: "Secure document product",
    meta: "Digital Signature · Mobile Product",
    description: "A secure digital-signature platform that enables users to sign and manage documents remotely. I supported requirement gathering, feature delivery, testing coordination, project documentation, and communication between business and technical teams.",
    image: "/assets/dtb.png",
    link: "#",
    tags: ["Mobile Application", "Requirements", "Documentation", "Client Coordination"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <div className="mx-auto w-[min(calc(100%-28px),1200px)] lg:w-[min(calc(100%-40px),1200px)]">
        <motion.div
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="max-w-[700px] font-serif-display text-[clamp(3.3rem,8vw,7.8rem)] font-normal leading-[0.92] tracking-[-0.04em]">
              Selected objects in my orbit.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[#9d98a3]">
            Each project arrived with its own people, priorities, constraints, and unresolved questions. My role was to keep the system moving.
          </p>
        </motion.div>

        <div className="mt-16 space-y-[72px] lg:mt-[72px] lg:space-y-[90px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.12 }}
            >
              <div className={`relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[20px] border border-white/10 bg-[#111118] shadow-[0_30px_100px_rgba(0,0,0,0.28)] ${index % 2 ? "lg:order-2 lg:justify-self-end" : ""}`}>
                <span className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/80 text-xs backdrop-blur-sm">
                  {String(project.id).padStart(2, "0")}
                </span>
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-[15%]"
                />
              </div>

              <div>
                <p className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.15em] text-[#f2eee8]/45">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#b04d6b] shadow-[0_0_12px_rgba(176,77,107,0.75)]" />
                  Orbit {String(project.id).padStart(2, "0")} · {project.orbit}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#b04d6b]">{project.meta}</p>
                <h3 className="my-4 font-serif-display text-[clamp(2.8rem,5vw,4.8rem)] font-normal leading-[0.95]">{project.title}</h3>
                <p className="text-sm leading-7 text-[#9d98a3] sm:text-base">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#9d98a3]">{tag}</span>
                  ))}
                </div>
                {project.link && project.link !== "#" ? (
                  <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold" whileHover={{ x: 5 }}>
                    View project story <span>→</span>
                  </motion.a>
                ) : (
                  <p className="mt-8 text-xs uppercase tracking-[0.12em] text-white/35">Project overview</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
