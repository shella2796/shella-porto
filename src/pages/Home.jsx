import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TbArrowDownRight, TbDownload } from "react-icons/tb";

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const hero = canvas?.parentElement;
    if (!canvas || !context || !hero) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let animationFrame;

    const createStars = () => {
      const count = Math.min(170, Math.floor((canvas.width * canvas.height) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.25 + 0.2,
        alpha: Math.random() * 0.65 + 0.15,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = hero.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      createStars();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const flicker = reduceMotion
          ? star.alpha
          : star.alpha + Math.sin(time * star.speed + star.phase) * 0.16;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(243, 239, 233, ${Math.max(0.05, flicker)})`;
        context.fill();
      });
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(hero);
    resize();
    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-30" aria-hidden="true" />;
}

const orbitTransition = (duration) => ({
  duration,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
});

function OrbitSystem() {
  const reduceMotion = useReducedMotion();
  const rings = [
    { size: "42%", duration: 16, label: "Delivery", labelClass: "-top-3 left-[47%]" },
    { size: "68%", duration: 24, label: "People", labelClass: "right-[-18px] top-1/2", reverse: true },
    { size: "94%", duration: 34, label: "Systems", labelClass: "bottom-[8%] left-[4%]" },
  ];
  const planets = [
    { label: "PM", className: "right-[22%] top-[17%] h-10 w-10", duration: 4.8 },
    { label: "QA", className: "right-[1%] top-[48%] h-14 w-14", duration: 6, offset: 8 },
    { label: "DOC", className: "bottom-[4%] left-[25%] h-12 w-12", duration: 5.4 },
    { label: "DEV", className: "left-[4%] top-[25%] h-10 w-10", duration: 4.2, offset: 8 },
  ];

  return (
    <motion.div
      className="relative mx-auto grid aspect-square w-full max-w-[560px] place-items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      aria-label="Shella's professional orbit"
    >
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.01)_42%,transparent_68%)] blur-[10px]" />
      {rings.map((ring) => (
        <motion.div
          key={ring.label}
          className="absolute rounded-full border border-white/15 before:absolute before:inset-[-1px] before:rounded-full before:border before:border-transparent before:border-t-[#b04d6b]/70"
          style={{ width: ring.size, height: ring.size }}
          initial={{ rotate: ring.reverse ? 18 : -18 }}
          animate={reduceMotion ? undefined : { rotate: ring.reverse ? -342 : 342 }}
          transition={reduceMotion ? undefined : orbitTransition(ring.duration)}
        >
          <span className={`absolute hidden rounded-full border border-white/10 bg-[#08080c]/90 px-2 py-1 text-[9px] uppercase tracking-[0.13em] text-[#f2eee8]/55 backdrop-blur-sm sm:block ${ring.labelClass}`}>
            {ring.label}
          </span>
        </motion.div>
      ))}

      <div className="relative z-10 grid aspect-square w-[31%] place-items-center rounded-full border border-[#f2eee8]/30 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.17),transparent_26%),linear-gradient(145deg,rgba(125,39,56,0.9),rgba(31,20,48,0.94))] shadow-[0_0_45px_rgba(125,39,56,0.28),0_0_110px_rgba(91,56,140,0.13),inset_0_0_35px_rgba(255,255,255,0.05)]">
        <div className="text-center">
          <span className="block font-serif-display text-[clamp(2.3rem,5vw,4.7rem)] leading-[0.85]">SW</span>
          <span className="mt-2 block text-[8px] uppercase tracking-[0.15em] text-white/60">Project Manager</span>
        </div>
      </div>

      {planets.map((planet) => (
        <motion.div
          key={planet.label}
          className={`absolute z-20 grid place-items-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.19),transparent_24%),#111018] text-[9px] tracking-[0.08em] text-white/70 shadow-[0_0_25px_rgba(117,77,177,0.22),inset_0_0_18px_rgba(255,255,255,0.04)] ${planet.className}`}
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={reduceMotion ? undefined : { duration: planet.duration, repeat: Infinity, ease: "easeInOut", delay: planet.offset ? planet.duration / 2 : 0 }}
        >
          {planet.label}
        </motion.div>
      ))}
      <span className="absolute right-[10%] top-[5%] h-2 w-2 rounded-full bg-[#f2eee8] shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.3)]" />
    </motion.div>
  );
}

