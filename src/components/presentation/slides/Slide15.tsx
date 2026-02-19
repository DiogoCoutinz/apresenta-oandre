import { useState, useEffect, useMemo } from 'react';
const flowziLogo = '/logo-lettering-preto.png';
import { SpeakerTag } from '../SpeakerTag';

/* Animated counter from 0 to target */
const Counter = ({ target, duration = 2000, prefix = '', suffix = '' }: { target: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(timer);
  }, [target, duration]);
  return <>{prefix}{count.toLocaleString('pt-PT')}{suffix}</>;
};

/* Floating particles */
const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        size: ((i * 7 + 3) % 6) + 2,
        x: (i * 31 + 7) % 100,
        y: (i * 17 + 13) % 100,
        delay: ((i * 19 + 1) % 40) / 10,
        dur: ((i * 13 + 5) % 20) / 10 + 3,
        color: i % 4 === 0 ? '#1A6FFF' : i % 4 === 1 ? '#7B2FFF' : i % 4 === 2 ? '#C026D3' : '#ffffff',
        opacity: i % 4 === 3 ? 0.15 : ((i * 11 + 3) % 30) / 100 + 0.1,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full s15-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: 0,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: `${p.delay + 1}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
};

export const Slide15 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 2600),
      setTimeout(() => setPhase(6), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden" style={{ background: '#050810' }}>
      <SpeakerTag speaker="MARCELO + DIOGO" />

      {/* Animated background layers */}
      <div
        className="absolute inset-0 s15-bg-reveal"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(26,111,255,0.12) 0%, rgba(123,47,255,0.06) 40%, transparent 70%)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1)' : 'scale(0.5)',
          transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Pulse ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: phase >= 2 ? '120vmax' : '0px',
          height: phase >= 2 ? '120vmax' : '0px',
          border: '1px solid rgba(26,111,255,0.15)',
          transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: phase >= 2 ? 0.4 : 0,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: phase >= 2 ? '80vmax' : '0px',
          height: phase >= 2 ? '80vmax' : '0px',
          border: '1px solid rgba(123,47,255,0.1)',
          transition: 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: phase >= 2 ? 0.3 : 0,
        }}
      />

      {/* Floating particles */}
      {phase >= 2 && <Particles />}

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 pointer-events-none s15-grid"
        style={{ opacity: phase >= 1 ? 0.03 : 0, transition: 'opacity 2s ease' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-4xl">

        {/* Phase 1: Flowzi logo drops in */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0) scale(1)' : 'translateY(-60px) scale(0.5)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: phase >= 1 ? 'none' : 'blur(10px)',
          }}
        >
          <div className="relative mb-6">
            <div
              className="absolute inset-0 blur-2xl"
              style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.4) 0%, transparent 70%)', transform: 'scale(3)', opacity: phase >= 5 ? 0.6 : 0.3, transition: 'opacity 1s ease' }}
            />
            <div
              className="relative rounded-xl overflow-hidden px-4 py-2 s15-logo-breathe"
              style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 4px 20px rgba(26,111,255,0.2)' }}
            >
              <img
                src={flowziLogo}
                alt="Flowzi"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Phase 2: "200K" counter */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.8)',
            transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: phase >= 2 ? 'none' : 'blur(20px)',
          }}
        >
          <p
            className="font-black s15-number-glow"
            style={{
              fontSize: 'clamp(72px, 12vw, 160px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              background: 'linear-gradient(135deg, #1A6FFF 0%, #7B2FFF 40%, #C026D3 70%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
            }}
          >
            {phase >= 2 ? <Counter target={200} prefix="" suffix="K" duration={2500} /> : '0K'}
          </p>
          <p
            className="text-white/50 font-bold tracking-[0.2em] uppercase mt-2"
            style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}
          >
            Objetivo 2026
          </p>
        </div>

        {/* Phase 3: Main statement */}
        <div
          className="mt-8"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <p
            className="text-white font-black leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}
          >
            Acreditamos que esta é a{' '}
            <span className="gradient-text">última grande oportunidade</span>
            <br />de jogar o jogo do empreendedorismo.
          </p>
        </div>

        {/* Phase 4: Sub-text */}
        <div
          className="mt-5"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <p className="text-white/50 font-light" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)', lineHeight: 1.6 }}>
            O mundo da IA está a mudar tudo. A janela está aberta.
            <br />Quem entra agora, escreve a história.
          </p>
        </div>

        {/* Phase 5: Divider + Hormozi */}
        <div
          className="mt-8 flex flex-col items-center"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transition: 'all 1s ease-out',
          }}
        >
          <div
            className="h-px mb-6 s15-divider-expand"
            style={{
              width: phase >= 5 ? '200px' : '0px',
              background: 'linear-gradient(90deg, transparent, #1A6FFF, #7B2FFF, #C026D3, transparent)',
              boxShadow: '0 0 20px rgba(26,111,255,0.5)',
              transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <p className="text-white/60 font-medium italic" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}>
            "The only way you can lose is if you quit."
          </p>
          <p className="text-white/25 text-xs mt-1">— Alex Hormozi</p>
        </div>

        {/* Phase 6: CTA + socials */}
        <div
          className="mt-10 flex flex-col items-center"
          style={{
            opacity: phase >= 6 ? 1 : 0,
            transform: phase >= 6 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p
            className="font-black uppercase tracking-[0.3em] s15-cta-pulse"
            style={{
              fontSize: 'clamp(16px, 2vw, 28px)',
              background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3, #1A6FFF)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s go fazer história
          </p>

          <div className="flex items-center gap-6 mt-6">
            {['@flowzi.pt', '@marcelosantos', '@diogocoutinho.ai'].map((handle) => (
              <span key={handle} className="gradient-text-muted font-medium" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
                {handle}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
