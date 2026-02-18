import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide01 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Ambient background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #1A6FFF 0%, transparent 70%)' }} />
    </div>

    {/* Flowzi logo */}
    <div className="flex flex-col items-center gap-10 z-10">
      <img
        src={flowziLogo}
        alt="Flowzi"
        className="h-12 object-contain"
        style={{ filter: 'invert(1)', opacity: 0.9 }}
      />

      {/* Main headline */}
      <div className="text-center">
        <h1
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(56px, 8vw, 96px)', letterSpacing: '-0.03em' }}
        >
          Do Zero aos <span className="gradient-text glow-metric">+4.000€</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="gradient-text text-center font-medium max-w-2xl"
        style={{ fontSize: 'clamp(14px, 2vw, 20px)', lineHeight: 1.5 }}
      >
        Como vendemos soluções de IA que ninguém estava a vender em Portugal
      </p>

      {/* Glowing divider */}
      <div className="glow-line w-64 h-px" />

      {/* Speaker names */}
      <p
        className="text-white/60 font-light tracking-widest uppercase"
        style={{ fontSize: '13px', letterSpacing: '0.3em' }}
      >
        Marcelo &amp; Diogo — Flowzi
      </p>
    </div>
  </div>
);
