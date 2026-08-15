import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";

const contactLinks = [
  { label: "Email", url: "mailto:shellawaramena@gmail.com", icon: BiLogoGmail },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/shellawaramena/", icon: IoLogoLinkedin },
  { label: "Resume", url: "/cv.pdf", icon: TbDownload, download: true },
];

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-[75vh] scroll-mt-20 items-center border-t border-white/10 bg-[#050507] py-24 sm:py-28 lg:py-[120px]">
      <motion.div
        className="mx-auto w-[min(calc(100%-28px),1200px)] text-center lg:w-[min(calc(100%-40px),1200px)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-label justify-center before:hidden">Contact</p>
        <h2 className="mx-auto max-w-[950px] font-serif-display text-[clamp(3.3rem,8vw,7.8rem)] font-normal leading-[0.92] tracking-[-0.04em]">
          Have something complicated that needs shipping?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#9d98a3]">
          I’m interested in remote opportunities across IT Project Management, Project Coordination, and digital product delivery.
        </p>
        <motion.a
          href="mailto:shellawaramena@gmail.com"
          className="mt-10 inline-block max-w-full break-all border-b border-[#b04d6b] font-serif-display text-[clamp(1.25rem,4vw,3.3rem)] transition-colors hover:text-[#b04d6b]"
          whileHover={{ y: -2 }}
        >
          shellawaramena@gmail.com
        </motion.a>

        <div className="mt-9 flex items-center justify-center gap-3">
          {contactLinks.map(({ label, url, icon: Icon, download }) => (
            <motion.a
              key={label}
              href={url}
              target={!download && !url.startsWith("mailto:") ? "_blank" : undefined}
              rel={!download && !url.startsWith("mailto:") ? "noopener noreferrer" : undefined}
              download={download || undefined}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#9d98a3] transition-colors hover:border-[#b04d6b]/70 hover:text-white"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
