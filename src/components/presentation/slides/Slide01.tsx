import { useState, useEffect } from 'react';
import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';

const ORBS = [
  { size: 300, x: '10%', y: '20%', color: 'rgba(26,111,255,0.08)', delay: '0s', duration: '20s', blur: 75 },
  { size: 200, x: '75%', y: '60%', color: 'rgba(123,47,255,0.10)', delay: '-5s', duration: '25s', blur: 50 },
  { size: 250, x: '60%', y: '15%', color: 'rgba(192,38,211,0.07)', delay: '-10s', duration: '22s', blur: 62 },
  { size: 180, x: '25%', y: '70%', color: 'rgba(26,111,255,0.07)', delay: '-15s', duration: '28s', blur: 45 },
  { size: 350, x: '50%', y: '40%', color: 'rgba(123,47,255,0.06)', delay: '-8s', duration: '30s', blur: 88 },
  { size: 150, x: '85%', y: '30%', color: 'rgba(192,38,211,0.09)', delay: '-12s', duration: '18s', blur: 38 },
];

const PARTICLES = [
  { left: '8%', size: 2, delay: '0s', duration: '10s', color: '#1A6FFF' },
  { left: '15%', size: 3, delay: '2s', duration: '14s', color: '#7B2FFF' },
  { left: '22%', size: 2, delay: '5s', duration: '11s', color: '#C026D3' },
  { left: '30%', size: 4, delay: '1s', duration: '16s', color: '#1A6FFF' },
  { left: '38%', size: 2, delay: '7s', duration: '9s', color: '#7B2FFF' },
  { left: '45%', size: 3, delay: '3s', duration: '13s', color: '#C026D3' },
  { left: '52%', size: 2, delay: '9s', duration: '15s', color: '#1A6FFF' },
  { left: '60%', size: 3, delay: '4s', duration: '10s', color: '#7B2FFF' },
  { left: '68%', size: 2, delay: '6s', duration: '12s', color: '#C026D3' },
  { left: '75%', size: 4, delay: '0.5s', duration: '14s', color: '#1A6FFF' },
  { left: '82%', size: 2, delay: '8s', duration: '11s', color: '#7B2FFF' },
  { left: '90%', size: 3, delay: '2.5s', duration: '16s', color: '#C026D3' },
];

