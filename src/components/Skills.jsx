import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Project Delivery",
    description: "I turn business goals into practical scopes, timelines, priorities, ownership, risk plans, and clear paths toward release.",
  },
  {
    number: "02",
    title: "Cross-functional Coordination",
    description: "I align developers, designers, QA, operations, clients, and vendors so decisions, dependencies, and responsibilities remain visible.",
  },
  {
    number: "03",
    title: "Documentation Systems",
    description: "I create and maintain project records, meeting outcomes, requirements, version controls, and documentation that teams can reliably use.",
  },
  {
    number: "04",
    title: "Stakeholder Communication",
    description: "I provide concise updates on progress, risks, decisions, blockers, and next steps—giving stakeholders the context they need to act.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
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
      </div>
    </section>
  );
}