export default function Home() {
  const socials = [
    { icon: BiLogoGmail, url: "mailto:shellawaramena@gmail.com", label: "Email" },
    { icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/shellawaramena", label: "LinkedIn" },
    { icon: BsGithub, url: "https://github.com/shella2796", label: "GitHub" },
  ];

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050507] font-galaxy text-[#f3efe9] [background:radial-gradient(circle_at_72%_42%,rgba(76,42,120,0.22),transparent_26%),radial-gradient(circle_at_20%_20%,rgba(125,39,56,0.17),transparent_28%),linear-gradient(145deg,#050505_0%,#090812_45%,#050505_100%)]"
    >
      <StarField />
      <div className="pointer-events-none absolute right-[9%] top-[12%] -z-20 h-72 w-72 rounded-full bg-[#653eaa]/15 blur-[90px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-[4%] left-[4%] -z-20 h-64 w-64 rounded-full bg-[#93304b]/10 blur-[90px] sm:h-80 sm:w-80" />

      <div className="mx-auto grid min-h-[calc(100vh-48px)] w-[min(calc(100%-28px),1200px)] grid-cols-1 items-center gap-12 pb-16 pt-32 lg:w-[min(calc(100%-40px),1200px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-[70px] lg:pb-10 lg:pt-[130px]">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-7 text-xs uppercase tracking-[0.15em] text-[#9d98a3] sm:mb-8 sm:text-sm">
            Digital / IT Project Manager
          </p>
          <h1 className="font-serif-display text-[clamp(3.3rem,14vw,6rem)] font-normal leading-[0.92] tracking-[-0.04em] lg:text-[clamp(4rem,7.5vw,7.8rem)]">
            <span className="block">I turn messy requirements</span>
            <span className="relative block text-transparent [-webkit-text-stroke:1px_rgba(242,238,232,0.68)] after:absolute after:bottom-[-15px] after:left-1 after:h-0.5 after:w-[90px] after:bg-gradient-to-r after:from-[#b04d6b] after:to-transparent">
              into products that actually ship.
            </span>
          </h1>
          <p className="mt-10 max-w-[660px] text-base leading-7 text-[#9d98a3] sm:text-lg">
            IT Project Manager with 5+ years of experience working across software, SaaS, EdTech, and digital products. I coordinate people, requirements, timelines, QA, stakeholders, and releases from idea to production.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f3efe9] bg-[#f3efe9] px-6 text-sm font-semibold text-[#050507] transition-colors hover:border-[#b04d6b] hover:bg-[#b04d6b] hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Selected Work <TbArrowDownRight size={18} />
            </motion.button>
            <motion.a
              href="/cv.pdf"
              download
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-[#f3efe9] transition-colors hover:border-white/45"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume <TbDownload size={17} />
            </motion.a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socials.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target={url.startsWith("mailto:") ? undefined : "_blank"}
                rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#9d98a3] transition-colors hover:border-[#b04d6b]/70 hover:text-white"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.17em] text-[#f2eee8]/40 lg:mt-14">
            <span>Indonesia</span>
            <span>Remote</span>
            <span>5+ years in project delivery</span>
          </div>
        </motion.div>

        <OrbitSystem />
      </div>

      <div className="mx-auto flex w-[min(calc(100%-28px),1200px)] items-center pb-6 text-[10px] uppercase tracking-[0.16em] text-[#9d98a3] lg:w-[min(calc(100%-40px),1200px)] lg:text-xs">
        <span>Scroll through the system</span>
        <span className="ml-6 h-px flex-1 bg-white/10" />
      </div>
    </section>
  );
}
