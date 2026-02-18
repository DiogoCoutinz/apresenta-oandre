import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';

export const Slide15 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)' }} />
    </div>

    {/* Top split */}
    <div className="flex flex-1 relative">
      {/* DIOGO side */}
      <div className="flex-1 flex items-center justify-center p-12 pr-16">
        <div className="max-w-xs text-center">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-4 uppercase">Diogo</p>
          <p className="text-white font-semibold leading-relaxed" style={{ fontSize: 'clamp(15px, 1.8vw, 22px)' }}>
            "10 meses de zero. Dois falhanços. Nunca parei."
          </p>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-px glow-line-vertical" />

      {/* MARCELO side */}
      <div className="flex-1 flex items-center justify-center p-12 pl-16">
        <div className="max-w-xs text-center">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-4 uppercase">Marcelo</p>
          <p className="text-white font-semibold leading-relaxed" style={{ fontSize: 'clamp(15px, 1.8vw, 22px)' }}>
            "6 anos a 300€. Uma transição. Um sócio. Um novo nível."
          </p>
        </div>
      </div>
    </div>

    {/* Center massive statement */}
    <div className="text-center px-12 pb-6">
      <p className="gradient-text font-black" style={{ fontSize: 'clamp(28px, 4.5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
        Mantém-te no jogo tempo suficiente.
      </p>
      <p className="text-white/50 mt-3 font-light" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>
        Só perdes quando desistes.
      </p>
    </div>

    {/* Divider */}
    <div className="glow-line h-px mx-12 opacity-50" />

    {/* Bottom: logo + social handles */}
    <div className="flex flex-col items-center gap-3 py-8">
      {/* Logo glowing */}
      <div className="relative">
        <div className="absolute inset-0 blur-xl opacity-40"
          style={{ background: 'radial-gradient(circle, #1A6FFF 0%, transparent 70%)', transform: 'scale(2)' }} />
        <img
          src={flowziLogo}
          alt="Flowzi"
          className="relative h-8 object-contain"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      {/* Social handles */}
      <div className="flex items-center gap-6">
        {['@flowzi.pt', '@marcelosantos', '@diogocoutinho.ai'].map((handle) => (
          <span key={handle} className="gradient-text-muted font-medium" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
            {handle}
          </span>
        ))}
      </div>

      {/* Final caption */}
      <p className="text-white/30 text-center" style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
        Se querias uma razão para começar — acabaste de ter duas.
      </p>
    </div>
  </div>
);
