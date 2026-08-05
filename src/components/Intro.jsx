import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <motion.div
        className="mx-auto grid w-[min(calc(100%-28px),1200px)] grid-cols-1 items-start gap-12 lg:w-[min(calc(100%-40px),1200px)] lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-serif-display text-[clamp(5rem,10vw,10rem)] leading-[0.8] text-[#b04d6b] [text-shadow:0_0_40px_rgba(176,77,107,0.16)]">
          5+
        </p>

        <div className="max-w-3xl">
          <p className="section-label">The short version</p>
          <h2 className="font-serif-display text-[clamp(2.7rem,5vw,5rem)] font-normal leading-none tracking-[-0.03em]">
            Clear processes. Practical coordination. Reliable delivery.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#9d98a3] sm:text-[1.05rem]">
            <p>
              I’m a <strong className="font-medium text-[#f3efe9]">Digital Project Manager</strong> with more than five years of experience delivering software, SaaS, EdTech, and digital transformation initiatives.
            </p>
            <p>
              I work across development, design, QA, clients, vendors, and business stakeholders—bringing clarity to requirements, priorities, documentation, risks, and delivery.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