export const Slide01 = () => {
  const [phase, setPhase] = useState(0);
  // phase 0 = hidden, 1 = photo reveal, 2 = logo, 3 = title, 4 = subtitle+names, 5 = all continuous

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),   // photo
      setTimeout(() => setPhase(2), 800),   // logo drops in
      setTimeout(() => setPhase(3), 1500),  // title flies in
      setTimeout(() => setPhase(4), 2400),  // subtitle + names
      setTimeout(() => setPhase(5), 3200),  // continuous animations activate
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0B0F1A' }}>
      <SpeakerTag speaker="MARCELO + DIOGO" />

      {/* Hero photo — zooms in from scale(1.3) on entry, then Ken Burns loop */}
      <div
        className={`absolute inset-0 ${phase >= 5 ? 's01-ken-burns' : ''}`}
        style={{
          transform: phase >= 1 ? 'scale(1)' : 'scale(1.3)',
          opacity: phase >= 1 ? 1 : 0,
          transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease',
        }}
      >
        <img
          src="/fotodiogomarcelolanding.png"
          alt="Marcelo e Diogo"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 65%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top,
              rgba(11,15,26,0.98) 0%,
              rgba(11,15,26,0.85) 25%,
              rgba(11,15,26,0.4) 50%,
              rgba(11,15,26,0.15) 70%,
              rgba(11,15,26,0.3) 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(11,15,26,0.6) 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(26,111,255,0.12) 0%, transparent 60%)' }}
        />
      </div>

      {/* Aurora */}
      <div
        className="absolute inset-0 pointer-events-none s01-aurora"
        style={{ opacity: phase >= 3 ? 1 : 0, transition: 'opacity 2s ease 0.5s' }}
      />

      {/* Tech grid */}
      <div
        className={`absolute inset-0 pointer-events-none ${phase >= 5 ? 's01-grid' : ''}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,111,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,111,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: phase >= 2 ? 0.03 : 0,
          transition: 'opacity 2s ease',
        }}
      />

      {/* Scan line — only after full entry */}
      {phase >= 5 && <div className="s01-scan-line" />}

      {/* Floating orbs — fade in during phase 3+ */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none ${phase >= 5 ? 's01-orb' : ''}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
            filter: `blur(${orb.blur}px)`,
            opacity: phase >= 3 ? 1 : 0,
            transition: `opacity 2s ease ${i * 0.15}s`,
          }}
        />
      ))}

      {/* Particles — only after full entry */}
      {phase >= 5 && PARTICLES.map((p, i) => (
        <div
          key={`p-${i}`}
          className="absolute pointer-events-none s01-particle"
          style={{
            left: p.left,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0,
          }}
        />
      ))}

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">

        {/* Logo — drops in from above with bounce */}
        <div
          className={`mb-10 ${phase >= 5 ? 's01-logo-breathe' : ''}`}
          style={{
            transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(-80px) scale(0.5)',
            opacity: phase >= 2 ? 1 : 0,
            transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease',
          }}
        >
          <img src={flowziLogo} alt="Flowzi" className="h-20 object-contain" />
        </div>

        {/* Title — each word flies in from different directions */}
        <h1
          className={`font-black text-white text-center leading-none tracking-tight relative ${phase >= 5 ? 's01-title-glow' : ''}`}
          style={{ fontSize: 'clamp(56px, 8vw, 100px)', letterSpacing: '-0.04em' }}
        >
          {phase >= 5 && <span className="s01-light-sweep" />}

          {/* "Do" — slides from left */}
          <span
            style={{
              display: 'inline-block',
              transform: phase >= 3 ? 'translateX(0) rotate(0deg)' : 'translateX(-120px) rotate(-8deg)',
              opacity: phase >= 3 ? 1 : 0,
              transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
          >
            Do
          </span>{' '}

          {/* "Zero" — drops from above */}
          <span
            style={{
              display: 'inline-block',
              transform: phase >= 3 ? 'translateY(0) scale(1)' : 'translateY(-60px) scale(0.7)',
              opacity: phase >= 3 ? 1 : 0,
              transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s, opacity 0.6s ease 0.1s',
            }}
          >
            Zero
          </span>{' '}

          {/* "aos" — fades in */}
          <span
            style={{
              display: 'inline-block',
              transform: phase >= 3 ? 'scale(1)' : 'scale(0.3)',
              opacity: phase >= 3 ? 1 : 0,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, opacity 0.5s ease 0.2s',
            }}
          >
            aos
          </span>{' '}

          {/* "+4.000€" — flies from right with glow explosion */}
          <span
            className="relative inline-block"
            style={{
              color: '#ffffff',
              transform: phase >= 3 ? 'translateX(0) scale(1)' : 'translateX(150px) scale(1.3)',
              opacity: phase >= 3 ? 1 : 0,
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, opacity 0.6s ease 0.3s',
              textShadow: phase >= 3 ? '0 0 30px rgba(26,111,255,0.6), 0 0 60px rgba(123,47,255,0.3)' : 'none',
            }}
          >
            +4.000&euro;
            <span
              className={`absolute left-0 right-0 -bottom-2 h-1 rounded-full ${phase >= 5 ? 's01-underline' : ''}`}
              style={{
                background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3, #1A6FFF)',
                backgroundSize: '200% 100%',
                transform: phase >= 3 ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
                boxShadow: '0 0 15px rgba(26,111,255,0.6), 0 0 30px rgba(123,47,255,0.3)',
              }}
            />
          </span>
        </h1>

        {/* Divider — draws itself from center */}
        <div
          className={`my-8 ${phase >= 5 ? 's01-divider' : ''}`}
          style={{
            height: '1px',
            width: phase >= 4 ? '200px' : '0px',
            background: 'linear-gradient(90deg, transparent, #1A6FFF, #7B2FFF, #C026D3, transparent)',
            transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 0 10px rgba(26,111,255,0.5)',
          }}
        />

        {/* Subtitle — rises from below */}
        <p
          className="text-center font-medium max-w-xl"
          style={{
            fontSize: 'clamp(17px, 2vw, 24px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.92)',
            textShadow: '0 0 30px rgba(26,111,255,0.5), 0 0 60px rgba(123,47,255,0.25)',
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(40px)',
            opacity: phase >= 4 ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
          }}
        >
          O que aprendemos a construir, vender e escalar com{' '}
          <span
            className={`font-bold ${phase >= 5 ? 's01-ia-glow' : ''}`}
            style={{
              background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            IA
          </span>
        </p>

        {/* Speaker names — fade in last */}
        <p
          className="font-light tracking-widest uppercase mt-10"
          style={{
            fontSize: '13px',
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.65)',
            textShadow: '0 0 20px rgba(26,111,255,0.3)',
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
            opacity: phase >= 4 ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.8s ease 0.2s',
          }}
        >
          Marcelo &amp; Diogo — Flowzi
        </p>
      </div>
    </div>
  );
};
