import { motion } from "framer-motion";

const experiences = [
  {
    period: "Nov 2024–Present",
    role: "IT Project Coordinator & Document Controller",
    company: "Louisiana Home Performance",
    type: "Remote",
    logo: "/assets/lhp.png",
    summary: "Coordinating IT initiatives, schedules, stakeholder updates, project documentation, and document-control processes.",
  },
  {
    period: "Dec 2024–May 2025",
    role: "IT Project Manager",
    company: "Xcidic Pte Ltd",
    type: "Remote",
    logo: "/assets/xcidic.png",
    summary: "Aligned developers and clients, facilitated Scrum activities, and managed workload planning and delivery priorities in Jira.",
  },
  {
    period: "Dec 2021–Nov 2024",
    role: "Project Manager",
    company: "PT Centrinova Solusi Edukasi",
    type: "Hybrid",
    logo: "/assets/centrinova.webp",
    summary: "Coordinated internal teams and vendors while managing resources, project progress, and client alignment across digital-learning initiatives.",
  },
  {
    period: "May 2021–Nov 2021",
    role: "IT Project Manager",
    company: "PT Djelas Tandatangan Bersama",
    type: "Hybrid",
    logo: "/assets/dtb.jpg",
    summary: "Managed requirements, feature delivery, testing progress, documentation, and reporting across business and technical teams.",
  },
  {
    period: "Nov 2018–Jan 2021",
    role: "Project Manager",
    company: "PT Pratama Abadi Industri",
    type: "On-site",
    logo: "/assets/pratama.jpg",
    summary: "Managed schedules, budgets, cross-functional production, and client communication across five regions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <div className="mx-auto w-[min(calc(100%-28px),1200px)] lg:w-[min(calc(100%-40px),1200px)]">
        <motion.div
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="section-label">Experience</p>
            <h2 className="font-serif-display text-[clamp(3.3rem,8vw,7.8rem)] font-normal leading-[0.92] tracking-[-0.04em]">Work, over time.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#9d98a3]">
            More than five years coordinating digital products, teams, stakeholders, and documentation across remote, hybrid, and on-site environments.
          </p>
        </motion.div>

        <div className="mt-14 border-t border-white/10 lg:mt-16">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              className="grid grid-cols-1 gap-3 border-b border-white/10 py-7 transition-all hover:bg-[#0b0b10] sm:grid-cols-[150px_1fr_auto] sm:items-start sm:gap-7 sm:hover:px-4"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-xs leading-6 text-[#9d98a3]">{experience.period}</p>
              <div className="flex items-start gap-4">
                <img src={experience.logo} alt="" className="mt-1 h-8 w-8 rounded-full object-contain" />
                <div>
                  <h3 className="text-base font-medium text-[#f3efe9]">{experience.role}</h3>
                  <p className="mt-1 text-sm text-[#9d98a3]">{experience.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9d98a3]">{experience.summary}</p>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.1em] text-[#b04d6b] sm:text-right">{experience.type}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
