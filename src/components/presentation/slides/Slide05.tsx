import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide05 = () => (
  <div className="relative w-full h-full slide-bg overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* ── BACKGROUND GLOWS ── */}
    <div className="absolute inset-0 pointer-events-none">
      {/* left blue haze */}
      <div className="absolute top-0 left-0 w-1/2 h-full"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(26,111,255,0.13) 0%, transparent 65%)' }} />
      {/* right purple haze */}
      <div className="absolute top-0 right-0 w-1/2 h-full"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(192,38,211,0.13) 0%, transparent 65%)' }} />
      {/* center explosion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.18) 0%, transparent 70%)' }} />
    </div>

    {/* ── TWO LARGE PORTRAIT PANELS ── */}
    <div className="absolute inset-0 flex items-stretch">

      {/* DIOGO panel */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src="/fotohistoria/diogofoto.jpeg"
          alt="Diogo"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(30%) brightness(0.55)', transform: 'scale(1.05)' }}
        />
        {/* right fade into center */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, transparent 40%, #0B0F1A 100%)' }} />
        {/* bottom fade */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0B0F1A 0%, transparent 40%)' }} />
        {/* name */}
        <div className="absolute bottom-24 left-10 z-10">
          <p className="text-white/90 font-black text-2xl tracking-tight">Diogo</p>
        </div>
      </div>

      {/* CENTER CONVERGENCE */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-shrink-0 w-48">
        {/* vertical line top */}
        <div className="flex-1 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(123,47,255,0.5))' }} />

        {/* spark point */}
        <div className="flex flex-col items-center gap-3 py-4">
          {/* tiny dots decoration */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full" style={{ background: `rgba(123,47,255,${0.3 + i * 0.2})` }} />
            ))}
          </div>

          {/* Flowzi logo badge */}
          <div
            className="rounded-2xl p-3"
            style={{
              background: 'rgba(10,10,20,0.9)',
              border: '1px solid rgba(123,47,255,0.5)',
              boxShadow: '0 0 40px rgba(123,47,255,0.35), 0 0 80px rgba(123,47,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            <img src={flowziLogo} alt="Flowzi" className="h-7 object-contain" />
          </div>

          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full" style={{ background: `rgba(123,47,255,${0.5 - i * 0.15})` }} />
            ))}
          </div>
        </div>

        {/* vertical line bottom */}
        <div className="flex-1 w-px" style={{ background: 'linear-gradient(to top, transparent, rgba(123,47,255,0.5))' }} />
      </div>

      {/* MARCELO panel */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src="/fotohistoriamarcelo/marcelo.png"
          alt="Marcelo"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(30%) brightness(0.55)', transform: 'scale(1.05)' }}
        />
        {/* left fade into center */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to left, transparent 40%, #0B0F1A 100%)' }} />
        {/* bottom fade */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0B0F1A 0%, transparent 40%)' }} />
        {/* name */}
        <div className="absolute bottom-24 right-10 z-10 text-right">
          <p className="text-white/90 font-black text-2xl tracking-tight">Marcelo</p>
        </div>
      </div>
    </div>

    {/* ── BOTTOM TEXT OVERLAY ── */}
    <div className="absolute bottom-0 inset-x-0 z-30 px-14 pb-10 flex flex-col items-center text-center">
      {/* headline */}
      <h1
        className="text-white font-black leading-[0.9] mb-3"
        style={{ fontSize: 'clamp(32px, 4.5vw, 62px)', letterSpacing: '-0.03em' }}
      >
        Um jantar do André.<br />
        <span className="gradient-text">Tudo mudou.</span>
      </h1>

      {/* quote */}
      <p className="text-white/40 font-light italic" style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}>
        "Já nos conhecíamos das redes. Sentámos à mesa. Não levantámos mais."
      </p>

      {/* unified pill tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {['Automação', 'IA', 'N8N', 'Produto', 'Ads', 'Estratégia', 'Vendas', 'Growth'].map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-[9px] font-medium text-white/45"
            style={{ background: 'rgba(123,47,255,0.08)', border: '1px solid rgba(123,47,255,0.18)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
