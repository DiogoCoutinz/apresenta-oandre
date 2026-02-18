import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide12 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden p-12">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Top headline */}
    <p className="text-white font-black mb-10" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.01em' }}>
      Ao vivo. <span className="gradient-text">Sem edição.</span>
    </p>

    {/* The giant glowing frame */}
    <div
      className="relative flex items-center justify-center"
      style={{ width: 'min(800px, 80vw)', aspectRatio: '16/9' }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-2xl opacity-40"
        style={{ boxShadow: '0 0 60px rgba(26,111,255,0.5), 0 0 120px rgba(123,47,255,0.3), inset 0 0 60px rgba(26,111,255,0.1)' }} />
      {/* Frame border */}
      <div className="absolute inset-0 rounded-2xl"
        style={{ border: '1px solid rgba(26,111,255,0.5)' }} />
      {/* Corner accents */}
      {[
        'top-0 left-0 border-l-2 border-t-2 rounded-tl-2xl',
        'top-0 right-0 border-r-2 border-t-2 rounded-tr-2xl',
        'bottom-0 left-0 border-l-2 border-b-2 rounded-bl-2xl',
        'bottom-0 right-0 border-r-2 border-b-2 rounded-br-2xl',
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 ${cls}`}
          style={{ borderColor: '#1A6FFF' }} />
      ))}
      {/* Inner content */}
      <div className="text-center z-10">
        <p className="text-white/15 font-light" style={{ fontSize: 'clamp(11px, 1vw, 14px)', letterSpacing: '0.2em' }}>
          DEMO AO VIVO
        </p>
        <p className="text-white/8 text-xs mt-2" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
          Fluxo N8N + Agente de Reativação visíveis durante a demo
        </p>
      </div>
    </div>

    {/* Bottom caption */}
    <p className="mt-10 gradient-text font-black" style={{ fontSize: 'clamp(22px, 3vw, 40px)', letterSpacing: '-0.02em' }}>
      É isto que vale €3.500+
    </p>
  </div>
);
