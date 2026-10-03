import { useState } from 'react';

const capabilities = ['Project Delivery', 'Cross-functional Teams', 'Product & Requirements', 'QA / UAT', 'Documentation', 'Stakeholder Management', 'Remote Collaboration'];

export default function DeliveryMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="marquee" aria-label={capabilities.join(", ")}>
      <div className="marquee-track" aria-hidden="true" style={{ animationPlayState: paused ? 'paused' : undefined }}>
        {[0, 1].map((copy) => <div className="marquee-group" key={copy}>{capabilities.map((label) => <span className="marquee-item" key={label}>{label}<b>✦</b></span>)}</div>)}
      </div>
      <button className="marquee-control" type="button" aria-label={paused ? 'Play capability marquee' : 'Pause capability marquee'} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>
    </div>
  );
}
