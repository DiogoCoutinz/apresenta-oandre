import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';
import { PlaceholderBox } from '../PlaceholderBox';

export const Slide06 = () => (
  <div className="relative w-full h-full slide-bg flex overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Left: main content */}
    <div className="flex-1 flex flex-col justify-center p-16 gap-8">
      {/* Strategy explanation */}
      <div>
        <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">A Estratégia</p>
        <p className="text-white/80 font-light leading-relaxed max-w-md" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
          Pegámos no vídeo viral e transformámo‑lo em anúncio. Novo CTA: "preencham este formulário."
        </p>
      </div>

      {/* Giant metric */}
      <div className="my-4">
        <div className="flex items-baseline gap-3 mb-2">
          <span
            className="gradient-text font-black glow-metric"
            style={{ fontSize: 'clamp(64px, 9vw, 120px)', letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            1,70€
          </span>
        </div>
        <p className="text-white font-semibold" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>
          por lead
        </p>
        <p className="text-white/40 mt-2" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
          Para quem percebe de publicidade paga — sabem o que este número significa.
        </p>
      </div>

      {/* Deal result */}
      <div className="flex items-center gap-4">
        <div className="glow-line w-16 h-px" />
        <div>
          <p className="text-white/40 text-xs mb-1">Deal fechado — meados de janeiro</p>
          <p className="gradient-text font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}>
            +€3.500
          </p>
        </div>
      </div>
    </div>

    {/* Right: placeholder */}
    <div className="w-80 flex flex-col justify-center p-8 gap-4">
      <PlaceholderBox label="Print Meta Ads — campanha e CPL de 1,70€" className="flex-1 min-h-48" />
      <PlaceholderBox label="Screenshot do deal — €3.500+" className="h-32" />
    </div>
  </div>
);
