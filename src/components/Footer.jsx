export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] py-8 text-xs text-[#9d98a3]">
      <div className="mx-auto flex w-[min(calc(100%-28px),1200px)] flex-col items-start justify-between gap-5 sm:flex-row sm:items-center lg:w-[min(calc(100%-40px),1200px)]">
        <p>© {new Date().getFullYear()} Shella Waramena</p>
        <div className="flex flex-wrap gap-5">
          <a href="https://www.linkedin.com/in/shellawaramena" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#f3efe9]">LinkedIn</a>
          <a href="https://github.com/shella2796" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#f3efe9]">GitHub</a>
          <a href="#home" className="transition-colors hover:text-[#f3efe9]">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
