import Reveal from './ui/Reveal';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Shella">
      <div className="wrap about-grid">
        <Reveal><p className="section-number">05 / About</p><p className="about-stat">5+<span>years bringing structure<br />to project delivery</span></p></Reveal>
        <div><Reveal><h2 className="section-title">I LIKE MAKING<br />COMPLICATED THINGS<br />LESS COMPLICATED.</h2></Reveal>
          <Reveal className="about-copy"><p>My work usually sits somewhere between people who know what they want, developers figuring out how to build it, and a deadline approaching suspiciously fast.</p><p>I’ve spent the last several years coordinating digital products across distributed teams, translating business requirements into executable work, keeping communication moving, and making sure “done” actually means shipped.</p><p>I’m technical enough to understand the conversation, but my real strength is <strong>connecting the pieces</strong>: people, priorities, requirements, documentation, and delivery.</p></Reveal>
        </div>
      </div>
    </section>
  );
}
