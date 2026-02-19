import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const Stat = ({ value, label, color = '#1A6FFF' }: { value: string; label: string; color?: string }) => (
  <div className="text-center">
    <p className="font-black" style={{
      fontSize: 'clamp(22px, 2.8vw, 36px)',
      letterSpacing: '-0.02em',
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: `drop-shadow(0 0 12px ${color}66)`,
    }}>
      {value}
    </p>
    <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase mt-1">{label}</p>
  </div>
);

export const Slide06 = () => (
  <div className="relative w-full h-full slide-bg flex overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Ambient glow */}
    <div
      className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
    />

    {/* Left: main content */}
    <div className="flex-1 flex flex-col justify-center p-14 gap-6">

      {/* Strategy label */}
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase">A Estratégia</p>

      {/* Explanation */}
      <p className="text-white/80 font-light leading-relaxed max-w-lg" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
        Pegamos no video viral e transformamo-lo em anúncio pago.
        Novo CTA: <span className="text-white font-medium">"preencham este formulário."</span>
      </p>

      {/* Giant metric */}
      <div className="my-2">
        <span
          className="gradient-text font-black glow-metric"
          style={{ fontSize: 'clamp(72px, 10vw, 140px)', letterSpacing: '-0.04em', lineHeight: 0.9, display: 'block' }}
        >
          1,54&euro;
        </span>
        <p className="text-white font-semibold mt-2" style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}>
          por lead
        </p>
        <p className="text-white/40 mt-1" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
          Para quem percebe de publicidade paga — sabem o que este número significa.
        </p>
      </div>

      {/* Stats row from actual Meta Ads data */}
      <div
        className="flex items-center gap-6 px-6 py-4 rounded-xl max-w-lg"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Stat value="70" label="Leads" color="#1A6FFF" />
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <Stat value="107€" label="Investido" color="#7B2FFF" />
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <Stat value="17.8K" label="Impressões" color="#1A6FFF" />
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <Stat value="10.2K" label="Alcance" color="#C026D3" />
      </div>

      {/* Deal result */}
      <div className="flex items-center gap-4 mt-2">
        <div className="glow-line w-16 h-px" />
        <div>
          <p className="text-white/40 text-xs mb-1">Deal fechado — meados de janeiro</p>
          <p className="gradient-text font-black" style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.02em' }}>
            +&euro;3.500
          </p>
        </div>
      </div>
    </div>

    {/* Right: Real Meta Ads screenshot */}
    <div className="w-[40%] flex flex-col justify-center p-8 gap-5">
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: '1px solid rgba(26,111,255,0.25)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(26,111,255,0.08)',
        }}
      >
        <img
          src="/printmeta.png"
          alt="Meta Ads — Campanha Faturas IA"
          className="w-full h-auto object-contain"
          style={{ background: '#fff' }}
        />
        <div
          className="px-4 py-2"
          style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.95), rgba(11,15,26,0.7))' }}
        >
          <p className="text-white/60 font-medium" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
            Meta Ads — Campanha Faturas IA — 1,54&euro;/lead
          </p>
        </div>
      </div>

      {/* Quote */}
      <div
        className="rounded-xl px-5 py-4"
        style={{
          background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(192,38,211,0.04))',
          border: '1px solid rgba(26,111,255,0.12)',
        }}
      >
        <p className="text-white/70 font-medium italic" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', lineHeight: 1.5 }}>
          "Video viral como anúncio + formulário = leads a 1,54&euro;. Sem equipa de marketing. Sem agência."
        </p>
      </div>
    </div>
  </div>
);
