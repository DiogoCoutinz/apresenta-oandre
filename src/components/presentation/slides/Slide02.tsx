import { SpeakerTag } from '../SpeakerTag';

const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 60 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 2 + 1 + 'px',
          height: Math.random() * 2 + 1 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          background: i % 3 === 0 ? '#1A6FFF' : i % 3 === 1 ? '#7B2FFF' : '#ffffff',
          opacity: Math.random() * 0.4 + 0.1,
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: Math.random() * 3 + 's',
        }}
      />
    ))}
    <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.6; }
      }
    `}</style>
  </div>
);

export const Slide02 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <ParticleField />

    {/* Split screen */}
    <div className="flex flex-1 relative">
      {/* DIOGO side */}
      <div className="flex-1 flex items-center justify-center p-16 pr-20">
        <div className="max-w-sm">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-6 uppercase">Diogo</p>
          <p
            className="text-white font-light leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.8vw, 22px)', lineHeight: 1.7 }}
          >
            "Se me dissessem há um ano que ia estar num palco em Lisboa a falar para 100 pessoas sobre IA, eu dizia que estavam completamente malucos."
          </p>
        </div>
      </div>

      {/* Vertical glowing divider */}
      <div className="absolute left-1/2 top-12 bottom-24 -translate-x-1/2 w-px glow-line-vertical" />

      {/* MARCELO side */}
      <div className="flex-1 flex items-center justify-center p-16 pl-20">
        <div className="max-w-sm">
          <p className="text-white/30 text-xs font-bold tracking-[0.25em] mb-6 uppercase">Marcelo</p>
          <p
            className="text-white font-light leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.8vw, 22px)', lineHeight: 1.7 }}
          >
            "Há um ano vendia websites a 300€."
          </p>
        </div>
      </div>
    </div>

    {/* Bottom full-width statement */}
    <div className="w-full text-center pb-16 px-8">
      <p
        className="gradient-text font-black"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
      >
        Hoje estamos aqui.
      </p>
    </div>
  </div>
);
