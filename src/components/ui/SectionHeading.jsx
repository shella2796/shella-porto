import Reveal from './Reveal';

// eslint-disable-next-line react/prop-types
export default function SectionHeading({ number, label, title, children }) {
  return (
    <Reveal className="section-heading">
      <p className="section-number">{number} / {label}</p>
      <div>
        <h2 className="section-title">{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
    </Reveal>
  );
}
