import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Project Delivery",
    description: "Scope, roadmaps, sprint planning, priorities, timelines, risks, and releases.",
  },
  {
    number: "02",
    title: "Cross-functional Coordination",
    description: "Developers, QA, design, operations, clients, vendors, and leadership.",
  },
  {
    number: "03",
    title: "Product & Requirements",
    description: "Requirement gathering, user stories, acceptance criteria, feature clarification, and UAT support.",
  },
  {
    number: "04",
    title: "Documentation & Operations",
    description: "BRD, FSD, SOP, MoM, process documentation, document control, reporting, and version management.",
  },
];

const tools = ["ClickUp", "Jira", "Asana", "GitHub", "Figma", "Slack"];

export default function Skills() {
  return (
    <section id="expertise" className="scroll-mt-20 border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <div className="mx-auto w-[min(calc(100%-28px),1200px)] lg:w-[min(calc(100%-40px),1200px)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-label">What I actually do</p>
          <h2 className="max-w-[850px] font-serif-display text-[clamp(3.3rem,8vw,7.8rem)] font-normal leading-[0.92] tracking-[-0.04em]">
            Clarity that keeps work moving.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 md:grid-cols-2 lg:mt-[70px]">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className="min-h-[260px] border-b border-white/10 p-7 transition-colors hover:bg-[radial-gradient(circle_at_top_right,rgba(115,84,184,0.1),transparent_40%),#0b0b10] md:min-h-[280px] md:p-9 md:odd:border-r"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="mb-14 text-xs text-[#b04d6b] md:mb-[70px]">{capability.number}</p>
              <h3 className="font-serif-display text-3xl font-normal sm:text-4xl">{capability.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#9d98a3]">{capability.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-[#f3efe9]/45">Tools I work with</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#9d98a3]" aria-label="Project management and collaboration tools">
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
