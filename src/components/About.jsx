import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <span className="pointer-events-none absolute -bottom-32 -right-10 font-serif-display text-[18rem] leading-none text-white/[0.025] sm:text-[25rem]" aria-hidden="true">SW</span>
      <motion.div
        className="relative z-10 mx-auto grid w-[min(calc(100%-28px),1200px)] grid-cols-1 items-start gap-12 lg:w-[min(calc(100%-40px),1200px)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="font-serif-display text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.95] tracking-[-0.03em]">
          I like making complicated things <span className="text-[#b04d6b]">less complicated.</span>
        </h2>

        <div className="max-w-xl">
          <p className="section-label">About</p>
          <div className="space-y-5 text-base leading-8 text-[#9d98a3]">
            <p>
              My work usually sits somewhere between people who know what they want, developers figuring out how to build it, and a deadline approaching suspiciously fast.
            </p>
            <p>
              I’ve spent the last several years coordinating digital products across distributed teams, translating business requirements into executable work, keeping communication moving, and making sure “done” actually means shipped.
            </p>
            <p>
              I’m technical enough to understand the conversation, but my real strength is connecting the pieces: people, priorities, requirements, documentation, and delivery.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
