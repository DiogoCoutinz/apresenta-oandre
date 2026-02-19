import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const Stat = ({ value, label, color = '#1A6FFF' }: { value: string; label: string; color?: string }) => (
  <div className="text-center">
    <p className="font-black" style={{
      fontSize: 'clamp(20px, 2.5vw, 32px)',
      letterSpacing: '-0.02em',
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
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
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
    />

    {/* Left: main content */}
    <div className="flex-1 flex flex-col justify-center p-14 gap-5">

      {/* Strategy label */}
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase">A Estratégia</p>

      {/* Explanation */}
      <p className="text-white/70 font-light leading-relaxed max-w-lg" style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}>
        Pegamos no video viral e transformamo-lo em anúncio pago.
        <br />
        Novo CTA: <span className="text-white font-medium">"preencham este formulário."</span>
      </p>

      {/* Giant metric — clean, no animation */}
      <div>
        <span
          className="font-black"
          style={{
            fontSize: 'clamp(64px, 9vw, 120px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            display: 'block',
            background: 'linear-gradient(135deg, #1A6FFF, #7B2FFF, #C026D3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          1,54&euro;
        </span>
        <p className="text-white font-semibold mt-2" style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}>
          por lead
        </p>
        <p className="text-white/35 mt-1" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
          Para quem percebe de publicidade paga — sabem o que este número significa.
        </p>
      </div>

      {/* Stats row */}
      <div
        className="flex items-center gap-5 px-5 py-3 rounded-xl max-w-md"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Stat value="70" label="Leads" color="#1A6FFF" />
        <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <Stat value="107€" label="Investido" color="#7B2FFF" />
        <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <Stat value="17.8K" label="Impressões" color="#1A6FFF" />
        <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <Stat value="10.2K" label="Alcance" color="#C026D3" />
      </div>

      {/* Deal result */}
      <div className="flex items-center gap-4 mt-1">
        <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #1A6FFF, transparent)' }} />
        <div>
          <p className="text-white/35 text-xs mb-1">Deal fechado — meados de janeiro</p>
          <p className="font-black" style={{
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #1A6FFF, #7B2FFF, #C026D3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            +&euro;3.500
          </p>
        </div>
      </div>
    </div>

    {/* Right: Meta Ads screenshot — bigger and better positioned */}
    <div className="w-[42%] flex flex-col justify-center p-8 gap-4">
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: '1px solid rgba(26,111,255,0.2)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 40px rgba(26,111,255,0.06)',
        }}
      >
        <img
          src="/printmeta.png"
          alt="Meta Ads — Campanha Faturas IA"
          className="w-full h-auto"
          style={{ background: '#fff' }}
        />
        <div
          className="px-4 py-2.5"
          style={{ background: 'rgba(11,15,26,0.9)' }}
        >
          <p className="text-white/50 font-medium" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
            Meta Ads — Campanha Faturas IA — 1,54&euro;/lead
          </p>
        </div>
      </div>

      {/* Quote */}
      <div
        className="rounded-xl px-5 py-4"
        style={{
          background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(192,38,211,0.03))',
          border: '1px solid rgba(26,111,255,0.1)',
        }}
      >
        <p className="text-white/60 font-medium italic" style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: 1.5 }}>
          "Video viral como anúncio + formulário = leads a 1,54&euro;. Sem equipa de marketing. Sem agência."
        </p>
      </div>
    </div>
  </div>
);
