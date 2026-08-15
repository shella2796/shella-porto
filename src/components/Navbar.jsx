import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbDownload } from "react-icons/tb";

const navigation = [
  { id: "projects", label: "Work" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#050507]/80 font-galaxy text-[#f3efe9] backdrop-blur-2xl"
    >
      <div className="mx-auto flex min-h-[76px] w-[min(calc(100%-28px),1200px)] items-center justify-between gap-6 lg:w-[min(calc(100%-40px),1200px)]">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3.5 text-left font-semibold"
          aria-label="Shella Waramena home"
        >
          <motion.span
            className="grid h-[38px] w-[38px] place-items-center rounded-full border border-white/30 text-[11px] tracking-[-0.04em] shadow-[0_0_24px_rgba(176,77,107,0.16)]"
            whileHover={{ rotate: 8, scale: 1.05 }}
          >
            SW
          </motion.span>
          <span className="text-sm transition-colors group-hover:text-[#b04d6b]">SW <span className="text-white/30">|</span> Shella Waramena</span>
        </button>

        <nav className="hidden items-center gap-5 text-sm text-[#9d98a3] lg:flex xl:gap-7" aria-label="Primary navigation">
          {navigation.map(({ id, label }) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)} className="transition-colors hover:text-[#f3efe9]">
              {label}
            </button>
          ))}
          <motion.a
            href="/cv.pdf"
            download
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[#f3efe9] transition-colors hover:border-white/40 hover:bg-[#f3efe9] hover:text-[#050507]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume <TbDownload size={15} />
          </motion.a>
        </nav>

        <button
          type="button"
          className="text-sm font-medium lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="absolute left-3.5 right-3.5 top-[84px] rounded-2xl border border-white/10 bg-[#111118]/95 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col items-start gap-5 text-[#9d98a3]">
              {navigation.map(({ id, label }) => (
                <button key={id} type="button" onClick={() => scrollToSection(id)} className="w-full border-b border-white/10 pb-4 text-left transition-colors hover:text-white">
                  {label}
                </button>
              ))}
              <a href="/cv.pdf" download rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[#f3efe9]">
                Resume <TbDownload size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
