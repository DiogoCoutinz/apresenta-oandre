import { useMemo } from 'react';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const ParticleField = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        w: (((i * 7 + 13) % 20) / 10) + 1,
        top: ((i * 17 + 3) % 100),
        left: ((i * 31 + 7) % 100),
        color: i % 3 === 0 ? '#1A6FFF' : i % 3 === 1 ? '#7B2FFF' : '#C026D3',
        opacity: ((i * 11 + 5) % 40) / 100 + 0.05,
        dur: ((i * 13 + 2) % 30) / 10 + 2,
        delay: ((i * 19 + 1) % 30) / 10,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w + 'px',
            height: p.w + 'px',
            top: p.top + '%',
            left: p.left + '%',
            background: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.w * 4}px ${p.color}`,
            animation: `twinkle ${p.dur}s ease-in-out infinite`,
            animationDelay: p.delay + 's',
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export const Slide02 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />
    <ParticleField />

    {/* Background photo — cinematic, dark */}
    <div className="absolute inset-0">
      <img
        src="/fotodiogomarcelolanding.png"
        alt="Diogo e Marcelo"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 55%', filter: 'brightness(0.2) saturate(0.8) blur(2px)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(11,15,26,0.7) 0%,
            rgba(11,15,26,0.85) 30%,
            rgba(11,15,26,0.95) 60%,
            rgba(11,15,26,0.98) 100%
          )`,
        }}
      />
    </div>

    {/* Large ambient glows */}
    <div
      className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 60%)', filter: 'blur(80px)' }}
    />
    <div
      className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.06) 0%, transparent 60%)', filter: 'blur(60px)' }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full p-14">

      {/* TOP: massive headline */}
      <div className="pt-8 mb-6">
        <p
          className="font-black leading-[0.95]"
          style={{
            fontSize: 'clamp(52px, 7vw, 96px)',
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 40px rgba(26,111,255,0.15))',
          }}
        >
          Hoje estamos aqui.
        </p>
        <p className="text-white/40 font-light mt-3" style={{ fontSize: 'clamp(14px, 1.4vw, 19px)' }}>
          Há um ano atrás, nenhum de nós imaginava isto.
        </p>
        <div
          className="h-px w-32 mt-5"
          style={{
            background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, transparent)',
            boxShadow: '0 0 12px rgba(26,111,255,0.5)',
          }}
        />
      </div>

      {/* CENTER: two quote cards — side by side, glassy */}
      <div className="flex-1 flex items-center">
        <div className="flex gap-5 w-full">

          {/* DIOGO card */}
          <div
            className="flex-1 relative rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(26,111,255,0.08), rgba(26,111,255,0.02))',
              border: '1px solid rgba(26,111,255,0.2)',
              boxShadow: '0 8px 50px rgba(0,0,0,0.3), 0 0 40px rgba(26,111,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Glow accent */}
            <div
              className="absolute -top-16 -left-16 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.3) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <p className="gradient-text-muted text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Diogo</p>

              <div className="flex items-start gap-3 flex-1">
                <span
                  className="gradient-text font-black select-none flex-shrink-0"
                  style={{ fontSize: '48px', lineHeight: '0.7', opacity: 0.2 }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-white font-semibold leading-relaxed"
                  style={{ fontSize: 'clamp(16px, 1.7vw, 22px)', lineHeight: 1.5 }}
                >
                  Se me dissessem há um ano que ia estar num palco a falar para 100 pessoas sobre IA, eu dizia que estavam completamente malucos.
                </p>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26,111,255,0.2), rgba(123,47,255,0.2))',
                    border: '1px solid rgba(26,111,255,0.3)',
                  }}
                >
                  <span className="gradient-text font-bold text-[10px]">DC</span>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium">10 meses de zero. 2 falhanços.</p>
                  <p className="text-white/30 text-[10px]">Hoje vende soluções por +3.500&euro;</p>
                </div>
              </div>
            </div>
          </div>

          {/* MARCELO card */}
          <div
            className="flex-1 relative rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(192,38,211,0.08), rgba(192,38,211,0.02))',
              border: '1px solid rgba(192,38,211,0.2)',
              boxShadow: '0 8px 50px rgba(0,0,0,0.3), 0 0 40px rgba(192,38,211,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Glow accent */}
            <div
              className="absolute -top-16 -right-16 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.3) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <p className="gradient-text-muted text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Marcelo</p>

              <div className="flex items-start gap-3 flex-1">
                <span
                  className="gradient-text font-black select-none flex-shrink-0"
                  style={{ fontSize: '48px', lineHeight: '0.7', opacity: 0.2 }}
                >
                  &ldquo;
                </span>
                <div>
                  <p
                    className="text-white font-semibold leading-relaxed"
                    style={{ fontSize: 'clamp(16px, 1.7vw, 22px)', lineHeight: 1.5 }}
                  >
                    Há um ano vendia websites a 300&euro;.
                  </p>
                  <p className="text-white/35 mt-3 italic font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
                    6 anos. 40+ projetos. Um teto invisível.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(123,47,255,0.2), rgba(192,38,211,0.2))',
                    border: '1px solid rgba(192,38,211,0.3)',
                  }}
                >
                  <span className="gradient-text font-bold text-[10px]">MS</span>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium">Engenharia → BMW → Freelance → IA</p>
                  <p className="text-white/30 text-[10px]">Mudou de perspetiva. Não de área.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: contrast statement */}
      <div className="pt-5 flex items-center gap-8">
        <div className="flex items-center gap-4">
          <span
            className="font-black text-white/15"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.03em' }}
          >
            0&euro;
          </span>
          <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(26,111,255,0.5))' }} />
          <span
            className="gradient-text font-black"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.03em' }}
          >
            +4.000&euro;
          </span>
        </div>
        <p className="text-white/30 text-xs font-light">
          A única diferença? Nunca pararam.
        </p>
      </div>
    </div>
  </div>
);
