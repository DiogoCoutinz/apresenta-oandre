import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide12 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-16">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* TOP: headline */}
    <div className="pt-6 mb-8 z-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Demo</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.02em' }}>
        É isto que vale{' '}
        <span className="gradient-text glow-metric">+3.500&euro;</span>
      </h1>
      <p className="text-white/40 mt-3 font-light" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>
        Ao vivo. Sem edição.
      </p>
    </div>

    {/* CENTER: the giant glowing frame */}
    <div className="flex-1 flex items-center justify-center z-10">
      <div
        className="relative flex items-center justify-center w-full"
        style={{ maxWidth: 'min(800px, 85%)', aspectRatio: '16/9' }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-2xl opacity-40"
          style={{ boxShadow: '0 0 60px rgba(26,111,255,0.5), 0 0 120px rgba(123,47,255,0.3), inset 0 0 60px rgba(26,111,255,0.1)' }} />
        {/* Frame border */}
        <div className="absolute inset-0 rounded-2xl"
          style={{ border: '1px solid rgba(26,111,255,0.4)' }} />
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
    </div>
  </div>
);
